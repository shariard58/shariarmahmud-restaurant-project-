import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
};

export default Body;
