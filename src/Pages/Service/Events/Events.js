import React from "react";
import { Spinner } from "react-bootstrap";
import useEvents from "./../../../hooks/useEvents";
import Event from "./../Event/Event";

const Events = () => {
    const { events, loading } = useEvents();
    return (
        <div className="mt-5 pt-5">
            <div className="container mt-2 ">
                {loading ? (
                    <div className=" d-flex justify-content-center align-items-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="row row-cols-md-2 row-cols-lg-4 row-cols-1 g-5">
                        {events.map((event) => (
                            <Event key={event._id} event={event}></Event>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
