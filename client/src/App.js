import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;