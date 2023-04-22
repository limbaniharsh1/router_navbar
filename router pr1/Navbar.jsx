import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="navtext" to="/">home</Link>
        </li>
        <li>
          <Link className="navtext" to="/about">about</Link>
        </li>
        <li>
          <Link className="navtext" to="/contect">contect</Link>
        </li>
        <li>
          <Link className="navtext mr" to='/login'>login</Link>
          <Link className="navtext" to='/signup'>sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
