import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © 2023 OUR-STREAMING-APP. All Rights Reserved. All videos and
              shows on this platform are trademarks of, and all related images
              and content are the property of, OUR-STREAMING Inc. Duplication
              and copy of this is strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <a
              href="https://in.linkedin.com/in/tushar-vani"
              style={{ color: "#FFF" }}
            >
              {" "}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://in.linkedin.com/in/tushar-vani"
              style={{ color: "#FFF" }}
            >
              {" "}
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://in.linkedin.com/in/tushar-vani"
              style={{ color: "#FFF" }}
            >
              {" "}
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://in.linkedin.com/in/tushar-vani"
              style={{ color: "#FFF" }}
            >
              {" "}
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="box">
            <h3>OUR-STREAMING APP</h3>
            <div className="img flexSB">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
        <p style={{ color: "#6b6b6b30", marginLeft: "43%" }}>
          © Design by Tushar vani
        </p>
      </footer>
    </>
  );
};

export default Footer;
