import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div style={{ position: "fixed" }} className="container">
        <div className="App">
          <nav
            style={{
              width: "120%",
              marginLeft: "-1.2vmax",
              backgroundColor: "#bebebe",
            }}
            className="navbar mt-02 navbar-expand-lg navbar-light bg-muted"
          >
            <div className="container-fluid ms-5">
              <h2 className="navbar-brand text-dark fs-3" href="#">
                Safoods
              </h2>
              <div
                style={{ marginLeft: "950px" }}
                className="collapse navbar-collapse"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link mx-2 text-dark"
                      aria-current="page"
                      href="/"
                    >
                      Solutions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2 text-dark" href="/register">
                      Signin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2 text-dark" href="/about">
                      Company
                    </a>
                  </li>
                  <li className="nav-item">
                    <button type="button" class="btn btn-light">
                      Talk
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default App;
