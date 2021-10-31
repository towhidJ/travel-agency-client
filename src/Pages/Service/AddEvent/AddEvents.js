import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddEvents = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        await fetch(`https://macabre-vault-58838.herokuapp.com/addEvent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                toast("Event Save Successfully");
            });

        console.log(data);
        reset();
    };
    return (
        <div className="mt-5 pt-4">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Add
                        <span className="search-heading-text"> Event</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <div
                className="container px-5 my-2 border-2 shadow-lg p-5  w-full "
                style={{ backgroundColor: "lightblue" }}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            {...register("eventName", { required: true })}
                            type="text"
                            placeholder="Enter Event Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control
                            {...register("eventDate", { required: true })}
                            type="date"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            {...register("description", { required: true })}
                            as="textarea"
                            placeholder="Event Description"
                            style={{ height: "180px" }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                        <Row className="mb-3">
                            <Form.Label>Event Durations</Form.Label>
                            <InputGroup as={Col} className="mb-3">
                                <Form.Control
                                    {...register("days", { required: true })}
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                />
                                <InputGroup.Text id="basic-addon3">
                                    Days
                                </InputGroup.Text>
                            </InputGroup>
                            <InputGroup as={Col} className="mb-3">
                                <Form.Control
                                    {...register("nights", { required: true })}
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                />
                                <InputGroup.Text id="basic-addon3">
                                    Nights
                                </InputGroup.Text>
                            </InputGroup>
                        </Row>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Event Location</Form.Label>
                            <Form.Control
                                {...register("location", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                {...register("price", { required: true })}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                {...register("country", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("img", { required: true })}
                            />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Add Events
                    </Button>
                </Form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default AddEvents;
