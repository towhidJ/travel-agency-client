import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "./../../../hooks/useAuth";
import "./ManageOrder.css";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [st, setSt] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/orders/")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setSt(0);
            });
    }, [st]);

    const changHandler = (data, id) => {
        console.log(data);
        fetch(`http://localhost:5000/status/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: data }),
        })
            .then((res) => res.json())
            .then((data) => {
                setSt(1);
                alert("Status Change success");
            });
    };

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "Delete",
                    headers: { "Content-Type": "application/json" },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setSt(1);

                        toast.error("Order Delete Success!");
                    });
            }
        }
    };

    return (
        <div className="mt-5 pt-5">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Manage
                        <span className="search-heading-text"> Order</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="container mx-auto px-5">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <th scope="row">{order._id}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.eventName}</td>
                                <td>{order.price}</td>
                                <td
                                    className={
                                        order.status === "Pending"
                                            ? "pending"
                                            : "approved"
                                    }
                                >
                                    {order.status === "Pending" ? (
                                        <select
                                            className="border-0 px-1 pending"
                                            onChange={(e) =>
                                                changHandler(
                                                    e.target.value,
                                                    order._id
                                                )
                                            }
                                        >
                                            <option value="Pending">
                                                {order.status}
                                            </option>
                                            <option value="Approved">
                                                Approved
                                            </option>
                                        </select>
                                    ) : (
                                        order.status
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteHandler(order._id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default ManageOrder;
