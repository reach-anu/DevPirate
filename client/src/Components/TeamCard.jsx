import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../Styles/teamCard.css";
import {  CiMedicalCross } from 'react-icons/ci';
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const TeamCard = ({ team }) => {
  const [wishlist, setWishlist] = useState(false);
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte(`/team-profile/${team.id}`)
  }
  return (
    <div className='bg-base-200 border-2 border-gray-700 relative flex flex-col teamCardContainer justify-between' onClick={handleClick}>
      <div>
        <h3 className="w-fit font-bold text-3xl">DevPirate </h3>
        <h3 className="text-nowrap w-4/5 text-sm text-ellipsis overflow-hidden">Lock up your chests before we loot them all.</h3>
      </div>

      <div className=''>
        <h2 className='text-sm text-neutral-content tracking-widest'>TECH</h2>
        <div className='badge badge-lg badge-outline mr-2'>React</div>
        <div className='badge badge-lg badge-outline mr-2'>Node.js</div>
      </div>

      <div className=''>
        <h2 className='text-sm text-neutral-content tracking-widest'>THEME</h2>
        <div className='badge badge-lg badge-outline mr-2'>Welfare</div>
        <div className='badge badge-lg badge-outline mr-2'>Education</div>
      </div>

      <div className="flex justify-between">
        <div className="btn w-32 btn-accent" onClick={(e) => { e.stopPropagation() }}><CiMedicalCross />Join</div>
      </div>

      <motion.button
        title='Add to favourites'
        className="absolute right-5 text-2xl top-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <FaHeart onClick={(e) => {e.stopPropagation(); setWishlist(!wishlist)}} style={{ "color": wishlist ? "pink" : "grey" }} />
      </motion.button>
    </div>
  )
}

export default TeamCard