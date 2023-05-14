import React from "react";
import WEBSITE from "../Constant/constant";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=75" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">{WEBSITE.about.title}</h1>
              <p className="mb-4">{WEBSITE.about.desc}</p>
              {WEBSITE.about.points.map((item,key) => (
                <p>
                  <i className="fa fa-check text-primary me-3" />
                  {item}
                </p>
              ))}
              <Link className="btn btn-primary py-3 px-5 mt-3" to="/booknow">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default About;
