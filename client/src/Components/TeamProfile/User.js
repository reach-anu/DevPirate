import React, { useState } from "react";
import Dropdown from "./Dropdown";

function User({ userimg, username, userrole }) {
  const [multiDropdownVisible, setMultiDropdownVisible] = useState(false);

  const toggleMultiDropdown = () => {
    setMultiDropdownVisible(!multiDropdownVisible);
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-8 h-auto bg-white rounded-[100%] p-1 self-center">
          <img src={userimg} alt="Img" />
        </div>
        <div className="text-md pr-5 flex items-center justify-between w-full">
          <div>
            {" "}
            {username} <span className="text-gray-400"> ({userrole})</span>
          </div>

          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="multi-dropdown"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={toggleMultiDropdown}
          >
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
      <Dropdown multiDropdownVisible={multiDropdownVisible} />
    </>
  );
}

export default User;
