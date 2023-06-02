import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import WEBSITE from "../Constant/constant";

import db from "../firebase";
import { collection, query, addDoc,doc,updateDoc, where, getDocs } from "firebase/firestore";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const findDays = (from,to) => {
  const date1 = new Date(from);
const date2 = new Date(to);

// Calculate the time difference in milliseconds
const timeDiff = Math.abs(date2.getTime() - date1.getTime());

// Convert the time difference to days
const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

return daysDiff;

}

function BookNow() {
  const userId = useRef(null);

  const navigate = useNavigate();

  const [vehiclesTypes, setVehiclesTypes] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [phone,setPhone] = useState(null);
  const [aadhar,setAadhar] = useState(null);
  const [license,setLicense] = useState(null);
  const [address,setAddress] = useState(null);
  const [vehicle,setVehicle] = useState(null);
  const [fromDate,setFromDate] = useState(null);
  const [toDate,setToDate] = useState(null);

  const isUserLogin = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        userId.current = user.uid;
       

        console.log(userId.current)
      }else{
        navigate("/login");
      }
    });
  };


  const handleSubmit = async () => {
    console.clear()
    setIsSending(true);

    try {

    const q = query(collection(db, "tbl_vehicles_types"),where("name","==",vehicle));

    const querySnapshot = await getDocs(q);
    const vehicleTypeDoc = doc(db, "tbl_vehicles_types",querySnapshot.docs[0].id);

    await updateDoc(vehicleTypeDoc, {
        available: querySnapshot.docs[0].data().available - 1
      });
    } catch (err) {
      console.log(err)
    }

    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "tbl_bookings"),{
        name:name,
        email:email,
        phone:phone,
        aadhar:aadhar,
        license:license,
        address:address,
        vehicle:vehicle,
        fromDate:fromDate,
        toDate:toDate,
        status:"pending",
        userId:userId.current
      });

      alert("Request Submitted..! We will contact you by mail shortly...!")
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.log("Error:", err);
    }


   window.location.replace("./bookings");

    setIsSending(false);
  };

  const fetchCategories = async () => {
    let tmpData = [];

    const q = query(collection(db, "tbl_vehicles_types"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      tmpData.push({
        id: doc.id,
        data: doc.data()
      })
    });

    setVehiclesTypes(tmpData);
  };

  useEffect(() => {
    isUserLogin()
    fetchCategories();
  }, [])

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
            <p className="text-white">Name</p>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">Email</p>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Email"
                id="email"
                name="email"
               value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">Phone</p>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Mobile Number"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">Aadhar</p>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Aadhar Number"
                id="aadhar"
                name="aadhar"
                value={aadhar}
                onChange={(e)=>setAadhar(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">Driving License</p>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Driving License Number"
                id="license"
                name="license"
                value={license}
                onChange={(e)=>setLicense(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">Address</p>
              <input
                type="text"
                className="form-control border-0 py-3"
                placeholder="Address"
                id="address"
                name="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">From</p>
              <input
                type="date"
                className="form-control border-0 py-3"
                placeholder="Address"
                id="address"
                name="address"
             
                onChange={(e)=>setFromDate(e.target.value)}
              />
            </div>
            <div className="col">
            <p className="text-white">To</p>
              <input
                type="date"
                className="form-control border-0 py-3"
                placeholder="Address"
                id="address"
                name="address"
           
                onChange={(e)=>setToDate(e.target.value)}
              />
            </div>
          </div>
     
          <div className="row g-2 mt-1">
            <div className="col">
            <p className="text-white">Vehicle Type</p>
              <select
               onChange={(e)=>setVehicle(e.target.value)}
                className="form-select border-0 py-3"
              >
                <option selected>
                  Vehicle Type
                </option>
                {vehiclesTypes?.map((item, key) => (
                  <option key={key} value={item.data.name}>
                    {item.data.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {vehicle  && (
            <div className="row g-2 mt-1">
              <div className="col">
                <span
                  className="text-white  fw-bold fs-5 border-0 w-100 py-1"
                  style={{ textAlign: "left",display:"flex",justifyContent:"space-between",alignItems:"center" }}
                >
                  <span>Available</span>
                  <span>{vehiclesTypes?.filter((item) => item.data.name == vehicle)
                    .map((item, key) => item.data.available)} Units</span>
                </span>
                <span
                  className="text-white fw-bold fs-5 border-0 w-100 py-1"
                  style={{ textAlign: "left",display:"flex",justifyContent:"space-between",alignItems:"center" }}
                >
                 <span> Price</span>
                 <span>{vehiclesTypes?.filter((item) => item.data.name == vehicle)
                    .map((item, key) => item.data.price)} ₹ / Day</span>
                </span>

                

                <span
                  className="text-white fw-bold fs-5 border-0 w-100 py-1"
                  style={{ textAlign: "left",display:"flex",justifyContent:"space-between",alignItems:"center" }}
                >
                 <span>Days</span>
                 <span>{findDays(fromDate,toDate)}</span>
                </span>

                <span
                  className="text-white fw-bold fs-5 border-0 w-100 py-1"
                  style={{ textAlign: "left",display:"flex",justifyContent:"space-between",alignItems:"center" }}
                >
                 <span>Total</span>
                 <span>{vehiclesTypes?.filter((item) => item.data.name == vehicle)
                    .map((item, key) => (item.data.price*findDays(fromDate,toDate)))} ₹</span>
                </span>
                
                
              </div>
            </div>
          )}
          <div className="row g-2 mt-1">
            <div className="col">
              {vehiclesTypes?.filter((item) => item.data.name == vehicle)
                .map((item, key) =>
                  item.data.available == 0 ? (
                    <button
                      key={key}
                      style={{
                        opacity: 0.3,
                      }}
                      className="btn btn-dark border-0 w-100 py-3"
                    >
                      Not Available
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
                      {isSending ? "Sending Request..." : "Submits Request"}
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
