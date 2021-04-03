/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import HomeAbout from "./HomeAbout";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Spiderman from "./imgs/spiderman.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomeAbout
              h1="Grow your business with"
              imgsrc="https://thapatechnical.github.io/reactlivewebsite/static/media/img2.e981619f.svg"
            />
          )}
        />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/about"
          render={() => (
            <HomeAbout h1="Welcome to About page" imgsrc={Spiderman} />
          )}
        />
        <Route exact path="/services" component={Services} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
