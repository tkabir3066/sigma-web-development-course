import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // case:1 run on every render
  useEffect(() => {
    alert("Hey I will run on every render");
  });
  // case:2 run only on first render
  useEffect(() => {
    alert("Hey Welcome to the react page, this is the first render");
  }, []);

  // case:3 run only when certain values change
  useEffect(() => {
    alert("I am running because Color was change");
  }, [color]);

  //Example of cleanup function
  useEffect(() => {
    alert("Hey Welcome to the react page, this is the first render of App.jsx");

    return () => {
      alert("Component unmounted");
    };
  }, []);
  return <div>I am Navbar of {color} color hehe...</div>;
};

export default Navbar;
