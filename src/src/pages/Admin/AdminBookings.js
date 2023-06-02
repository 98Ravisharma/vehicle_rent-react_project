
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import db from "../../firebase";
import { doc, collection, updateDoc, query, getDocs } from "firebase/firestore";

function Row(props) {
    const { item, key } = props;

    const updateStatus = async (value) => {
        const docRef = doc(db, "tbl_bookings", item?.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, {
            status: value
        });

        alert("Status Updated !");
    }

    return (
        <tr key={
            key
        }>
            <td width="150px">{item?.data?.name}</td>
                                    <td>{item?.data?.email}</td>
                                    <td>{item?.data?.phone}</td>
                                    <td>{item?.data?.aadhar}</td>
                                    <td width="150px">{item?.data?.license}</td>
                                    <td >{item?.data?.address}</td>
                                    <td width="120px">{item?.data?.fromDate}</td>
                                    <td width="120px">{item?.data?.toDate}</td>
                                    <td width="120px">{item?.data?.vehicle}</td>

            <td className="text-warning">

                <select onChange={(e)=>updateStatus(e.target.value)} class="form-select" aria-label="Default select example">
                {
                    ["pending","approved","processing","out for delivery","delivered","cancelled"].map((status,key)=>(
                        (item?.data?.status == status) ?
                        <option value={status} selected>{status}</option> :
                        <option value={status}>{status}</option> 
                    ))
                }
                </select>
            </td>
        </tr>
    )
}

function AdminBookings() {
    const [bookings, setBookings] = useState(null);

    const fetchBookingDetails = async () => {
        setBookings(null);
        let tmpData = [];
        try {
            const q = query(collection(db, "tbl_bookings"));

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

    useEffect(() => {
        fetchBookingDetails();
    }, [])

    return (<>
        <AdminNavbar />

        <div className="container-fluid mt-5">
            <h3>Booking Requests</h3>

            {
                (bookings?.length != 0) &&
                (
                    <div className="mt-5 mb-5 container-fluid">
                        <table class="table mt-3">
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
                                        <Row item={item} key={key}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    </>
    )
}

export default AdminBookings;