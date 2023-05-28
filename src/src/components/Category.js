import React from "react";
import WEBSITE from "../Constant/constant";
import { useState } from "react";
import { useEffect } from "react";

import db from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";


function CategoryCard(props) {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <a className="cat-item d-block bg-light text-center rounded p-3" href="">
        <div className="rounded p-4">
          <div className="icon mb-3">
            <img className="img-fluid" src={props.img} style={{ height: "150px", objectFit: "cover" }} alt="Icon" />
          </div>
          <h6 style={{
            textTransform:"capitalize"
          }}>{props.name}</h6>
          <span>{props.available} Vehicles</span>
        </div>
      </a>
    </div>
  );
}

function Category() {

  const [vehicleTypes, setVehiclesTypes] = useState(null);

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


    setTimeout(()=>{
      setVehiclesTypes(tmpData);
    },1000)
  };


  useEffect(() => {
    fetchCategories();

  }, [])


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
              vehicleTypes ?
                (
                  vehicleTypes?.map((item, key) => (
                    <CategoryCard name={item?.data?.name} img={item?.data?.img} key={key} available={item?.data?.available} />
                  ))
                ) :
                (
                  <center>
                    <img src="https://cdn.dribbble.com/users/1726478/screenshots/3739184/car-dealer-gif.gif" />
                  </center>

                )

            }
          </div>
        </div>
      </div>
      {/* Category End */}
    </>
  );
}

export default Category;
