import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../ManageOrder/ManageOrder.css";
import useAuth from "./../../../hooks/useAuth";
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [st, setSt] = useState(0);

    const emaila = {
        email: user.email,
    };

    useEffect(() => {
        fetch("https://macabre-vault-58838.herokuapp.com/orders/byEmail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(emaila),
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setSt(0);
            });
    }, [st]);

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to cancel this order?")) {
            {
                fetch(
                    `https://macabre-vault-58838.herokuapp.com/orders/${id}`,
                    {
                        method: "Delete",
                        headers: { "Content-Type": "application/json" },
                    }
                )
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
                            <th scope="col">Action</th>
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
                                    {order.status}
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
            </div>
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
    );
};

export default Orders;
