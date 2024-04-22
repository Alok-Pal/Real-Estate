import { Button, Form, Input, Radio, Select } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageAddSvg, addListingFields, toastText } from "../../constants/Data";
import "./index.css";

const AddListing = () => {
  const formRef = useRef(null); // Reference to the form
  const fileInputRef = useRef(null);
  const [fileData, setFileData] = useState();
  const { Option } = Select;
  const [selectValues, setSelectValues] = useState([]);
  const [errors, setErrors] = useState("");
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
    // Do something with the selected file

    setFileData(file);
  };

  const onSubmit = async (values) => {
    values.amenities = selectValues;
    const accessToken = localStorage.getItem("AccessToken");
    if (values.amenities.length > 0) {
      const formData = new FormData();

      formData.append("file", fileData);
      formData.append("values", JSON.stringify(values));

      axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}/upload`, formData, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          if (response?.data?.statusCode === 200) {
            toastText(response?.data?.message, "success");
          } else {
            toastText(response?.data?.message, "error");
            localStorage.clear();
            navigate("/login");
          }
          formRef.current.resetFields();
        });
    } else {
      setErrors("Please select amenities");
    }
  };

  return (
    <>
      <div className="flex justify-center " style={{ width: "100%" }}>
        <Form
          style={{ width: "70%", marginTop: "2.7%" }}
          name="basic"
          onFinish={onSubmit}
          initialValues={{
            rememberMe: false, // Set default value for rememberMe
          }}
          ref={formRef} // Assigning ref to the form
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {addListingFields.map((singleUserInput, key) => {
              return (
                <div key={key} className="mt-7 font-bold ">
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
                            type={singleUserInput.type}
                          />
                        )}

                        {singleUserInput.type === "number" && (
                          <div>
                            <Input
                              type="number"
                              placeholder={singleUserInput.placeHolder}
                              size="large"
                            />
                          </div>
                        )}
                        {singleUserInput.type === "radio" && (
                          <div>
                            <Radio.Group style={{ width: "100%" }} size="large">
                              <Radio.Button value="For rent">
                                For Rent
                              </Radio.Button>
                              <Radio.Button value="For Sale">
                                For Sale
                              </Radio.Button>
                            </Radio.Group>
                          </div>
                        )}

                        {singleUserInput.type === "select" && (
                          <div>
                            <Select
                              mode="multiple"
                              placeholder="Please select amenities"
                              onChange={selectHandleChange}
                              style={{ width: "100%" }}
                              size="large"
                            >
                              {amenitiesOptions?.map((data, index) => (
                                <Option key={data}>{data}</Option>
                              ))}
                            </Select>
                            {errors ? (
                              <span style={{ color: "#ff4d4f" }}>{errors}</span>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
                        {singleUserInput.type === "image" && (
                          <div>
                            <Form.Item>
                              <div className="flex w-full justify-center">
                                <div className="flex flex-wrap bg-white  rounded   max-w-xl min-w-sm gap-2 w-full">
                                  <div className="w-full space-y-2">
                                    <div
                                      className="border mx-auto  rounded-xl cursor-pointer w-72 flex justify-center items-center"
                                      style={{ padding: "10px" }}
                                    >
                                      <div
                                        className="w-full h-full flex justify-center items-center"
                                        onClick={handleImageClick}
                                      >
                                        <input
                                          accept="image/*"
                                          // multiple=""
                                          className="hiddenInput"
                                          type="file"
                                          ref={fileInputRef}
                                          onChange={handleFileChange}
                                        />
                                        <ImageAddSvg />
                                        <div className="flex flex-col justify-center items-center">
                                          <h3 className="text-smooth-orange text-sm font-semibold">
                                            Drop your image here, or{" "}
                                            <span className="text-dark-orange font-bold">
                                              browse
                                            </span>
                                          </h3>
                                          {/* <p className="text-xs text-faded-orange font-medium">
                                            Maximum file size: 10MB
                                          </p>
                                          <p className="text-xs text-faded-orange font-medium">
                                            Allowed file types: JPG, PNG, GIF
                                          </p> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Form.Item>
                          </div>
                        )}
                      </Form.Item>
                    </div>
                  </>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center hoverBtnRemove">
            <Button
              className="hoverBtnRemove h-10 text-white bg-orange-700 hover:bg-orange-800 btnSize  text-base mb-5 "
              htmlType="submit"
              //   loading={isLoading}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddListing;
