import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import TeamProfile from "./Pages/TeamProfile";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/team-profile" element={<TeamProfile />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
