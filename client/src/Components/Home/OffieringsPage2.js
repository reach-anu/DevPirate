import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function OfferingsPage2() {
  const pathRef = useRef();
  const isInView = useInView(pathRef);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      console.log(isVisible);
    }
  }, [isVisible, isInView]);

  return (
    <div
      ref={pathRef}
      className="w-screen h-screen flex justify-center items-center bg-[#002147] text-white relative"
    >
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full"
      >
        <rect x="0" y="0" width="600" height="600" fill="#002147" />
        <motion.path
          height="100%"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isVisible && { pathLength: 1 }}
          transition={{ delay: 0.5, duration: 3 }}
          d="M366,-1 C0,304 596,427 207,600"
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isVisible && { opacity: 1, transition: { duration: 1, delay: 0.75 } }
        }
        className="absolute right-[100px] top-[150px] w-[500px]"
      >
        <p className="text-4xl font-bold pb-8 text-[#7FFFD4]">
          Grow beyond limits
        </p>
        <p>
          Enhance your personal and professional growth through collaborative
          learning, gaining valuable insights and skills while working towards
          common objectives in team-based projects.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isVisible && { opacity: 1, transition: { duration: 1, delay: 1.5 } }
        }
        className="absolute left-[100px] bottom-[150px] w-[500px]"
      >
        <p className="text-4xl font-bold pb-8 text-[#7FFFD4]">
          Learn Together, Achieve Together
        </p>
        <p>
          Access a supportive network of peers, fostering collaboration and
          motivation to tackle coding challenges collectively and achieve shared
          goals.
        </p>
      </motion.div>
    </div>
  );
}

export default OfferingsPage2;
