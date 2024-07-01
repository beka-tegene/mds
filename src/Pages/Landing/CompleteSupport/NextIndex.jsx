import React from "react";
import brand from "../../../assets/image.jpg";
import { MdOutlineContentCopy } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const NextIndex = () => {
  const handleCopyLink = () => {
    const url = window.location.href; // The current page URL
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  const shareToWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
  };

  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const shareToTwitter = () => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank");
  };

  const shareToEmail = () => {
    const url = window.location.href;
    window.open(`mailto:?subject=Check this out&body=${encodeURIComponent(url)}`);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="w-[600px] py-5">
        <div className="mb-4">
          <h4 className="text-center text-lg font-bold">Complete Your Support</h4>
        </div>
        <div className="bg-white shadow-md rounded-md flex flex-col gap-3">
          <div className="w-full max-h-[45vh] overflow-hidden">
            <img src={brand} alt="brand" className="w-full rounded-md" />
          </div>
          <div className="px-7 pb-7">
            <div className="flex flex-col gap-3 my-3">
              <h1 className="text-2xl font-semibold">Help this petition grow</h1>
              <p>More than half of petition signatures come from shares</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCopyLink}
                className="border border-[#F39C12] px-7 py-2 rounded-md text-[#F39C12] font-medium col-span-2 flex items-center gap-2 justify-center"
              >
                <MdOutlineContentCopy /> Copy Link
              </button>
              <button
                onClick={shareToWhatsApp}
                className="border border-[#F39C12] px-7 py-2 rounded-md text-[#F39C12] font-medium"
              >
                WhatsApp
              </button>
              <button
                onClick={shareToFacebook}
                className="border border-[#F39C12] px-7 py-2 rounded-md text-[#F39C12] font-medium"
              >
                Facebook
              </button>
              <button
                onClick={shareToTwitter}
                className="border border-[#F39C12] px-7 py-2 rounded-md text-[#F39C12] font-medium"
              >
                Twitter
              </button>
              <button
                onClick={shareToEmail}
                className="border border-[#F39C12] px-7 py-2 rounded-md text-[#F39C12] font-medium"
              >
                Email
              </button>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <NavLink to={"/"} className="text-blue-700 font-bold">Skip for now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NextIndex;
