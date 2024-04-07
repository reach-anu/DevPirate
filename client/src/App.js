import Navbar from "./Components/Navbar";
import LandingPage from "./Components/Home/LandingPage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./Pages/Signup";
import OfferingsPage1 from "./Components/Home/OfferingsPage1";
import OfferingsPage2 from "./Components/Home/OffieringsPage2";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;