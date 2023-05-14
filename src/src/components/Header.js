import React from "react";
import WEBSITE from "../Constant/constant";
import { Link } from "react-router-dom";

function Header(props){
    return(
        <>
  {/* Header Start */}
  <div style={{
    marginTop:(props?.giveMargin) ? "10px" : 0,
    marginBottom:"10px"
  }} className="container-fluid header bg-white p-0">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div className="col-md-12 p-5 mt-lg-5">
        <h1 className="display-5 animated fadeIn mb-4">
          {WEBSITE.tagline.mainL} <span className="text-primary">{WEBSITE.tagline.highlight}</span> {WEBSITE.tagline.mainR}
        </h1>
        <p className="animated fadeIn mb-4 pb-2">
          {WEBSITE.tagline.desc}
        </p>
        <Link to="/booknow" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
          Book Now
        </Link>
      </div>
      
    </div>
  </div>
  {/* Header End */}
</>

    )
}

Header.defaultProps = {
giveMargin:true
}

export default Header;