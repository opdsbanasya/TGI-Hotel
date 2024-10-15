import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Body />
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter} />
);
