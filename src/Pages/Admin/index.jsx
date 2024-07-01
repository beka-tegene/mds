import React from "react";
import { Sidebar } from "./Sidebar";
import { Challenge } from "./Challenge";

export const Admin = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className=" col-span-2 ">
        <Sidebar />
      </div>
      <div className=" col-span-10">
        <Challenge />
      </div>
    </div>
  );
};
