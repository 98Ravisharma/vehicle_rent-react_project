import React from "react";
import WEBSITE from "../Constant/constant";
import { Link } from "react-router-dom";

function SubItem(props) {
  return (
    <Link
      to={(props.name == "home") ? ("/home") : ("/"+props.name.toString())}
      style={{
        textTransform: "capitalize",
      }}
      className="dropdown-item"
    >
      {props.name}
    </Link>
  );
}

function NavItem(props) {
  return props.subItems ? (
    <div className="nav-item dropdown">
      <Link
        to={(props.name == "home") ? ("/") : ("/"+props.name.toString())}
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        {props.name}
      </Link>
      <div className="dropdown-menu rounded-0 m-0">
        {props.subItems.map((item, key) => (
          <SubItem name={item} key={key} />
        ))}
      </div>
    </div>
  ) : props.selected ? (
    <Link to={(props.name == "home") ? ("/home") : ("/"+props.name.toString())} className="nav-item nav-link active">
      {props?.name}
    </Link>
  ) : (
    <Link to={(props.name == "home") ? ("/home") : ("/"+props.name.toString())} className="nav-item nav-link">
      {props?.name}
    </Link>
  );
}

function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <Link 
            to="/"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="img/icon-deal.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h1 className="m-0 text-primary">{WEBSITE?.web_title}</h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              {WEBSITE?.nav_items?.map((item, key) => (
                <NavItem
                  name={item?.name}
                  key={key}
                  selected={false}
                  subItems={item?.sub_item}
                />
              ))}
            </div>
            <Link to="/login" className="btn btn-primary px-3 d-none d-lg-flex">
              Log Out
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;
