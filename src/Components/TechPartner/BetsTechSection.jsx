import React from "react";
import { Form, Input, Button } from "antd";

import { Apply } from "./Apply";
import { Link } from "react-router-dom";

export const BetsTechSection = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" py-12 px-4">
      <h1 className="md:text-4xl text-3xl font-bold text-center pb-11 text-white ">Tech Partners</h1>
      <Apply></Apply>
    </div>
  );
};
