import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./Pages/Signup";
import OfferingsPage1 from "./Pages/OfferingsPage1";
import OfferingsPage2 from "./Pages/OffieringsPage2";

function App() {
  return (
    // <>
    //   <section>
    //     <Navbar />
    //     <Home />
    //   </section>
    //   <section>
    //     <OfferingsPage1 />
    //   </section>
    //   <section>
    //     <OfferingsPage2 />
    //     <Footer />
    //   </section>
    // </>
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