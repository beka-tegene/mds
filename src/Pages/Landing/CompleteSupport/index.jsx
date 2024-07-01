import React from "react";
import brand from "../../../assets/image.jpg";
import { NavLink } from "react-router-dom";
export const CompleteSupport = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen ">
      <div className="w-[600px] py-5">
        <div className="mb-4">
          <h4 className="text-center text-lg font-bold">
            Complete Your Support
          </h4>
        </div>
        <div className="bg-white shadow-md rounded-md flex flex-col gap-3">
          <div className="w-full  max-h-[45vh] overflow-hidden">
            <img src={brand} alt="brand" className="w-full rounded-md" />
          </div>
          <div className="px-7 pb-7 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-semibold">
                Teddy, can you chip in $7 to get this petition on the agenda?
              </h1>
              <p>
                Getting support in a timely manner is critical to a petition’s
                success.
              </p>
              <p>
                Your contribution can help Change.org reach new potential
                supporters in a matter of hours.
              </p>
              <h5>
                Chipping in allows us to promote the petition on Change.org and
                through email.
              </h5>
            </div>
            <div className="bg-[#F2F2F2] p-2 rounded-md my-3">
              <h1 className="text-[#F39C12] font-semibold">IMPACT</h1>
              <p className="text-sm">
                People who've already Chipping in helped this petition gather{" "}
                <strong>10 additional signatures.</strong>
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <button className="bg-[#F39C12] px-7 py-2 rounded-md text-white font-medium">
                Yes, I’ll chip in $7 to distribute this petition
              </button>
              <button onClick={()=>window.location.href = '/complete-support-next'}>No, I’ll share instead </button>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <NavLink to={"/complete-support-next"} className="text-blue-700 font-bold">Sorry, I can’t do anything right now</NavLink>
        </div>
      </div>
    </div>
  );
};
