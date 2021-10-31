import React, { useEffect, useState } from "react";
import "../ManageOrder/ManageOrder.css";
import useAuth from "./../../../hooks/useAuth";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
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
            });
    }, []);

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
