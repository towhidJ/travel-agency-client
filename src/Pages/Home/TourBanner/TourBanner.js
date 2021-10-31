import React, { useEffect } from "react";
import CountUp from "react-countup";
import "./TourBanner.css";
const TourBanner = () => {
    useEffect(() => {}, []);
    return (
        <div className="mb-5 mt-3 py-5 bannerBk container-fluid img-fluid">
            <div className="text-center text-white mt-5 mb-3">
                <h6>Some statistics about Travel Agency</h6>
                <h4 className="text-center header">CENTER ACHIEVEMENTS</h4>
            </div>
            <div className="row row-cols-md-2 row-cols-lg-4 row-cols-1 container mx-5 px-5 mt-5 ">
                <div className="text-center ">
                    <div>
                        <h4 className="fw-bold">
                            <i
                                className="fas fa-plane-departure"
                                style={{ fontSize: "36px" }}
                            ></i>
                        </h4>
                    </div>
                    <div
                        className="text-warning fw-bold "
                        style={{ fontSize: "48px" }}
                    >
                        <CountUp end="94532" duration=".8" />
                    </div>
                    <div>
                        <h5 className="text-white fw-bold">Customer</h5>
                    </div>
                </div>

                <div className="text-center ">
                    <div>
                        <h4 className="fw-bold">
                            <i
                                className="fas fa-map-marked"
                                style={{ fontSize: "36px" }}
                            ></i>
                        </h4>
                    </div>
                    <div
                        className="text-warning fw-bold "
                        style={{ fontSize: "48px" }}
                    >
                        <CountUp end="1068" duration=".8" />
                    </div>
                    <div>
                        <h5 className="text-white fw-bold">Destination</h5>
                    </div>
                </div>

                <div className="text-center ">
                    <div>
                        <h4 className="fw-bold">
                            <i
                                className="fas fa-globe-africa"
                                style={{ fontSize: "36px" }}
                            ></i>
                        </h4>
                    </div>
                    <div
                        className="text-warning fw-bold "
                        style={{ fontSize: "48px" }}
                    >
                        <CountUp end="2510" duration=".8" />
                    </div>
                    <div>
                        <h5 className="text-white fw-bold">Toures</h5>
                    </div>
                </div>

                <div className="text-center ">
                    <div>
                        <h4 className="fw-bold">
                            <i
                                className="fas fa-bus"
                                style={{ fontSize: "36px" }}
                            ></i>
                        </h4>
                    </div>
                    <div
                        className="text-warning fw-bold "
                        style={{ fontSize: "48px" }}
                    >
                        <CountUp end="1065" duration=".8" />
                    </div>
                    <div>
                        <h5 className="text-white fw-bold">Tour Types</h5>
                    </div>
                </div>
            </div>
            <div className="text-center m-5 p-3">
                <button className="btn btn-warning fw-bolder">
                    Booking Now
                </button>
            </div>
        </div>
    );
};

export default TourBanner;
