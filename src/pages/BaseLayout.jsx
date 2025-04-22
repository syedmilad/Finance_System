import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col ">
      <div className=" min-w-full w-screen min-h-[60px]">
        <Header />
      </div>
      <div className="w-full h-full flex flex-row !bg-[#f4f5f7]">
        <div className="min-w-[240px]  ">
          <Sidebar />
        </div>
        <div className="min-w-[calc(240px - 100%)] w-full">{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
