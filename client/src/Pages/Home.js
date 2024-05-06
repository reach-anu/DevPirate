import React from "react";
import LandingPage from "../Components/Home/LandingPage";
import OfferingsPage1 from "../Components/Home/OfferingsPage1";
import OfferingsPage2 from "../Components/Home/OffieringsPage2";

function Home() {
  return (
    <>
      <section className="snap-start">
        <LandingPage />
      </section>
      <section className="snap-center">
        <OfferingsPage1 />
      </section>
      <section className="snap-center">
        <OfferingsPage2 />
      </section>
    </>
  );
}

export default Home;
