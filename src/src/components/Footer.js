import React from "react";
import WEBSITE from "../Constant/constant";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                {WEBSITE.address}
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                {WEBSITE.phone}
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                {WEBSITE.email}
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" target="_blank" href={WEBSITE.twitter}>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" target="_blank" href={WEBSITE.facebook}>
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h5 className="text-white mb-4">Photo Gallery</h5>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                  style={{height:"200px",objectFit:"cover"}}
                    className="img-fluid rounded bg-light p-1"
                    src="https://imgd-ct.aeplcdn.com/1056x660/n/6gouesa_1463328.jpg?q=75"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                  style={{height:"200px",objectFit:"cover"}}
                    className="img-fluid rounded bg-light p-1"
                    src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=75"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                  style={{height:"200px",objectFit:"cover"}}
                    className="img-fluid rounded bg-light p-1"
                    src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/mahindra-xuv700.png?rev=975a1e4402e048a3b9d1ccef504ff1b4"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                  style={{height:"200px",objectFit:"cover"}}
                    className="img-fluid rounded bg-light p-1"
                    src="https://images.carandbike.com/bike-images/colors/bajaj/ct-100/bajaj-ct-100-gloss-ebony-black-with-blue-decals.png?v=1587971749"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                  style={{height:"200px",objectFit:"cover"}}
                    className="img-fluid rounded bg-light p-1"
                    src="https://m.media-amazon.com/images/I/81R6AaKoL8L._SL1500_.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img

                  style={{height:"200px",objectFit:"cover"}}
                    className="img-fluid rounded bg-light p-1"
                    src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=75"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;
