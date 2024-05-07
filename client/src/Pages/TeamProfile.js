import React, { useEffect, useState } from "react";
import grpImg from "../Assets/Images/group.png";
import userImg from "../Assets/Images/user.png";
import User from "../Components/TeamProfile/User";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import location from "../Assets/Images/location.svg";
import "../Styles/TeamProfile.css";
import { FaHeart } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

function TeamProfile() {
  const { teamName } = useParams();
  const [wishlist, setWishlist] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const [showMore, setShowMore] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [team, setTeam] = useState({});
  const username = "anjali-8001";

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

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setVisibleItems(team?.technologies.length);
    } else {
      setVisibleItems(4);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  const handleCopy = async () => {
    try {
      if (navigator.share) {
        console.log(window.location.href);
        await navigator.clipboard.writeText(window.location.href);
        toast("URL copied to clipboard", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const getTeamDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/team/get/${teamName}`
      );
      if (res.data?.success) {
        setTeam(res?.data?.team);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkJoinTeam = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/user/check-join-request/${username}`,
        {
          teamName,
        }
      );
      if (res.data?.success && res.data?.requestSent) {
        setIsRequested(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoinClick = async () => {
    // if user is not logged in navigate to /login

    if (!isRequested) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/user/send-join-request/${username}`,
          {
            teamName,
            isRequested: true,
          }
        );
        if (res.data?.success) {
          setIsRequested(true);
          toast.success("Request sent successfully");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/user/send-join-request/${username}`,
          {
            teamName,
            isRequested: false,
          }
        );
        if (res.data?.success) {
          setIsRequested(false);
          toast.success("Request withdrawn successfully");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getTeamDetails();
    checkJoinTeam();
  }, []);

  return (
    <div className="bg-gray-900 py-7 min-h-screen text-white px-7 flex flex-col gap-7">
      <div className="flex gap-3 items-center text-transparent bg-clip-text bg-[#907AD6] ml-12">
        <div className="w-12 h-auto bg-white rounded-[100%] self-center">
          <img
            src={team.profilePicture ? team.profilePicture : grpImg}
            alt="Img"
          />
        </div>
        <div>
          <span className="tracking-wide font-extrabold text-3xl">
            {team.name}{" "}
          </span>
          <span className="text-lg text-gray-400">
            ({team.members?.length} Pirates)
          </span>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div className="w-3/4 px-2 flex flex-col gap-12">
          {team.hackathons?.length > 0 && (
            <div className="flex flex-col gap-3 mx-10">
              <h1 className="text-lg text-[#978DBA] font-bold tracking-wide mx-3">
                Hackathons Participated:{" "}
              </h1>
              <div className="">
                <Slider {...settings}>
                  {team.hackathons.map((hackathon, index) => {
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
          )}
          {team.projects?.length > 0 && (
            <div className="flex flex-col gap-3 mx-10">
              <h1 className="text-lg text-[#978DBA] font-bold tracking-wide mx-3">
                Projects:{" "}
              </h1>
              <div className="">
                <Slider {...settings} className="flex justify-start">
                  {team.projects.map((project, index) => {
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
          )}
          <div className="flex flex-col gap-2 mx-10">
            <h1 className="text-lg text-[#978DBA] font-bold tracking-wide mx-3 ">
              Pirates ({team.members?.length}):{" "}
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
                {team.members?.map((user, index) => {
                  return (
                    <User
                      key={index}
                      userimg={user.userimg ? user.userImg : userImg}
                      userrole={user.userrole}
                      username={user.username}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-12">
          <div className="flex items-center gap-5">
            <motion.button
              className="min-w-36 py-2 text-md text-gray-900 tracking-widest bg-[#1B998B] font-extrabold border border-transparent rounded-3xl hover:bg-[#117A74] focus:outline-none focus:border-[#0E665E] focus:ring focus:ring-[#0E665E] focus:ring-opacity-10"
              onClick={handleJoinClick}
              whileHover={{ scale: 1.05 }}
            >
              {isRequested ? "Requested" : "Join"}
            </motion.button>

            <motion.button className="" whileHover={{ scale: 1.1 }}>
              <FaHeart
                size={25}
                onClick={() => setWishlist(!wishlist)}
                style={{ color: wishlist ? "red" : "grey" }}
              />
            </motion.button>
            <motion.button
              className=""
              whileHover={{ scale: 1.1 }}
              onClick={handleShare}
            >
              <LuShare color="grey" size={25} />
            </motion.button>

            <motion.button
              className=""
              whileHover={{ scale: 1.1 }}
              onClick={handleCopy}
            >
              <MdContentCopy color="grey" size={25} />
            </motion.button>
          </div>
          {team.bio !== "" && (
            <p className="text-gray-300 font-bold tracking-wide border border-gray-500 rounded p-2">
              {team.bio}
            </p>
          )}
          {team.location !== "" && (
            <div className="flex gap-1 items-center">
              <div className="w-5 h-auto">
                <img src={location} alt="" />
              </div>
              <p className="">{team.location}</p>
            </div>
          )}
          {team.domains?.length > 0 && (
            <div className="flex flex-col gap-3 w-full">
              <h1 className="text-lg text-[#978DBA] font-bold tracking-wide">
                Domain:{" "}
              </h1>
              <p className="flex flex-wrap gap-4 pt-1 rounded font-medium">
                {team.domains.map((domain, index) => {
                  return (
                    <motion.mark
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      class="px-[18px] py-[6px] tracking-wider text-gray-900 bg-[#44A5C5] rounded-3xl hover:cursor-pointer"
                    >
                      {domain}
                    </motion.mark>
                  );
                })}
              </p>
            </div>
          )}
          {team.technologies?.length > 0 && (
            <div className="flex flex-col gap-3">
              <h1 className="text-lg text-[#978DBA] font-bold tracking-wide">
                Technology:{" "}
              </h1>
              <p className="flex flex-wrap gap-4 rounded pt-1 font-medium">
                {team.technologies
                  .slice(0, visibleItems)
                  .map((technology, index) => {
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-[18px] py-[6px] tracking-wider bold text-gray-900  bg-[#44A5C5]  rounded-3xl hover:cursor-pointer"
                      >
                        {technology}
                      </motion.div>
                    );
                  })}
                {team.technologies.length > 4 && (
                  <button
                    onClick={toggleShowMore}
                    className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none"
                  >
                    {showMore ? "- less" : "+ more"}
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;
