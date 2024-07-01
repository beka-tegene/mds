import React from "react";
import { Navigation } from "../../Components/Navigation";
import { MdAdd } from "react-icons/md";

export const Comment = () => {
  return (
    <div className="flex flex-col w-full">
      <Navigation />
      <div className=" bg-[#F7F7F7] px-20 pb-4 flex flex-col gap-1 max-sm:px-10">
        <h1 className="text-2xl font-semibold max-sm:text-lg">Stop Modern Day Slavery Petition Comment's </h1>
        <div className="h-[71vh] overflow-y-scroll flex flex-col gap-2 pt-5 p-2 ">
          {Array.from({ length: 13 }).map((_, index) => (
            <div className="bg-white p-2 px-5 rounded-md shadow-md">
              <h5 className="font-semibold text-md">John Deo</h5>
              <p className="text-sm max-sm:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque impedit ipsum magni porro, veritatis earum quam modi!
                Laudantium in doloremque incidunt, sit ea aliquam expedita
                cumque omnis, excepturi ut placeat.
              </p>
            </div>
          ))}
        </div>
        <form className="flex border border-black p-2 rounded-md">
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-transparent outline-none"
            placeholder="write something ..."
          />
          <button><MdAdd size={25} /></button>
        </form>
      </div>
    </div>
  );
};
