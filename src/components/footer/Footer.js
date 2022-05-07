import { Link } from "react-router-dom";
import "../footer/Footer.css";

export default function Footer() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <p style={{ color: "white" }}>
          {" "}
          im aisha and i made this blog after a lot of procatinating and wasted
          time :3 , i hope you like it ^_^
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
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
      </div>
    </div>
  );
}
