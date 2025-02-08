import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [form] = Form.useForm();
  const [tab, setTab] = useState(
    new URLSearchParams(window.location.search).get("tab") || "Profile"
  );

  const handlePageChange = (tab) => {
    setTab(tab);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tab);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const onEditProfile = (values) => {
    console.log("Profile Update Values:", values);
  };

  useEffect(() => {
    const data = {
      fullName: "John Doe", // Example data
      email: "john.doe@example.com",
      mobileNumber: "1234567890",
      address: "123 Main St",
    };
    form.setFieldsValue(data);
  }, [form]);

  return (
    <div className="bg-gradient-to-r from-[#0f0850] via-[#103b74] to-[#4d50c2] opacity-95 ">
      <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
        <div className="max-w-7xl m-auto text-xl font-bold">Profile</div>
      </div>
      <div className=" py-10 px-4 lg-px-0">
        <div className="bg-[#DBE3EA] max-w-7xl m-auto  py-9 px-10 rounded-3xl  gap-6">
          <div>
            <div className="relative w-[140px] h-[124px] mx-auto flex items-center gap-5">
              <input
                type="file"
                onInput={handleChange}
                id="img"
                style={{ display: "none" }}
              />
              <img
                style={{ width: 140, height: 140, borderRadius: "100%" }}
                src={
                  image ? URL.createObjectURL(image) : "default-image-url.jpg"
                } // Placeholder for image
                alt=""
                className="shadow-2xl object-cover"
              />
              {tab === "Profile" && (
                <label
                  htmlFor="img"
                  className="absolute top-1/2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
                >
                  <CiEdit color="#929394" />
                </label>
              )}
              <div>
                <div>
                  <h2 className="text-sm text-blue-500">Hello</h2>
                  <h1 className="text-2xl ">Robana </h1>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="flex items-center justify-start max-w-xl m-auto px-4 gap-6 my-6">
          <p
            onClick={() => handlePageChange("Profile")}
            className={` ${
              tab === "Profile"
                ? "border-white border-b-2 font-bold text-white "
                : "border-b-2 border-transparent font-normal text-white"
            } pb-2 cursor-pointer text-[16px] leading-5`}
          >
            Edit Profile
          </p>
          <p
            onClick={() => handlePageChange("Change Password")}
            className={` ${
              tab === "Change Password"
                ? "border-white border-b-2 font-bold text-white "
                : "border-b-2 border-transparent font-normal text-white"
            } pb-2 cursor-pointer text-base leading-[18px]`}
          >
            Change Password
          </p>
        </div>

        <div className="max-w-xl m-auto px-4">
          <div className="bg-[#DBE3EA] ">
            {tab === "Profile" ? (
              <div className="max-w-[481px] mx-auto rounded-lg p-6">
                <h1 className="text-center text-secondary leading-7 text-2xl font-medium mb-7">
                  Edit Profile
                </h1>
                <Form onFinish={onEditProfile} layout="vertical" form={form}>
                  <Form.Item
                    name="fullName"
                    label={
                      <p className="text-[#919191] text-[16px] leading-5 font-normal">
                        User Name
                      </p>
                    }
                  >
                    <Input
                      style={{
                        width: "100%",
                        height: 40,
                        border: "1px solid #DCDDDE",
                        borderRadius: "8px",
                        color: "#919191",
                        backgroundColor: "#F6F6F6",
                        outline: "none",
                      }}
                      className="text-[16px] leading-5"
                      placeholder="name123"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={
                      <p className="text-[#919191] text-[16px] leading-5 font-normal">
                        Email
                      </p>
                    }
                  >
                    <Input
                      style={{
                        width: "100%",
                        height: 48,
                        border: "1px solid #DCDDDE",
                        backgroundColor: "#F6F6F6",
                        borderRadius: "8px",
                        color: "#919191",
                        outline: "none",
                      }}
                      disabled
                      className="text-[16px] leading-5"
                      placeholder="xyz@gmail.com"
                    />
                  </Form.Item>

                  <Form.Item
                    name="mobileNumber"
                    label={
                      <p className="text-[#919191] text-[16px] leading-5 font-normal">
                        Contact Number
                      </p>
                    }
                  >
                    <Input
                      style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: "#F6F6F6",
                        border: "1px solid #DCDDDE",
                        borderRadius: "8px",
                        color: "#919191",
                        outline: "none",
                      }}
                      className="text-[16px] leading-5"
                      placeholder="+9900700007"
                    />
                  </Form.Item>

                  <Form.Item
                    name="fullName"
                    label={
                      <p className="text-[#919191] text-[16px] leading-5 font-normal">
                        Designation
                      </p>
                    }
                  >
                    <Input
                      style={{
                        width: "100%",
                        height: 40,
                        border: "1px solid #DCDDDE",
                        borderRadius: "8px",
                        color: "#919191",
                        backgroundColor: "#F6F6F6",
                        outline: "none",
                      }}
                      className="text-[16px] leading-5"
                      placeholder="Actor"
                    />
                  </Form.Item>
                  <Form.Item
                    name="address"
                    label={
                      <p className="text-[#919191] text-[16px] leading-5 font-normal">
                        Address
                      </p>
                    }
                  >
                    <Input
                      style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: "#F6F6F6",
                        border: "1px solid #DCDDDE",
                        borderRadius: "8px",
                        color: "#919191",
                        outline: "none",
                      }}
                      className="text-[16px] leading-5"
                      placeholder="79/A Joker Vila, Gotham City"
                    />
                  </Form.Item>

                  <Form.Item
                    style={{
                      marginBottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        width: 197,
                        height: 48,
                        color: "#FCFCFC",
                        background: "#2E4CB9",
                      }}
                      className="font-normal text-[16px] leading-6 bg-[#2E4CB9]"
                    >
                      Save Changes
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              <div className="max-w-[481px] mx-auto rounded-lg p-6">
                <h1 className="text-center text-secondary leading-7 text-2xl font-medium mb-7">
                  Change Password
                </h1>
                <Form layout="vertical" onFinish={onFinish} form={form}>
                  <Form.Item
                    name="oldPassword"
                    label={
                      <p className="text-[#415D71] text-sm leading-5">
                        Current Password
                      </p>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Current Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      style={{
                        width: "100%",
                        height: "42px",
                        border: "1px solid #DCDDDE",
                        backgroundColor: "#F6F6F6",
                        borderRadius: "8px",
                        color: "black",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="***************"
                    />
                  </Form.Item>

                  <Form.Item
                    name="newPassword"
                    rules={[
                      { required: true, message: "Please Enter New Password!" },
                    ]}
                    label={
                      <p className="text-[#415D71] text-sm leading-5">
                        New Password
                      </p>
                    }
                  >
                    <Input.Password
                      style={{
                        width: "100%",
                        height: "42px",
                        border: "1px solid #DCDDDE",
                        backgroundColor: "#F6F6F6",
                        borderRadius: "8px",
                        color: "black",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="************"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <p className="text-[#415D71] text-sm leading-5">
                        Confirm Password
                      </p>
                    }
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Confirm Password!",
                      },
                    ]}
                  >
                    <Input.Password
                      style={{
                        width: "100%",
                        height: "42px",
                        border: "1px solid #DCDDDE",
                        backgroundColor: "#F6F6F6",
                        borderRadius: "8px",
                        color: "black",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="***************"
                    />
                  </Form.Item>

                  <Form.Item
                    style={{
                      marginBottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        width: 197,
                        height: 48,
                        color: "#FFFFFF",
                        background: "#272121",
                      }}
                      className="font-normal text-[16px] leading-6 bg-primary"
                    >
                      Save Changes
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
