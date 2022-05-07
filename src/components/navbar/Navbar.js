import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AddPost from "../AddPost";
import "./Navbar.css";

function Navbar() {
  const user = true;

  <div>
    <div className="top">
      <nav className="topLeft">
        <h1 className="logo">LovegoodBlog</h1>
      </nav>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>;
}
export default Navbar;
