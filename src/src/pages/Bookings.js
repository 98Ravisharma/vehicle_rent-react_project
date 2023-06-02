import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import db from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const auth = getAuth();

function Bookings() {
    const userId = useRef(null);
    const [bookings, setBookings] = useState(null);

    const navigate = useNavigate();

    const isUserLogin = async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                userId.current = user.uid;
                console.log(userId.current)

                fetchBookings();
            } else {
                navigate("/login");
            }
        });
    };

    const fetchBookings = async () => {
        setBookings(null);
        let tmpData = [];
        try {
            const q = query(collection(db, "tbl_bookings"), where("userId", "==", userId.current));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                tmpData.push({
                    id: doc.id,
                    data: doc.data()
                })
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {
            console.log("errr :" + error)
        }

        setBookings(tmpData);
    }

    useState(() => {
        isUserLogin();
    }, [])

    return (
        <div className="container-fluid p-4 bg-white p-0">
            {/* <Loader /> */}
            <Navbar />

            <div className="table-responsive px-2 mx-2 mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Aadhar</th>
                            <th scope="col">Driving License</th>
                            <th scope="col">Address</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((item, key) => (
                                <tr key={key}>
                                    <td width="150px">{item?.data?.name}</td>
                                    <td>{item?.data?.email}</td>
                                    <td>{item?.data?.phone}</td>
                                    <td>{item?.data?.aadhar}</td>
                                    <td width="150px">{item?.data?.license}</td>
                                    <td >{item?.data?.address}</td>
                                    <td width="120px">{item?.data?.fromDate}</td>
                                    <td width="120px">{item?.data?.toDate}</td>
                                    <td width="120px">{item?.data?.vehicle}</td>
                                    <td width="90px" style={{
                                        textTransform:"capitalize"
                                    }} className="text-secondary fw-bolder fs-6">{item?.data?.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Bookings;