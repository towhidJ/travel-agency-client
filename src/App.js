import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import AddBooking from "./Pages/Orders/AddOrder/AddBooking";
import ManageOrder from "./Pages/Orders/ManageOrder/ManageOrder";
import Orders from "./Pages/Orders/Orders/Orders";
import AddEvents from "./Pages/Service/AddEvent/AddEvents";
import Events from "./Pages/Service/Events/Events";
import ManageEvents from "./Pages/Service/ManageEvents/ManageEvents";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>

                    <Route path="/events">
                        <Events></Events>
                    </Route>
                    <PrivateRoute path="/add-events">
                        <AddEvents></AddEvents>
                    </PrivateRoute>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <PrivateRoute path="/addorder/:eventName">
                        {/* <AddOrder></AddOrder> */}
                        <AddBooking></AddBooking>
                    </PrivateRoute>
                    <PrivateRoute path="/orders">
                        <Orders></Orders>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/manageorder">
                        <ManageOrder></ManageOrder>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/manageevents">
                        <ManageEvents></ManageEvents>
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
