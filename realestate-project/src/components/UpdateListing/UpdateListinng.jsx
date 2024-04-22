import { Button, Form, Input, Radio, Select } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ImageAddSvg,
  editListingFields,
  toastText
} from "../../constants/Data";
import "./index.css";

const UpdateListing = (props) => {
  const { handleEditCancel, filterData } = props;
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileData, setFileData] = useState();
  const [selectValues, setSelectValues] = useState([...filterData?.amenities]);
  const [errors, setErrors] = useState("");

  const [loading, setLoading] = useState(false);

  const amenitiesOptions = [
    "Furnished",
    "UnFurnished",
    "Balcony",
    "Spa",
    "Air conditioner",
    "View",
    "Playground",
    "Garden",
  ];

  const navigate = useNavigate();

  const selectHandleChange = (values) => {
    setSelectValues(values);
    setErrors("");
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileData(file);
  };

  const onSubmit = async (values) => {
    setLoading(true);
    values.amenities = selectValues;
    values.userId = filterData?.userId;
    values.listId = filterData?.id;
    // values.price =
    const accessToken = localStorage.getItem("AccessToken");

    if (values.amenities.length > 0) {
      const formData = new FormData();

      formData.append("file", fileData);
      formData.append("values", JSON.stringify(values));
      axios
        .put(`${process.env.REACT_APP_API_ENDPOINT}/upload/update`, formData, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response?.data?.statusCode === 200) {
            toastText(response?.data?.message, "success");
            navigate("/");
            formRef.current.resetFields();
          } else {
            toastText(response?.data?.message, "error");
          }
          formRef.current.resetFields();
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          toastText("An error occurred while submitting the form", "error");
        });
      setLoading(false);
    } else {
      setErrors("Please select amenities");
    }
  };

  return (
    <div className="flex justify-center" style={{ width: "100%" }}>
      <Form
        style={{ width: "70%", marginTop: "2.7%" }}
        name="basic"
        onFinish={onSubmit}
        initialValues={filterData} // Set initial form values from filterData
        ref={formRef}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {editListingFields?.map((singleUserInput, key) => (
            <div key={key} className="mt-7 font-bold">
              <>
                <div className="flex mx-2">
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
                    className="p-2"
                  >
                    {singleUserInput.type === "text" && (
                      <Input
                        placeholder={singleUserInput.placeHolder}
                        size="large"
                      />
                    )}

                    {singleUserInput.type === "number" && (
                      <Input
                        type="number"
                        placeholder={singleUserInput.placeHolder}
                        size="large"
                      />
                    )}

                    {singleUserInput.type === "radio" && (
                      <Radio.Group style={{ width: "100%" }} size="large">
                        <Radio.Button value="For rent">For Rent</Radio.Button>
                        <Radio.Button value="For Sale">For Sale</Radio.Button>
                      </Radio.Group>
                    )}

                    {singleUserInput.type === "select" && (
                      <Select
                        mode="multiple"
                        placeholder="Please select amenities"
                        onChange={selectHandleChange}
                        style={{ width: "100%" }}
                        size="large"
                      >
                        {amenitiesOptions?.map((data, index) => (
                          <Select.Option key={data}>{data}</Select.Option>
                        ))}
                      </Select>
                    )}

                    {singleUserInput.type === "image" && (
                      <div>
                        <input
                          accept="image/*"
                          className="hiddenInput"
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <div
                          className="border mx-auto  rounded-xl cursor-pointer w-72 flex justify-center items-center"
                          style={{ padding: "10px" }}
                          onClick={handleImageClick}
                        >
                          <ImageAddSvg />
                          <div className="flex flex-col justify-center items-center">
                            <h3 className="text-smooth-orange text-sm font-semibold">
                              Drop your image here, or{" "}
                              <span className="text-dark-orange font-bold">
                                browse
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    )}
                  </Form.Item>
                </div>
              </>
            </div>
          ))}
        </div>

        <span className=" hoverBtnRemove w-full ">
          <Button
            className="hoverBtnRemove w-96 h-10 text-white bg-orange-700 hover:bg-orange-800 btnSize  text-base mb-5 mx-2"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </span>
        <span className="w-full">
          <Button
            className=" h-10 text-black  btnSize w-96  text-base mb-5 hover:bg-white "
            htmlType="reset"
            onClick={handleEditCancel}
          >
            Cancel
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default UpdateListing;
