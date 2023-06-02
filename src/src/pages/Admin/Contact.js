
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import db from "../../firebase";
import { collection,query, getDocs } from "firebase/firestore";

function Row(props) {
    const { item, key } = props;

    return (
        <tr key={
            key
        }>
            <td>
                {item?.data?.name}
            </td>
            <td>
                {item?.data?.email}
            </td>
            <td>
                {item?.data?.subject}
            </td>
            <td>
                {item?.data?.message}
            </td>
            
        </tr>
    )
}

function AdminContact() {

    const [bookingsDetails, setBookingDetails] = useState(null);

    const fetchContact= async () => {
        let tmpData = [];
        const q = query(collection(db, "tbl_contact_us"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            tmpData.push({
                id: doc.id,
                data: doc.data()
            })
        });

        console.log(tmpData)
        setBookingDetails(tmpData);
    }

    useEffect(() => {
        fetchContact();
    }, [])

    return (<>
        <AdminNavbar />

        <div className="container mt-5">
            <h3>Table Bookings</h3>

            {
                (bookingsDetails?.length != 0) &&
                (
                    <div className="mt-5 mb-5 container">
                
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                bookingsDetails?.map((item,key)=>(
                                   <Row item={item} key={key} />
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

export default AdminContact;