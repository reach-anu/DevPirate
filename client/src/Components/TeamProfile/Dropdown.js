import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown({ multiDropdownVisible }) {
  const [subDropdown, setSubDropdown] = useState(false);
  const toggleSubDropdown = () => {
    setSubDropdown(!subDropdown);
    console.log(subDropdown);
  };
  return (
    <div
      id="multi-dropdown"
      className={`${
        multiDropdownVisible ? "block" : "hidden"
      } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-full`}
    >
      <ul
        className="py-2 text-sm text-gray-200"
        aria-labelledby="multiLevelDropdownButton"
      >
        <li>
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
          >
            Visit Profile
          </Link>
        </li>
        <li>
          <button
            id="doubleDropdownButton"
            data-dropdown-toggle="doubleDropdown"
            data-dropdown-placement="right-start"
            type="button"
            onClick={toggleSubDropdown}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
          >
            Change Role
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
          <div
            id="doubleDropdown"
            className={`${
              subDropdown ? "block" : "hidden"
            } z-10 divide-y divide-gray-100 rounded-lg shadow bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-200 list-disc pl-8"
              aria-labelledby="doubleDropdownButton"
            >
              <li>
                <button
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                >
                  Captain
                </button>
              </li>
              <li>
                <button
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                >
                  Quater Master
                </button>
              </li>
              <li>
                <button
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                >
                  Crew Member
                </button>
              </li>
              <li>
                <button
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-600 hover:text-white w-full text-left"
                >
                  Gunner
                </button>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button
            href="#"
            className="block px-4 py-2 hover:bg-gray-600 text-red-500 w-full text-left"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
