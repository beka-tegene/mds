import React from "react";

export const Sidebar = () => {
  return (
    <div className="bg-[#000525] h-screen text-white sticky top-0">
      <div>
        <h1 className="text-3xl font-semibold text-center p-4">STOP MDS</h1>
      </div>
      <nav className="pt-4">
        <ul>
          <li className="border-l-[3px] p-2 bg-[#ffffff60] text-[#000525] font-semibold">
            <a href="">Send Challenge </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
