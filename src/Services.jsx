/** @format */

import React from "react";
import Card from "./Components/Card";
const Services = () => {
  return (
    <>
      <div className="container services overflow-hidden ">
        <div className="row ">
          <div className="col">
            <h1>Our Services</h1>
          </div>
          <div className="row gy-3 mx-auto">
            <div className="col-md-4 ">
              <Card title="web development" src="https://picsum.photos/207" />
            </div>
            <div className="col-md-4">
              <Card title="app development" src="https://picsum.photos/205" />
            </div>
            <div className="col-md-4">
              <Card
                title="software development"
                src="https://picsum.photos/204"
              />
            </div>
          </div>

          <div className="row gy-3 mx-auto">
            <div className="col-md-4">
              <Card
                title="android development"
                src="https://picsum.photos/200"
              />
            </div>
            <div className="col-md-4">
              <Card title="digital marketing" src="https://picsum.photos/202" />
            </div>
            <div className="col-md-4">
              <Card
                title="search engine optimisation"
                src="https://i.picsum.photos/id/651/200/200.jpg?hmac=p8_kpEZVVgCD0ruS4M5WHOZ2-VETfCi3aXmYAbav3NE"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
