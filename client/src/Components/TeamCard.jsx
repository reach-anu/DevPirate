import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/teamCard.css";
import { CiMedicalCross } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const TeamCard = ({ team }) => {
  const [wishlist, setWishlist] = useState(false);
  const naviagte = useNavigate();
  const teamName = team.slug;
  const [isRequested, setIsRequested] = useState(false);

  //set values if user state is stored (using redux)
  const username = "anjali-8001";

  const handleClick = () => {
    naviagte(`/team-profile/${teamName}`);
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
  return (
    <div className='bg-[#202736a1] border-2 border-gray-700 relative flex flex-col teamCardContainer justify-between' onClick={handleClick}>
      <div>
        <h3 className="w-fit font-bold text-3xl">{team.name}</h3>
        <h3 className="text-nowrap w-4/5 text-sm text-ellipsis overflow-hidden">
          Lock up your chests before we loot them all.
        </h3>
      </div>

      <div className="">
        <h2 className="text-sm text-neutral-content tracking-widest">TECH</h2>
        {team.technologies?.map((technology, index) => {
          return (
            <div key={index} className="badge badge-lg badge-outline mr-2">
              {technology}
            </div>
          );
        })}
      </div>

      <div className="">
        <h2 className="text-sm text-neutral-content tracking-widest">THEME</h2>
        {team.domains?.map((domain, index) => {
          return (
            <div key={index} className="badge badge-lg badge-outline mr-2">
              {domain}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between">
        <div
          className="btn w-32 btn-accent"
          onClick={(e) => {
            e.stopPropagation();
            handleJoinClick();
          }}
        >
          <CiMedicalCross />
          {isRequested ? "Requested" : "Join"}
        </div>
      </div>

      <motion.button
        title="Add to favourites"
        className="absolute right-5 text-2xl top-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <FaHeart
          onClick={(e) => {
            e.stopPropagation();
            setWishlist(!wishlist);
          }}
          style={{ color: wishlist ? "pink" : "grey" }}
        />
      </motion.button>
    </div>
  );
};

export default TeamCard;
