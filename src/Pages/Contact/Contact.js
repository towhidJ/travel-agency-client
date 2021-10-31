import React from "react";

const Contact = () => {
    return (
        <div className="mt-5 pt-5">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Contact
                        <span className="search-heading-text"> Us</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="container row row-cols-1 justify-content-center row-cols-lg-2">
                <div className="col mt-5 mb-2">
                    <div className="text-center">
                        <h1 className="search-text">
                            Get in
                            <span className="search-heading-text"> touch</span>
                        </h1>
                        <p className="w-75 mx-auto  fw-medium p-3">
                            Enthusiastically mesh long-term high-impact
                            infrastructures vis-a-vis efficient customer
                            service. Professionally fashion wireless leadership
                            rather than prospective experiences.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3">
                        <div className="text-center">
                            <h1>
                                <i
                                    className="fas fa-map-marked-alt"
                                    style={{ color: "orangered" }}
                                ></i>
                            </h1>
                            <h1>Address</h1>
                            <p>295 S Chittagong</p>
                        </div>
                        <div className="text-center">
                            <h1>
                                <i
                                    className="fas fa-headset"
                                    style={{ color: "orangered" }}
                                ></i>
                            </h1>
                            <h1>Call us</h1>
                            <p>+8801521401825</p>
                        </div>
                        <div className="text-center">
                            <h1>
                                <i
                                    className="fas fa-map-marked-alt"
                                    style={{ color: "orangered" }}
                                ></i>
                            </h1>
                            <h1>Write Us</h1>
                            <p>office@travelicious.com</p>
                            <p>book@travelicious.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
