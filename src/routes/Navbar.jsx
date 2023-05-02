import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid black",
        padding: "1rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/posts">View Posts</Link>
      <Link to="/addposts">Add Posts</Link>
      <Link to="/signup">Registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
