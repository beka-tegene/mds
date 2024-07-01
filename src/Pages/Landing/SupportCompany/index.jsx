import React from "react";
import brand1 from "../../../assets/images.png";
import brand2 from "../../../assets/images (1).png";
import brand3 from "../../../assets/1-mobile.jpg";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
export const SupportCompany = () => {
  return (
    <div className="flex flex-col gap-10 items-center p-10 max-sm:px-2">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-medium">Your voice matters</h1>
        <p>These petitions need your help to achieve victory.</p>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-4/5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className=" shadow-md" key={index}>
            <div className="w-full h-60 overflow-hidden">
              <img
                src={
                  index % 2 === 0 ? brand1 : index % 3 === 0 ? brand2 : brand3
                }
                alt="brand"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col p-5">
              <h1 className=" text-xl font-semibold">Your voice matters</h1>
              <p>These petitions need your help to achieve victory.</p>
            </div>
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 text-xs">
                  <AiOutlineLike size={18}/> 1 Like
                  <AiOutlineDislike size={18}/> 2 Dislike
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <FaRegCommentAlt size={18}/> 3 comment
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <IoShareSocialOutline size={18}/> share
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
