import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "./../../../hooks/useAuth";

const ManageEvents = () => {
    const [event, setEvent] = useState([]);
    const { user } = useAuth();
    const [loadEvents, setLoadEvents] = useState(true);
    const [st, setSt] = useState(0);
    useEffect(() => {
        setLoadEvents(true);
        fetch("https://macabre-vault-58838.herokuapp.com/events")
            .then((res) => res.json())
            .then((data) => {
                setEvent(data.events);
                console.log(event);
                setLoadEvents(false);
                setSt(0);
            });
    }, [st]);
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            {
                fetch(
                    `https://macabre-vault-58838.herokuapp.com/events/${id}`,
                    {
                        method: "Delete",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        toast.error("Order Delete Success!");
                        setSt(1);
                    });
            }
        }
    };

    return (
        <div className="container mx-auto px-5 pt-3 mt-5">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Manage
                        <span className="search-heading-text"> Event</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <table className="table text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Date</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Duration</th>

                        <th scope="col">Country</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {loadEvents ? (
                    <div className=" d-flex justify-content-center align-items-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <tbody>
                        {event.map((event) => (
                            <tr key={event._id}>
                                <th scope="row">{event._id}</th>
                                <td>{event.eventName}</td>
                                <td>{event.eventDate}</td>
                                <td>{event.location}</td>
                                <td>
                                    {event.days} Days-{event.nights} nights
                                </td>
                                <td>{event.country}</td>
                                <td>{event.price}</td>

                                <td>
                                    <button
                                        onClick={() => deleteHandler(event._id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
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
    );
};

export default ManageEvents;
