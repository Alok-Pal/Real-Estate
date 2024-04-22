import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpFields, toastText } from "../../constants/Data";
import { signUpAction } from "../../redux/actions/signUpAction.jsx";
import "./index.css";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = (values) => {
    setIsLoading(true);
    dispatch(signUpAction(values))
      .unwrap()
      .then((res) => {
        if (res?.statusCode === 200) {
          toastText("User signed up successfully", "success");
          navigate('/login')
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
          style={{ height: "39%" }}
          name="basic"
          onFinish={onSubmit}
          initialValues={{
            rememberMe: false, // Set default value for rememberMe
          }}
        >
          <div>
            {signUpFields?.map((singleUserInput, key) => {
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
              SignUp
            </Button>
          </div>
          <div className="flex justify-center mt-3 text-sm font-medium">
            Already have an Account?
            <Link to="/login" className=" text-cyan-500 underline ms-4">
              Login !
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUpPage;
