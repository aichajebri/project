import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../home/Home.css";
import Quotes from "../Quotes/Quotes";
import Footer from "../footer/Footer";
import Posts from "../Posts";
function Home() {
  return (
    <>
      <div>
        <Navbar className="top">
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
            <a href="https://www.instagram.com/mischief_aisha/">
              {" "}
              <i className="topIcon fab fa-instagram-square"></i>
            </a>

            <a href="https://github.com/aichajebri">
              <i class="fa-brands fa-github-square"></i>
            </a>
            <i className="topIcon fab fa-pinterest-square"></i>
            <a href="https://twitter.com/aisha_jebri">
              {" "}
              <i className="topIcon fab fa-twitter-square"></i>
            </a>
          </div>
        </Navbar>
        <Quotes />
        <Posts />
        <Footer />
      </div>
    </>
  );
}
export default Home;
