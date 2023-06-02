import React from "react";
import WEBSITE from "../Constant/constant";

import { Link } from "react-router-dom";

function Action() {
  return (
    <>
      {/* Call to Action Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded p-3">
            <div
              className="bg-white rounded p-4"
              style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
            >
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <img
                    className="img-fluid rounded w-100"
                    src={WEBSITE.action.img}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="mb-4">
                    <h1 className="mb-3">{WEBSITE.action.title}</h1>
                    <p>
                      {WEBSITE.action.desc}
                    </p>
                  </div>
                  <Link to="/contact" className="btn btn-primary py-3 px-4 me-2">
                    <i className="fa fa-phone-alt me-2" />
                   Contact Us
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action End */}
    </>
  );
}

export default Action;
