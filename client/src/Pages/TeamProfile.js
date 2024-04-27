import React, { useState } from "react";
import grpImg from "../Assets/Images/group.png";
import userImg from "../Assets/Images/user.png";
import User from "../Components/TeamProfile/User";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import location from "../Assets/Images/location.svg";
import "../Styles/TeamProfile.css";

function TeamProfile() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [visibleItems, setVisibleItems] = useState(4);
  const [showMore, setShowMore] = useState(false);

  const technologies = [
    "ReactJs",
    "NodeJs",
    "MongoDb",
    "ExpressJs",
    "AWS",
    "ReactJs",
    "NodeJs",
    "MongoDb",
    "ExpressJs",
    "AWS",
  ];

  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
  ];

  const hackathons = [
    {
      name: "Hackathon 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
    {
      name: "Hackathon 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
    {
      name: "Hackathon 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
    {
      name: "Hackathon 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo esse repellat accusantium",
    },
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setVisibleItems(technologies.length);
    } else {
      setVisibleItems(4);
    }
  };
  return (
    <div className="bg-gray-900 pt-28 pb-7 min-h-screen text-white px-7 flex flex-col gap-7">
      <div className="flex gap-3 items-center text-transparent bg-clip-text bg-[#907AD6] ml-12">
        <div className="w-12 h-auto bg-white rounded-[100%] self-center">
          <img src={grpImg} alt="Img" />
        </div>
        <div>
          <span className="tracking-wide font-extrabold text-3xl">
            Raging Bytes{" "}
          </span>
          <span className="text-lg text-gray-400">(3 Pirates)</span>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div className="w-3/4 px-2 flex flex-col gap-12">
          <div className="flex flex-col gap-3 mx-10">
            <h1 className="text-lg text-[#978DBA] font-bold tracking-wide mx-3">
              Hackathons Participated:{" "}
            </h1>
            <div className="">
              <Slider {...settings}>
                {hackathons &&
                  hackathons.map((hackathon, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full p-6 flex flex-col justify-center items-center border rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700"
                      >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {hackathon.name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {hackathon.description}
                        </p>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-10">
            <h1 className="text-lg text-[#978DBA] font-bold tracking-wide mx-3">
              Projects:{" "}
            </h1>
            <div className="">
              <Slider {...settings} className="flex justify-start">
                {hackathons &&
                  projects.map((project, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full p-6 flex flex-col justify-center items-center border rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700"
                      >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {project.name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-10">
            <h1 className="text-lg text-[#978DBA] font-bold tracking-wide mx-3 ">
              Members (3):{" "}
            </h1>
            <div className="flex flex-col gap-5 mx-3 items-center">
              <form class="my-3 w-full">
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search a member"
                    required
                  />
                </div>
              </form>

              <div className="flex flex-col gap-5 w-full h-56 overflow-y-auto py-1 pb-10">
                <User
                  userimg={userImg}
                  userrole="Captain"
                  username="Anushaka"
                />
                <User
                  userimg={userImg}
                  userrole="Crew Member"
                  username="Devansh Sahni"
                />
                <User
                  userimg={userImg}
                  userrole="Crew Member"
                  username="Anjali Sharma"
                />
                <User
                  userimg={userImg}
                  userrole="Captain"
                  username="Anushaka"
                />
                <User
                  userimg={userImg}
                  userrole="Crew Member"
                  username="Devansh Sahni"
                />
                <User
                  userimg={userImg}
                  userrole="Crew Member"
                  username="Anjali Sharma"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-12">
          <p className="text-gray-300 font-bold tracking-wide border border-gray-500 rounded p-2">
            Coders passionate about crafting elegant solutions
          </p>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-auto">
              <img src={location} alt="" />
            </div>
            <p className="">Delhi, India</p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-lg text-[#978DBA] font-bold tracking-wide">
              Domain:{" "}
            </h1>
            <p className="flex flex-wrap gap-4 pt-1 rounded font-medium">
              <motion.mark
                whileHover={{ scale: 1.05 }}
                class="px-[18px] py-[6px] tracking-wider text-gray-900 bg-[#907AD6] rounded-3xl hover:cursor-pointer"
              >
                Education
              </motion.mark>

              <motion.mark
                whileHover={{ scale: 1.05 }}
                class="px-[18px] py-[6px] tracking-wider text-gray-900 bg-[#907AD6] rounded-3xl hover:cursor-pointer"
              >
                Web Development
              </motion.mark>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg text-[#978DBA] font-bold tracking-wide">
              Technology:{" "}
            </h1>
            <p className="flex flex-wrap gap-4 rounded pt-1 font-medium">
              {technologies &&
                technologies.slice(0, visibleItems).map((technology, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-[18px] py-[6px] tracking-wider bold text-gray-900  bg-[#907AD6]  rounded-3xl hover:cursor-pointer"
                    >
                      {technology}
                    </motion.div>
                  );
                })}
              {technologies?.length > 4 && (
                <button
                  onClick={toggleShowMore}
                  className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none"
                >
                  {showMore ? "- less" : "+ more"}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;
