import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg  fixed-top shadow-lg mb-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    Travel Agency
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orders" className="nav-link ">
                                My Orders
                            </Link>
                        </li>

                        {user?.email && (
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle btn btn-warning"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Admin
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li className="nav-item">
                                        <Link
                                            to="/add-events"
                                            className="nav-link "
                                        >
                                            Add Event
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/admin/manageorder"
                                            className="nav-link "
                                        >
                                            Manage Order
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/admin/manageevents"
                                            className="nav-link "
                                        >
                                            Manage Events
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        )}
                    </ul>
                    <div>
                        {
                            <Link
                                to="/"
                                className="px-2 text-decoration-none text-black"
                            >
                                {user?.displayName}
                            </Link>
                        }
                        {user?.email ? (
                            <button
                                onClick={logOut}
                                className="btn btn-warning text-white"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-warning text-white"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
