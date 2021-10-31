import React from "react";
import slider1 from "../../../images/slider-1.jpg";
import slider2 from "../../../images/slider-2.jpg";
import slider3 from "../../../images/slider-3.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <div>
            <section className=" mt-5">
                <div
                    id="carouselExampleCaptions"
                    class="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src={slider3}
                                class="d-block w-100"
                                alt="..."
                            />
                            <div class="carousel-caption d-md-block">
                                <p>Best Place TO Travel</p>
                                <h5>Italy</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src={slider1}
                                class="d-block w-100"
                                alt="..."
                            />
                            <div class="carousel-caption  d-md-block">
                                <p>Best Place TO Travel</p>
                                <h5>Norway</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src={slider2}
                                class="d-block w-100"
                                alt="..."
                            />
                            <div class="carousel-caption  d-md-block">
                                <p>Best Place TO Travel</p>
                                <h5>JAPAN</h5>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Banner;
