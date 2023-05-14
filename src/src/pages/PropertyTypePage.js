import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

import Category from "../components/Category";

import Footer from "../components/Footer";

function PropertyTypePage() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* <Loader /> */}
      <Navbar />

      <Category />

      <Footer />
    </div>
  );
}

export default PropertyTypePage;
