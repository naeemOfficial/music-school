import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Main from "../Layout/Main";
import Instructor from "../Pages/Instructors/Instructors";
import TeacherDetails from "../Pages/Home/TeacherDetails/TeacherDetails";
import img1 from "../assets/images/t1.jpg";
import img2 from "../assets/images/t2.jpg";
import img3 from "../assets/images/t3.jpg";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import NotFound from "../Pages/NotFound/NotFound";

const reviews = [
  {
    id: 1,
    image: img1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    image: img2,
    name: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    image: img3,
    name: "Mike Johnson",
    email: "mike@example.com",
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "/teacherDetails/:id",
        element: <TeacherDetails reviews={reviews} />,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
