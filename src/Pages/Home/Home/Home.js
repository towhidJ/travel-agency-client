import React from "react";
import { Spinner } from "react-bootstrap";
import useEvents from "./../../../hooks/useEvents";
import Event from "./../../Service/Event/Event";
import Banner from "./../Banner/Banner";
import Destination from "./../Destination/Destination";
import TourBanner from "./../TourBanner/TourBanner";
import "./Home.css";

const Home = () => {
    const { events, loading } = useEvents();
    const size = 6;
    const items = events.slice(0, size);
    return (
        <div className="">
            <Banner />
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h5>GREAT PLACES TO VISIT</h5>
                    <h1 className="search-text">
                        Search
                        <span className="search-heading-text"> and Enjoy!</span>
                    </h1>
                    <p className="w-50 mx-auto fw-medium p-3">
                        Compellingly embrace empowered e-business after user
                        friendly intellectual capital. Interactively actualize
                        front-end processes with effective convergence.
                    </p>
                </div>

                {loading ? (
                    <div className=" d-flex justify-content-center align-items-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="container mt-2 row row-cols-md-2 row-cols-lg-3 row-cols-1 g-5">
                        {items.map((event) => (
                            <Event key={event._id} event={event}></Event>
                        ))}
                    </div>
                )}
            </div>
            <hr />
            <TourBanner />
            <Destination></Destination>
        </div>
    );
};

export default Home;
