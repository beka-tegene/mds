import React, { useState } from "react";
import bg from "../../../assets/img.png";
import { IoMdHand } from "react-icons/io";
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailName, setEmailName] = useState("");
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(!isModalOpen);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, emailName);
  };
  return (
    <div className="bg-[#29C87B] h-[80vh] grid grid-cols-3 ">
      <div className=" col-span-2   text-white flex flex-col justify-center items-start px-32 max-sm:px-7">
        <div className="flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold max-sm:text-2xl">Speak Up to Change</h1>
            <p className="max-sm:text-xs">When “Ordinary People” Speak Up, They Can Change the World</p>
          </div>
          <button
            className="bg-[#F39C12] px-6 py-2 shadow-md font-medium rounded-full text-lg max-sm:text-xs" 
            onClick={() => setIsModalOpen(true)}
          >
            Start a Petition
          </button>
        </div>
      </div>
      <div className=" col-span-1 flex flex-col">
        <div className="flex-grow"></div>
        <img src={bg} alt="bg" loading="lazy" className="w-full" />
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded p-6 w-full max-w-md relative">
            <div>
              <input type="range" name="" id="" className="w-full" />
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <span className="text-xl font-semibold">120</span>{" "}
                  <span className="text-sm">Signatures</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xl font-semibold">1000</span>{" "}
                  <span className="text-sm">Next Goal</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center border rounded-full p-1">
              <IoMdHand />
              <span>
                <strong>100 people</strong> signed this week
              </span>
            </div>
            <form
              onClick={submitHandler}
              className="flex flex-col w-full gap-2"
            >
              <h1 className="text-xl font-semibold text-center">
                Sign this petition
              </h1>
              <div className="flex flex-col gap-1">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border px-3 py-1 rounded-md outline-none"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border px-3 py-1 rounded-md outline-none"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border px-3 py-1 rounded-md outline-none"
                  onChange={(e) => setEmailName(e.target.value)}
                />
              </div>
              <div className="flex gap-2 text-sm">
                <input type="checkbox" name="" id="" checked />
                <label htmlFor="">
                  Display my name and comment on this petition
                </label>
              </div>
              <div className="w-full">
                <button
                  className="bg-[#F39C12] w-full py-2 rounded-full"
                  type="submit"
                >
                  Sign this petition
                </button>
              </div>
            </form>
            <p className="text-xs mt-2">
              By signing, you accept Change.org’s{" "}
              <a href="" className="text-blue-700">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="" className="text-blue-700">
                Privacy Policy
              </a>
              , and agree to receive occasional emails about campaigns on
              Change.org. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
