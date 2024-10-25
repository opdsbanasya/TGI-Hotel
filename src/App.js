import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Facilities from "./Components/Facilities";
import Pricing from "./Components/Pricing";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

const App = () => {
    return <div className="bg-[#FEFAE0] font-[poppins]">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/facilities",
                element: <Facilities />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-form",
                element: <ContactUs />
            },
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);