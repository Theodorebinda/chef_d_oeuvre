import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashbord from "./page/Dashbord";
import ErrorPage from "./page/ErrorPage";
import Home from "./page/Home";
import Profil from "./page/Profil";
import Layout from "./components/Layout";
import Login from "./page/Login";
import SingUpAll from "./components/singUp/singUp";
import MentoréForm from "./components/singUp/Mentoré";
import SingUpMentor from "./page/SingUpMentor";

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
        path: "/singUpAll",
        element: <SingUpAll />,
      },
      {
        path: "/singUpMentor",
        element: <SingUpMentor />,
      },
      {
        path: "/singUpMentoré",
        element: <MentoréForm />,
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
