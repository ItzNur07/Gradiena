import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="logo">
          {/* <img
            src="https://webgradients.com/img/other/logos/itmeo_logo.png"
            alt="logo"
          /> */}
          <Link to="/">
            <h1>GREDIENA</h1>
          </Link>
        </div>
        <ul>
          <Link to="custom">
            <li>Custom generate</li>
          </Link>
          {/* <li className="sk">.Sketch</li>
          <li className="psd">.Psd</li> */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
