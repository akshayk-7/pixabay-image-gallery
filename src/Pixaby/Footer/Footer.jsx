import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Pixabay</h3>
          <p>
            Free images, videos, and  music.
          </p>
        </div>

        <div className="footer-column">
          <h4>Discover</h4>
          <ul>
            <li><a href="#">Images</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Music</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Contributors</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Challenges</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Image Pixabay . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;