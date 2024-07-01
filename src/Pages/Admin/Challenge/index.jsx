import React, { useState } from "react";
import brand1 from "../../../assets/images.png";
import brand2 from "../../../assets/images (1).png";
import brand3 from "../../../assets/1-mobile.jpg";

export const Challenge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState(null);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("FullName", companyName);
    formData.append("email", email);
    formData.append("images", logo);
    formData.append("role", "company");

    try {
      const res = await fetch("http://localhost:5000/api/challenge", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        console.log("Challenge sent successfully");
        // Handle success (e.g., close modal, reset form, show success message)
        setIsModalOpen(false);
        setCompanyName("");
        setEmail("");
        setLogo(null);
      } else {
        console.error("Failed to send challenge");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center p-3 sticky top-0 bg-white mb-2">
        <div>
          <h1 className="text-2xl font-semibold">Challenge</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-grow"></div>
        <button
          className="bg-[#F39C12] px-7 py-2 rounded-md text-white font-medium"
          onClick={() => setIsModalOpen(true)}
        >
          Send Challenge
        </button>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 p-10">
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
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded p-6 w-full max-w-md relative">
            <div>
              <h1 className="text-2xl font-semibold">dolor sit amet consectetur</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                non, a, consequatur maiores pariatur quia ratione asperiores
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  className="border px-3 py-1 rounded-md outline-none"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="border px-3 py-1 rounded-md outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="logo">Logo</label>
                <input
                  type="file"
                  id="logo"
                  className="border px-3 py-1 rounded-md outline-none"
                  onChange={(e) => setLogo(e.target.files[0])}
                  required
                />
              </div>
              <div className="w-full">
                <button className="bg-[#F39C12] w-full py-2 rounded-full" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
