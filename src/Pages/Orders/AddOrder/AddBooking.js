import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./AddOrder.css";

const AddBooking = () => {
    const location = useLocation();
    const history = useHistory();
    const { eventName } = useParams();
    const {
        prices,
        img,
        description,
        days,
        nights,
        eventDate,
        id,
        locations,
        country,
    } = location.state;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        data.status = "Pending";
        fetch("https://macabre-vault-58838.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Order processed Successfully");
                    reset();
                    history.push("/orders");
                }
            });
    };
    return (
        <div
            className="py-5"
            style={{ backgroundColor: "whitesmoke", marginTop: "12px" }}
        >
            <div className="d-flex justify-content-between  px-5 mt-5">
                <h6 className="text-danger fw-bold px-4">
                    {days} Days - {nights} Nights{" "}
                </h6>
                <h6 className=" fw-bold px-5">$ {prices}</h6>
            </div>
            <div className="container mx-auto row justify-content-between mt-3">
                <div className="col-12 col-lg-8">
                    <div>
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <form
                        className="shipping-form mt-3 border-2 shadow-lg px-3 py-2 rounded"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            defaultValue={locations}
                            {...register("destination")}
                            hidden
                        />
                        <input
                            defaultValue={country}
                            {...register("country")}
                            hidden
                        />
                        <input
                            defaultValue={id}
                            {...register("eventId")}
                            hidden
                        />
                        <input
                            defaultValue={eventName}
                            {...register("eventName")}
                            readOnly
                        />
                        <input
                            defaultValue={eventDate}
                            {...register("eventDate")}
                            readOnly
                        />
                        <input
                            defaultValue={prices}
                            {...register("price")}
                            readOnly
                        />

                        <input
                            defaultValue={user.displayName}
                            {...register("name")}
                            readOnly
                        />

                        <input
                            defaultValue={user.email}
                            {...register("email", { required: true })}
                            readOnly
                        />
                        {errors.email && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                        <input
                            placeholder="phone number"
                            defaultValue=""
                            {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                        <input
                            placeholder="City"
                            defaultValue="Chittagong"
                            {...register("city", { required: true })}
                        />
                        {errors.city && (
                            <span className="error">
                                This field is required
                            </span>
                        )}

                        <textarea
                            placeholder="Address"
                            defaultValue=""
                            {...register("address", { required: true })}
                        />
                        {errors.address && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                        <input
                            className="btn btn-primary mb-3"
                            type="submit"
                            value="Booking Now"
                        />
                    </form>
                </div>
            </div>
            <div className="row mt-2 container mx-auto">
                <div className="col-12 col-lg-8 mt-5">
                    <div>
                        <h1>{eventName}</h1>
                    </div>
                    <div>
                        <p
                            className="fw-medium text-justify"
                            style={{ fontSize: "1.2rem" }}
                        >
                            {description}
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
                            Like this Service
                        </h2>
                        <div className="d-flex gap-3">
                            <a
                                className="text-decoration-none"
                                style={{ color: "blue" }}
                                href="http://facebook.com"
                            >
                                Facebook
                            </a>
                            <a
                                className="text-decoration-none"
                                style={{ color: "skyblue" }}
                                href="http://twitter.com"
                            >
                                Twitter
                            </a>
                            <a
                                className="text-decoration-none"
                                style={{ color: "orange" }}
                                href="http://google.com"
                            >
                                Google
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;
