
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import db from "../../firebase";
import { doc, collection,addDoc, updateDoc, query, getDocs } from "firebase/firestore";


function ProductModal(props) {
    const { modalId, itemId, data } = props;

    const [address,setAddress] = useState(data?.address);
    const [energy,setEnergy] = useState(data?.energy);
    const [title, setTitle] = useState(data?.title);
    const [range, setRange] = useState(data?.range);
    const [category, setCategory] = useState(data?.category);
    const [price, setPrice] = useState(data?.price);
    const [url, setUrl] = useState(data?.img);
    const [seats,setSeats] = useState(data?.seats);
    const [vehicleType,setVehicleType] = useState(data.vehicle_type);

    const [isUpdating, setIsUpdating] = useState(false);

    console.log(itemId)

    const update = async () => {
        setIsUpdating(true);
        const docRef = doc(db, "tbl_vehicles_list", itemId);

        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, {
            address:address,
            energy:energy,
            title:title,
            range:range,
            category:category,
            price:price,
            img:url,
            seats:seats,
            vehicle_type:vehicleType
        });

        alert("Updated !");
        setIsUpdating(false);

        window.location.replace("./admin");

    }

    return (
        <>
            {/* Modal */}
            <div
                className="modal fade"
                id={modalId}
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Update Vehicle
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Vehicle Type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={vehicleType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Energy / Fuel
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={energy}
                                    onChange={(e) => setEnergy(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Range
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Seats
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={seats}
                                    onChange={(e) => setSeats(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Category
                                </label>
                                <select onChange={(e) => setCategory(e.target.value)} class="form-select" aria-label="Default select example">
                                    {
                                        ["Mini Car - 4 Seater", "Medium Car - 5 Seater", "Large Car - 7 Seater", "Bike","Cycle","Electric Car","Electric Bike","Electric Cycle"].map((item, key) => (

                                            item == category ?
                                                (<option selected key={
                                                    key
                                                } value={item}>{item}</option>) : (<option key={
                                                    key
                                                } value={item}>{item}</option>)


                                        ))
                                    }
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    min="1"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Img Url
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                update();
                            }} type="button" className="btn btn-primary">
                                {isUpdating ? "Updating..." : "Update"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

function AddModal() {
    const [address,setAddress] = useState(null);
    const [energy,setEnergy] = useState(null);
    const [title, setTitle] = useState(null);
    const [range, setRange] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [url, setUrl] = useState(null);
    const [seats,setSeats] = useState(null);
    const [vehicleType,setVehicleType] = useState(null);

    const [isUpdating, setIsUpdating] = useState(false);

    const update = async () => {
        setIsUpdating(true);
         

        const docRef = await addDoc(collection(db, "tbl_vehicles_list"), {
            address:address,
            energy:energy,
            title:title,
            range:range,
            category:category,
            price:price,
            img:url,
            seats:seats,
            vehicle_type:vehicleType
        });
          console.log("Document written with ID: ", docRef.id);

     

        alert("Added !");
        setIsUpdating(false);

        window.location.replace("./admin");

    }

    return (
        <>
            {/* Modal */}
            <div
                className="modal fade"
                id="addproductmodal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Add Vehicle
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Vehicle Type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={vehicleType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Energy / Fuel
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={energy}
                                    onChange={(e) => setEnergy(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Range
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Seats
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={seats}
                                    onChange={(e) => setSeats(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Category
                                </label>
                                <select onChange={(e) => setCategory(e.target.value)} class="form-select" aria-label="Default select example">
                                    {
                                        ["Mini Car - 4 Seater", "Medium Car - 5 Seater", "Large Car - 7 Seater", "Bike","Cycle","Electric Car","Electric Bike","Electric Cycle"].map((item, key) => (

                                            item == category ?
                                                (<option selected key={
                                                    key
                                                } value={item}>{item}</option>) : (<option key={
                                                    key
                                                } value={item}>{item}</option>)


                                        ))
                                    }
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    min="1"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Img Url
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                update();
                            }} type="button" className="btn btn-primary">
                                {isUpdating ? "Updating..." : "Update"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

function Admin() {

    const [products, setProducts] = useState(null);

    const fetchProducts = async () => {
        let tmpData = [];
        const q = query(collection(db, "tbl_vehicles_list"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            tmpData.push({
                id: doc.id,
                data: doc.data()
            });
        });

        console.log(tmpData)
        setProducts(tmpData);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (<>
        <AdminNavbar />

        <div className="container mt-5">
            <h3>Vehicles</h3>

            <div >
                <button style={{
                    float:"right"
                }} data-bs-toggle="modal" data-bs-target="#addproductmodal" className="btn btn-primary mt-3 mb-3">Add</button>

                <AddModal />
            </div>

            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Category</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((item, key) => (
                            <tr key={key}>
                                <td width={"90px"} scope="row">
                                    <img width="80px" height="80px" src={item?.data?.img} />
                                </td>
                                <td width="250px" scope="row">
                                    {item?.data?.title}
                                </td>
                                <td scope="row">
                                    {item?.data?.vehicle_type}
                                </td>
                               
                                <td scope="row">
                                    {item?.data?.category?.toUpperCase()}
                                </td>
                                <td scope="row">
                                    {item?.data?.address}
                                </td>
                                <td width={"100px"} scope="row">
                                    {item?.data?.price}
                                </td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target={"#tj" + item?.id} className="btn btn-primary">Edit</button>

                                    <ProductModal itemId={item.id} data={item?.data} modalId={"tj" + item?.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}

export default Admin;