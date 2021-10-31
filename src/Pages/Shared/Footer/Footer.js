import React from "react";
import { Link } from "react-router-dom";
import app from "../../../images/img.png";
const Footer = () => {
    return (
        <div>
            <footer className="container-fluid bg-dark p-5 mt-5">
                <div className="container d-md-flex justify-content-between">
                    <div>
                        <div className="my-2">
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/events"
                            >
                                Events
                            </Link>
                        </div>
                        <div className="my-2">
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/contact"
                            >
                                Contact
                            </Link>
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/tearms"
                            >
                                Tearms & Service
                            </Link>
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/privacy"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="me-5">
                        <h5 className="text-white">Get The App</h5>
                        <img
                            className="img-fluid"
                            height="80px"
                            width="135px"
                            src={app}
                            alt=""
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
