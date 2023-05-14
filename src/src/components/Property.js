import React, { useState } from "react";
import WEBSITE from "../Constant/constant";

function PropertyCard(props){
  return(
    <div
    className="col-lg-4 col-md-6 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="property-item rounded overflow-hidden">
      <div className="position-relative overflow-hidden">
        <a href="">
          <img
            className="img-fluid"
            src={props.img}
            alt=""

            style={{
              height:"300px",
              objectFit:"cover"
            }}
          />
        </a>
        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
          {props.category}
        </div>
        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
          {props.property_type}
        </div>
      </div>
      <div className="p-4 pb-0">
        <h5 className="text-primary mb-3">{props.price}</h5>
        <a className="d-block h5 mb-2" href="">
          {props.title}
        </a>
        <p>
          <i className="fa fa-map-marker-alt text-primary me-2" />
          {props.address}
        </p>
      </div>
      <div className="d-flex border-top">
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-chair text-primary me-2" />
          {props.area}
        </small>
        <small className="flex-fill text-center border-end py-2">
          <i className="fa fa-water text-primary me-2" />
          {props.bed}
        </small>
        <small className="flex-fill text-center py-2">
          <i className="fa fa-road text-primary me-2" />
          {props.bath}
        </small>
      </div>
    </div>
  </div>
  )
}

function Property() {
  const [category, setCategory] = useState("Featured");

  return (
    <>
      {/* Property List Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Vehicle Listing</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                  rebum.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                {WEBSITE.property_listing.category.map((item, key) =>
                  category == item ? (
                    <li className="nav-item me-2 m-1">
                      <a
                        className="btn btn-outline-primary active"
                        data-bs-toggle="pill"
                        href="#tab-2"

                        onClick={()=>{
                          setCategory(item)
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ) : (
                    <li className="nav-item me-2 m-1">
                      <a
                        className="btn btn-outline-primary"
                        data-bs-toggle="pill"
                        href="#tab-2"

                        onClick={()=>{
                          setCategory(item)
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                
                {
                  WEBSITE.property_listing.details.filter((item)=>((category == "Featured" ? (item.category != category) : (item.category == category)))).map(
                    (item,key)=>(
                      <PropertyCard img={item.img} key={key} category={item.category} property_type={item.property_type} price={item.price} title={item.title} address={item.address} area={item.area} bed={item.bed} bath={item.bath}/>
                    )
                  )
                }

                <div className="col-12 text-center">
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Vehicles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Property List End */}
    </>
  );
}

export default Property;
