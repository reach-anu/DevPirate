import React from "react";
import "../Styles/LandingPage.css";
import ship from "../Assets/Images/ship.png";
import Waves from "../Components/Waves";
import { easeInOut, motion } from "framer-motion";
import { GiPirateFlag } from "react-icons/gi";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-end homeContainer">
      <motion.div
        className="ml-56 w-2/5 z-50"
        style={{ color: "#fff" }}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        <h1 className="text-5xl font-bold pb-2 flex">
          <GiPirateFlag /> DevPirate
        </h1>
        <h4 className="text-2xl pb-6">
          Do you have what it takes to be a Dev Pirate?
        </h4>
        <motion.button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center me-6 mb-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Login
        </motion.button>
        <motion.button
          type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Signup
        </motion.button>
      </motion.div>
      <motion.img
        animate={{ x: 0, rotate: "20deg" }}
        initial={{ x: 75, scale: "1.2", rotate: "16deg" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          easings: easeInOut,
        }}
        src={ship}
        className="absolute z-50 right-52 bottom-16"
        alt=""
      />
      <Waves />
    </div>
  );
};

export default LandingPage;
