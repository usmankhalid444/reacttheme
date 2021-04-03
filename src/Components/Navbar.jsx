/** @format */
import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
const Navbar = () => {
  let toggleclick = () => {
    alert("lala");
    // let navs = document.querySelector("Navlinks");
    // navs.style.display = "block";
  };
  return (
    <>
      <div className="container Navbar">
        <div className="row ">
          <div className="col-md-6 logoo">
            <h1>
              Usman<span style={{ color: "yellowGreen" }}>Khalid</span>{" "}
              <MenuIcon className="togglebtn" onClick={toggleclick} />
            </h1>
          </div>
          <div className="col-md-6 Navlinks  ">
            <ul className="d-flex justify-content-end ">
              <li>
                <NavLink activeClassName="activeMenu" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeMenu" exact to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeMenu" exact to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeMenu" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
