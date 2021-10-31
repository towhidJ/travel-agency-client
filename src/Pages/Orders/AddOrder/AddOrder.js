import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "./../../../hooks/useAuth";
import "./AddOrder.css";
const AddOrder = (props) => {
    const location = useLocation();
    const history = useHistory();
    const { eventName } = useParams();
    const { prices } = location.state;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        data.status = "Pending";
        fetch("http://localhost:5000/orders", {
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
        <div className="container d-flex justify-content-center">
            <div className="mt-3 my-2 shadow-lg px-5 pb-3">
                <form
                    className="shipping-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        defaultValue={eventName}
                        {...register("eventName")}
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
                    />

                    <input
                        defaultValue={user.email}
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="error">This field is required</span>
                    )}
                    <input
                        placeholder="phone number"
                        defaultValue=""
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                        <span className="error">This field is required</span>
                    )}
                    <input
                        placeholder="City"
                        defaultValue="Chittagong"
                        {...register("city", { required: true })}
                    />
                    {errors.city && (
                        <span className="error">This field is required</span>
                    )}

                    <textarea
                        placeholder="Address"
                        defaultValue=""
                        {...register("address", { required: true })}
                    />
                    {errors.address && (
                        <span className="error">This field is required</span>
                    )}
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddOrder;
