import { Avatar, Button, Form, Image, Input, Modal, Tooltip } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  DeleteSvg,
  EditSvg,
  enquiryFields,
  loginFields,
  toastText,
} from "../../constants/Data";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ConfirmDelete from "../DeleteModal/DeleteModal";
import UpdateListing from "../UpdateListing/UpdateListinng";

const CardDetail = () => {
  const { id } = useParams();
  //   For enquiry modal
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // For delete modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalLoading, setDeleteModalIsLoading] = useState(false);

  const [listData, setListData] = useState([]);
  const [filterData, setFilterData] = useState({});
  // const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  // For Edit
  const [openEditModal, setOpenEditModal] = useState(false);
  const showEditModal = () => {
    setOpenEditModal(true);
  };

  const handleEditCancel = () => {
    setOpenEditModal(false);
  };

  // For enquiry modal
  const showModal = () => {
    setOpen(true);
  };

  const onSubmit = (values) => {
    setOpen(false);
    setConfirmLoading(false);
    formRef.current.resetFields();
    toastText("Enquiry is submitted", "success");
  };

  const handleCancel = () => {
    setOpen(false);
  };

  //For delete modal
  const deleteHandleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteHandler = () => {
    setDeleteModalIsLoading(true);
    const accessToken = localStorage.getItem("AccessToken");
    if (filterData && accessToken) {
      axios
        .delete(`${process.env.REACT_APP_API_ENDPOINT}/delete`, {
          data: filterData,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response?.data?.statusCode === 200) {
            toastText(response?.data?.message, "success");
            navigate("/");
          } else {
            toastText(response?.data?.message, "error");
          }
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          toastText("An error occurred while deleting data", "error");
        })
        .finally(() => {
          setDeleteModalIsLoading(false);
        });
    } else {
      toastText("You have to Login to delete the listing", "error");
      setDeleteModalIsLoading(false);
      setIsModalOpen(false);
    }
  };

  const filterById = (data, id) => {
    return data.filter((item) => item.id === id);
  };

  const mergeListings = useCallback((users) => {
    const mergedListings = [];
  
    users.forEach((user) => {
      // Add user information (name, email) to each listing
      const userWithListing = user.listing.map((listing) => ({
        ...listing,
        name: user.name,
        email: user.email,
      }));
  
      mergedListings.push(...userWithListing);
    });
  
    setListData(mergedListings);
  }, []);
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/user/userData`)
      .then((res) => {
        mergeListings(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // const userDetail = JSON.parse(localStorage.getItem("user"));
    // setUserData({ name: userDetail?.name, email: userDetail?.email });
  }, [mergeListings]);

  useEffect(() => {
    const filteredItems = filterById(listData, id);
    setFilterData(...filteredItems);
  }, [id, listData, mergeListings]);

  return (
    <>
      <div className="grid grid-cols-2">
        <div className=" p-14">
          <Image
            className="w-2/4 rounded-lg"
            src={`http://localhost:8000/Images/${filterData?.image}`}
            alt=""
          />
        </div>
        <div>
          <p className="pt-14 flex justify-between">
            <span className="font-bold text-3xl">Added By: </span>
            <div className="flex mx-6 cursor-pointer">
              <Tooltip placement="bottom" title="edit">
                <span className="mx-4" onClick={showEditModal}>
                  <EditSvg />
                </span>
              </Tooltip>
              <Tooltip placement="bottom" title="delete">
                <span onClick={() => setIsModalOpen(true)}>
                  <DeleteSvg />
                </span>
              </Tooltip>
            </div>
          </p>
          <div className="flex">
            <p className="border-double rounded-full mx-2 my-2  mt-5 border-8 border-orange-500 w-28">
              <Avatar
                className="w-24 h-24"
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              />
            </p>
            <div>
              <p className="mx-2 my-2 mt-10 text-xl font-bold">
                {filterData?.name}
              </p>
              <p className="mx-2 my-2  text-xl font-serif">{filterData?.email}</p>
            </div>
          </div>
          <div
            className="flex justify-center mt-10 cursor-pointer "
            onClick={showModal}
          >
            <p className="text-xl bg-orange-500 text-white p-1 rounded w-56 ">
              <span className="ps-9">Make an enquiry</span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-14">
        <p>
          <span className="font-bold text-3xl">Address : </span>
          <span className="text-xl">{filterData?.address}</span>
        </p>
        <div className=" px-4 py-4  border-double rounded-xl mx-2 my-2  mt-5 border border-orange-500">
          <p className=" border-dashed border-orange-500">
            <span className="font-bold text-2xl ">Price : </span>
            <span className="text-xl  text-cyan-400">
              {filterData?.price} Rs
            </span>
          </p>
          <p className="mt-2">
            <span className="font-bold text-2xl ">Listing type : </span>
            <span className=" text-xl bg-orange-500 text-white p-1 rounded">
              {filterData?.listingType}
            </span>
          </p>
        </div>
        <div className=" px-4 py-4  border-double rounded-xl mx-2 my-2  mt-5 border border-orange-500">
          <p className=" border-dashed border-orange-500">
            <span className="font-bold text-2xl">Description : </span>
            <span className="text-xl">{filterData?.description}</span>
          </p>
        </div>
      </div>

      {
        <Modal
          open={open}
          //   onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={false}
        >
          <Form
            className="w-96"
            style={{ marginTop: "2.7%" }}
            name="basic"
            onFinish={onSubmit}
            initialValues={{
              rememberMe: false, // Set default value for rememberMe
            }}
            ref={formRef}
          >
            <h3 className="text-2xl">Add an enquiry</h3>
            <div className="mt-4">
              {enquiryFields.map((singleUserInput, key) => {
                return (
                  <div key={key} className="font-bold ">
                    <>
                      <div className="flex ">
                        <label>
                          {singleUserInput.title}{" "}
                          {singleUserInput?.required && (
                            <span className="required-color">*</span>
                          )}
                        </label>
                      </div>
                      <div>
                        <Form.Item
                          name={singleUserInput.name}
                          rules={singleUserInput?.rules}
                        >
                          {singleUserInput.type === "text" && (
                            <Input
                              placeholder={singleUserInput.placeHolder}
                              size="large"
                              type={singleUserInput.type}
                            />
                          )}
                        </Form.Item>
                      </div>
                    </>
                  </div>
                );
              })}
            </div>
            <div className="flex mt-6 hoverBtnRemove">
              <Button
                className=" mt-4 hoverBtnRemove h-10 text-white bg-orange-700 hover:bg-orange-800 btnSize  text-base "
                htmlType="submit"
                //   loading={isLoading}
                // onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal>
      }

      <ConfirmDelete
        handleCancel={deleteHandleCancel}
        handleOk={deleteHandleCancel}
        isModalOpen={isModalOpen}
        deleteHandler={deleteHandler}
        isAddUserLoading={isDeleteModalLoading}
      />

      {
        <Modal
          open={openEditModal}
          confirmLoading={confirmLoading}
          onCancel={handleEditCancel}
          footer={false}
          width={'60vw'}
        >
          <UpdateListing handleEditCancel={handleEditCancel} filterData={filterData}  />
        </Modal>
      }
    </>
  );
};

export default CardDetail;
