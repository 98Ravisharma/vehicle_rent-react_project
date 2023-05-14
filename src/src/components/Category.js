import React from "react";
import WEBSITE from "../Constant/constant";

function CategoryCard(props) {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <a className="cat-item d-block bg-light text-center rounded p-3" href="">
        <div className="rounded p-4">
          <div className="icon mb-3">
            <img className="img-fluid" src={props.img} style={{height:"150px",objectFit:"cover"}} alt="Icon" />
          </div>
          <h6>{props.name}</h6>
          <span>{props.available} Properties</span>
        </div>
      </a>
    </div>
  );
}

function Category() {
  return (
    <>
      {/* Category Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Vehicle Types</h1>
            <p>
              {WEBSITE.property_type_desc}
            </p>
          </div>
          <div className="row g-4">
            {
              WEBSITE.property_types.map((item,key)=>(
                <CategoryCard name={item.name} img={item.img} key={key} available={item.available} />
              ))
            }
          </div>
        </div>
      </div>
      {/* Category End */}
    </>
  );
}

export default Category;
