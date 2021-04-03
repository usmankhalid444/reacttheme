/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const HomeAbout = (props) => {
  return (
    <>
      <div className="container commanBody">
        <div className="row">
          <div className="col-md-6 tag">
            <h1>
              {props.h1} usman
              <span style={{ color: "yellowGreen" }}>Khalid</span>
            </h1>
            <p>We are the team of talented developer making websites</p>
            <NavLink style={{ textDecoration: "none" }} exact to="/Services">
              <Button variant="contained" color="primary">
                get started
              </Button>
            </NavLink>
          </div>
          <div className="col-md-6 Fimg">
            <img src={props.imgsrc} alt="img" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeAbout;
