import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="co-white" to="/">home</Link>
        </li>
        <li>
          <Link className="co-white" to="/about">about</Link>
        </li>
        <li>
          <Link className="co-white" to="/blog">blog</Link>
        </li>
        <li>
          <Link className="co-white" to="/contect">contect</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
