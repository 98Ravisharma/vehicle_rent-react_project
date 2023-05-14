import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import WEBSITE from "../Constant/constant";

function BookNow() {
  const [vehicleType, setVehicleType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    license: "",
    address: "",
    vehicle: "",
    date:"",
    time:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["vehicle"]: vehicleType,
    }));
    // TODO: Perform API call here to send data
    // You can use libraries like axios or fetch to make the API request

   
    let currentdate = new Date();

    setFormData((prevFormData) => ({
      ...prevFormData,
      ["date"]: currentdate.getDate(),
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["time"]: currentdate.getHours() + ":" + currentdate.getMinutes()+":"+currentdate.getSeconds(),
    }));

    console.log(formData); // For testing, log the form data to the console


    fetch("https://api.apispreadsheets.com/data/GwTMp8O9gOguT9zQ/", {
      method: "POST",
      body: JSON.stringify({
        data: formData,
      }),
    }).then((res) => {
      if (res.status === 201) {
        alert("Your Request has been submitted !, we will contact you in short time via mail or phone !");

        setFormData({
          name: "",
          email: "",
          phone: "",
          aadhar: "",
          license: "",
          address: "",
          vehicle: "",
          date:"",
          time:""
        })
      } else {
        alert("Unable to submit request !");
      }
    });
  };

  return (
    <div className="container-xxl bg-white p-0">
      {/* <Loader /> */}
      <Navbar />

      <div
        className="container-fluid  mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: 35 }}
      >
        <div className="container bg-primary p-3" style={{ width: "420px" }}>
          <div className="row g-2 mt-2">
            <div className="col">
              <h2>Book Now</h2>
            </div>
          </div>
          <div className="row g-2 mt-2">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Mobile Number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Aadhar Number"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Driving License Number"
                id="license"
                name="license"
                value={formData.license}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Address"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
              <select
                onChange={(e) => {
                  setVehicleType(e.target.value);
                  console.log(e.target.value);
                }}
                className="form-select border-0 py-3"
              >
                <option selected="" value="">
                  Vehicle Type
                </option>
                {WEBSITE.property_types.map((item, key) => (
                  <option key={key} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {vehicleType != "" && (
            <div className="row g-2 mt-1">
              <div className="col">
                <button
                  className="btn text-white border-0 w-100 py-3"
                  style={{ textAlign: "left" }}
                >
                  Available :{" "}
                  {WEBSITE.property_types
                    .filter((item) => item.name == vehicleType)
                    .map((item, key) => item.available)}
                </button>
              </div>
            </div>
          )}
          <div className="row g-2 mt-1">
            <div className="col">
              {WEBSITE.property_types
                .filter((item) => item.name == vehicleType)
                .map((item, key) =>
                  item.available == 0 ? (
                    <button
                      key={key}
                      style={{
                        opacity: 0.3,
                      }}
                      className="btn btn-dark border-0 w-100 py-3"
                    >
                      Submit Request
                    </button>
                  ) : (
                    <button
                      type="submit"
                      key={key}
                      onClick={() => {
                        handleSubmit();
                      }}
                      className="btn btn-dark border-0 w-100 py-3"
                    >
                      Submit Request
                    </button>
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookNow;
