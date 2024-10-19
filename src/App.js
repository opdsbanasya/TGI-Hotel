import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
    return <div className=" font-[poppins]">
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
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);