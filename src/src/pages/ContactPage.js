import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Search from "../components/Search";
import Category from "../components/Category";
import About from "../components/About";
import Property from "../components/Property";
import Action from "../components/Action";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function ContactPage(){
    return(
        <div className="container-xxl bg-white p-0">
            {/* <Loader /> */}
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage;