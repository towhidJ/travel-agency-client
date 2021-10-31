import React from "react";
import "./Destination.css";

const Destination = () => {
    return (
        <>
            <div className="text-center my-2">
                <h6>Find a Tour by </h6>
                <h4>DESTINATION</h4>
                <h5 className="text-decoration-underline">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h5>
            </div>
            <div className="row row-cols-6 justify-content-center align-items-center gx-5">
                <div className="box col d-flex justify-content-center align-items-center ">
                    <div className="img-title">
                        <h1>Swiz</h1>
                    </div>
                </div>

                <div className="box col d-flex justify-content-center align-items-center ">
                    <div className="img-title">
                        <h1>Brazil</h1>
                    </div>
                </div>

                <div className="box col d-flex justify-content-center align-items-center ">
                    <div className="img-title">
                        <h1>Poland</h1>
                    </div>
                </div>

                <div className="box col d-flex justify-content-center align-items-center ">
                    <div className="img-title">
                        <h1>Norway</h1>
                    </div>
                </div>

                <div className="box col d-flex justify-content-center align-items-center ">
                    <div className="img-title">
                        <h1>Greek</h1>
                    </div>
                </div>

                <div className="box col d-flex justify-content-center align-items-center ">
                    <div className="img-title">
                        <h1>Italy</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destination;
