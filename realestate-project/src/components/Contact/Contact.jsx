import { Form, Input, Button } from "antd";
import { toastText } from "../../constants/Data";

export default function Contact() {
  const onFinish = (values) => {
    toastText("Your contact is saved", "success");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Contact information */}
              <div className="flex flex-col mt-8 text-gray-600">
                <div className="flex">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Acme Inc, Street, State, Postal Code
                  </div>
                </div>
                <div className="flex">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 pt-5 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>
                <div className="flex">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500 mt-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 pt-5 text-md tracking-wide font-semibold w-40">
                    info@acme.org
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <Form
              name="contact"
              className="p-6 flex flex-col justify-center"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="flex flex-col">
                <label htmlFor="name">Full Name</label>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="email">Email</label>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input type="email" placeholder="Email" />
                </Form.Item>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="tel">Telephone Number</label>
                <Form.Item
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input type="tel" placeholder="Telephone Number" />
                </Form.Item>
              </div>

              <div className="md:w-32 h-10 mt-3 hover:bg-orange-700 rounded-lg">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="md:w-32 h-10 hover:bg-orange-600 bg-orange-700  text-white font-bold rounded-lg   "
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
