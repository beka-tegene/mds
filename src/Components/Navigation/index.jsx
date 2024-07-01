import { useState } from "react";
import { IoMdHand } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../Utils/constants";

export const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailName, setEmailName] = useState("");

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(!isModalOpen);
    }
  };
  const handleBackgroundClick1 = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen1(!isModalOpen1);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}api/petition/create-user-petition`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailName,
          fullName: `${firstName} ${lastName}`,
        }),
      });
      if (res.status === 201) {
        window.location.href = "/complete-support";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="grid grid-cols-7 py-4 px-7 bg-[#29C87B] text-white items-center max-sm:flex max-sm:justify-between">
      <div className=" col-span-2 ">
        <h1 className="text-3xl font-bold ">Stop MDS</h1>
      </div>
      <div className="hidden max-sm:block cursor-pointer">
        <MdMenu size={30} onClick={() => setIsModalOpen1(true)} />
      </div>
      <ul className=" col-span-3 flex gap-7 max-sm:hidden">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a onClick={() => setIsModalOpen(true)} className=" cursor-pointer">
            Start a Petition
          </a>
        </li>
        <li>
          <NavLink to={"/companies"}>All Company</NavLink>
        </li>
      </ul>
      <div className=" col-span-2 flex items-center justify-center max-sm:hidden ">
        <div className="border  flex rounded-md relative">
          <button className=" hover:bg-white hover:text-black p-2 font-medium pr-8 border-inherit">
            Sign in
          </button>
          <span className="bg-white rounded-full text-black flex items-center justify-center py-2 px-3 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            or
          </span>
          <button className="p-2 pl-8 hover:bg-white hover:text-black font-medium border-inherit">
            Sign up
          </button>
        </div>
      </div>
      {isModalOpen1 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 top-0 right-0"
          onClick={handleBackgroundClick1}
        >
          <div className="bg-white p-6 relative top-0 right-0 text-black w-2/4 h-screen">
            <div className=" col-span-2 pb-5">
              <h1 className="text-3xl font-bold ">Stop MDS</h1>
            </div>
            <ul className="flex flex-col gap-2 pb-4">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink onClick={() => setIsModalOpen(true)}>
                  Start a Petition
                </NavLink>
              </li>
              <li>
                <NavLink to={"/companies"}>All Company</NavLink>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-[#F39C12] px-6 py-2 shadow-md font-medium rounded-full text-lg text-white">
                Sign in
              </button>
              <button className="border-[#F39C12] border text-[#F39C12] px-6 py-2 shadow-md font-medium rounded-full text-lg">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded p-6 w-full max-w-md relative text-black">
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
              onSubmit={submitHandler}
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
              By signing, you accept Stop MDS{" "}
              <span className="text-blue-700 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-700 hover:underline cursor-pointer">
                Privacy Policy
              </span>
              , and agree to receive occasional emails about campaigns on
              Change.org. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};
