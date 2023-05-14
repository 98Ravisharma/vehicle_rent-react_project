import React from "react";
import WEBSITE from "../Constant/constant";

function TeamCard(props) {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item rounded overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={props.img} alt="" />
          <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
            <a
              className="btn btn-square mx-1"
              target="_blank"
              href={props.facebook}
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square mx-1"
              target="_blank"
              href={props.twitter}
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square mx-1"
              target="_blank"
              href={props.instagram}
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="text-center p-4 mt-3">
          <h5 className="fw-bold mb-0">{props.name}</h5>
          <small>{props.designation}</small>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <>
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Our Agents</h1>
            <p>{WEBSITE.property_agents.desc}</p>
          </div>
          <div className="row g-4">
            {WEBSITE.property_agents.agents.map((item, key) => (
              <TeamCard
                img={item.img}
                name={item.name}
                designation={item.designation}
                facebook={item.facebook}
                twitter={item.twitter}
                instagram={item.instagram}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}

export default Team;
