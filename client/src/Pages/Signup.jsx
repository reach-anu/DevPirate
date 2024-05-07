import React, { useEffect, useState } from "react";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import treasure from "../Assets/Images/map.jpg";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../Utils/googleLogin";
import googleIcon from "../Assets/Images/googleIcon.svg";
import Footer from "../Components/Footer";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/auth/register`,
        {
          email,
          username,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    const setLogin = async () => {
      if (user) {
        const response = await googleLogin(user.access_token);
        // setProfile({
        //   name: response.name,
        //   email: response.email,
        // });
      }
    };
    setLogin();
  }, [user]);

  return (
    <>
      <div className="homeContainer min-h-screen flex items-center">
        <motion.div
          className="w-1/2 pl-32 px-24 z-10"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
        >
          <h1 className="text-4xl pb-2 text-white">Signup</h1>

          <form
            className="form-control gap-5 mt-10"
            onSubmit={(e) => handleLogin(e)}
          >
            <label className="input input-bordered flex items-center gap-4">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              <FaEnvelope />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-4">
              <FaKey />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <div className="flex justify-between">
              <motion.button
                type="button"
                class="text-white w-2/5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => navigate("/login")}
              >
                Login
              </motion.button>

              <motion.button
                type="submit"
                className="text-white  w-2/5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Signup
              </motion.button>
            </div>

            <div className="flex">
              <hr className="black my-3 w-2/5" />
              &nbsp; or Signup with &nbsp; <hr className="black my-3 w-2/5" />
            </div>

            <div className="flex justify-evenly">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={login}
                src={googleIcon}
                className="m-0 p-0 size-10 hover:cursor-pointer"
              />
            </div>
          </form>
        </motion.div>
        <img
          src={treasure}
          className="min-h-screen absolute right-0 w-4/5 bgPhoto"
        />
      </div>
      <Footer />
    </>
  );
};

export default Signup;
