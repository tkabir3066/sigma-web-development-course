import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";
import MainNavbar from "./components/Navbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <MainNavbar />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <MainNavbar />
          <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <MainNavbar />
          <About />{" "}
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <MainNavbar />
          <User />{" "}
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
