import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFields, toastText } from "../../constants/Data";
import { logInAction } from "../../redux/actions/loginAction";
import "./index.css";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const onSubmit = (values) => {
    setIsLoading(true);
    dispatch(logInAction(values))
      .unwrap()
      .then((res) => {
        if (res?.statusCode === 200) {
          toastText("User logged in successfully", "success");
          navigate("/");
        } else {
          toastText(res?.message, "error");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toastText(err?.message, "error");
        setIsLoading(false);
      });
  };


  return (
    <>
      <div className="flex justify-center mb-5">
        <Form
          className="w-96"
          style={{ marginTop: "2.7%" }}
          name="basic"
          onFinish={onSubmit}
          initialValues={{
            rememberMe: false, // Set default value for rememberMe
          }}
        >
          <div>
            {loginFields.map((singleUserInput, key) => {
              return (
                <div key={key} className="mt-7 font-bold ">
                  <>
                    <div className="flex ">
                      {singleUserInput.svg && (
                        <div className="mx-3">{singleUserInput.svg}</div>
                      )}
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

                        {singleUserInput.type === "password" && (
                          <div>
                            <Input.Password
                              placeholder={singleUserInput.placeHolder}
                              size="large"
                            />
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
              className="hoverBtnRemove h-10 text-white bg-orange-700 hover:bg-orange-800 btnSize  text-base "
              htmlType="submit"
              loading={isLoading}
            >
              LogIn
            </Button>
          </div>
          <div className="flex justify-center mt-3 text-sm font-medium">
            Don't have an Account?
            <Link to="/signUp" className=" text-cyan-500 underline ms-4">
              SignUp !
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
