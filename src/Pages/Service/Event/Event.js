import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Event.css";
const Event = (props) => {
    const {
        eventName,
        description,
        img,
        price,
        days,
        nights,
        _id,
        eventDate,
        location,
        country,
    } = props.event;
    return (
        <div className="col event">
            <Card className="event-card shadow-lg">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{eventName}</Card.Title>
                    <p className="text-primary fw-bold">
                        {days} Days - {nights} Nights{" "}
                    </p>
                    <Card.Text>{description.slice(0, 150)}</Card.Text>
                    <hr />
                    <div
                        className="d-flex justify-content-between px-2 fw-bold"
                        style={{ color: "green" }}
                    >
                        <p>Packages Price:</p>
                        <p>${price}</p>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Link
                        to={{
                            pathname: `/addorder/${eventName}`,
                            state: {
                                prices: price,
                                id: _id,
                                img: img,
                                description,
                                days,
                                nights,
                                eventDate,
                                locations: location,
                                country,
                            },
                        }}
                        className="btn btn-warning text-center"
                    >
                        Booking Now{" "}
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Event;
