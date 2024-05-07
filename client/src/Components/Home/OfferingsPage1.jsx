import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function OfferingsPage1() {
  const ref = useRef();
  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-screen h-screen flex justify-center items-center bg-[#002147] text-white relative my-[1px]"
    >
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full"
      >
        <rect width="100%" height="100%" fill="#002147" />
        <motion.path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible && { pathLength: 1 }}
          transition={{ delay: 0.5, duration: 3 }}
          d="M206,0 C-1,384 598,240 367,600"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isVisible && {
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }
        }
        className="absolute right-[100px] top-[150px] w-[500px]"
      >
        <motion.p className="text-4xl font-bold pb-8 text-[#7FFFD4]">
          Connect, Create, Compete!
        </motion.p>
        <motion.p>
          Get the opportunity to connect with like-minded individuals quickly
          and effortlessly and form teams for hackathons and coding contests.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isVisible && { opacity: 1, transition: { duration: 1, delay: 1.5 } }
        }
        className="absolute left-[100px] bottom-[150px] w-[500px]"
      >
        <p className="text-4xl font-bold pb-8 text-[#7FFFD4]">
          Build Bridges, Expand your network
        </p>
        <p>
          Discover a diverse pool of talents and skills, providing opportunities
          to collaborate with individuals who complement your expertise in
          technology and development.
        </p>
      </motion.div>
    </div>
  );
}

export default OfferingsPage1;
