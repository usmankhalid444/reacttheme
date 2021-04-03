/** @format */

import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Contact = () => {
  const [data, setData] = useState({});
  const getdata = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const submitfun = () => {
    alert("information submitted");
  };
  return (
    <>
      <div className="container contact">
        <div className="row">
          <div className="col">
            <h1>Contact us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <p>full name</p>
            <input
              onChange={getdata}
              type="text"
              name="name"
              placeholder="enter your full name"
            />
            <p>phone</p>
            <input
              onChange={getdata}
              type="text"
              name="phone"
              placeholder="enter your phone number"
            />
            <p>email adress</p>
            <input
              onChange={getdata}
              type="text"
              name="email"
              placeholder="enter your email adress"
            />
            <p>message</p>
            <input
              onChange={getdata}
              type="text"
              name="message"
              placeholder="enter your message"
            />
            <br />
            <Button variant="contained" color="primary" onClick={submitfun}>
              submit
            </Button>
          </div>
          <div className="col-md-6 showC gy-3">
            <ul>
              <li>
                <p>
                  my name is{" "}
                  <span style={{ color: "orangered" }}>{data.name}</span>
                </p>
              </li>
              <li>
                <p>
                  my phone number is{" "}
                  <span style={{ color: "orangered" }}>{data.phone}</span>
                </p>
              </li>
              <li>
                <p>
                  my email is{" "}
                  <span style={{ color: "orangered" }}>{data.email}</span>
                </p>
              </li>
              <li>
                <p>
                  i want to say{" "}
                  <span style={{ color: "orangered" }}>{data.message}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
