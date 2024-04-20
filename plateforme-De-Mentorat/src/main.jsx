import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashbord from "./page/Dashbord";
import ErrorPage from "./page/ErrorPage";
import Home from "./page/Home";
import Profil from "./page/Profil";

import Layout from "./components/Layout";
import SignUp from "./page/SingUp";
import Login from "./page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profil/:userName",
        element: <Profil />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/singUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
ErrorPage;
