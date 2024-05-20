import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import TeamProfile from "./Pages/TeamProfile";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        {!useSelector((state) => state.authReducer.value) && <Navbar />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/team-profile/:teamName" element={<TeamProfile />} />
        </Routes>
        <Footer/>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
