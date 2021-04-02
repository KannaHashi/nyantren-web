import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
// import TextField from 'material-ui/RaisedButton'
import TextField from "material-ui/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Input } from "./../../Property/Form";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faKey,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import DevIcons from "./../../icons/devices.png";
import axios from "axios";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

// register lottie and define custom element
defineLordIconElement(loadAnimation);
// import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch("http://api-nyantren.herokuapp.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }, props) => {
  let apiHost = "http://api-nyantren.herokuapp.com/";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    window.location.href = "/";
    setLoad(false);
  };

  return (
    <React.Fragment>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row rheight-100">
          <div className="col-6 kol-2 text-lgreen">
            <div className="row h-100 d-flex align-items-center justify-content-center">
              <div
                id="carouselBasicExample"
                class="h-50 d-flex align-items-center carousel carousel-dark slide col-8"
                data-bs-ride="carousel"
              >
                <ol class="carousel-indicators mt-2">
                  <li
                    data-bs-target="#carouselBasicExample"
                    data-bs-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-bs-target="#carouselBasicExample"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselBasicExample"
                    data-bs-slide-to="2"
                  ></li>
                  <li
                    data-bs-target="#carouselBasicExample"
                    data-bs-slide-to="3"
                  ></li>
                  <li
                    data-bs-target="#carouselBasicExample"
                    data-bs-slide-to="4"
                  ></li>
                  <li
                    data-bs-target="#carouselBasicExample"
                    data-bs-slide-to="5"
                  ></li>
                </ol>
                <div class="carousel-inner h-100 align-items-end d-flex">
                  <div class="carousel-item active">
                    <div className="row">
                      <div className="col-12 justify-content-center d-flex">
                        <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                      </div>
                    </div>
                    <div class="mt-10">
                      <h5 className="text-center">Setoran Hafalan</h5>
                      <div className="text-center">
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-12 justify-content-center d-flex">
                        <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                      </div>
                    </div>
                    <div class="mt-10">
                      <h5 className="text-center">Hutang Hafalan</h5>
                      <div className="text-center">
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-12 justify-content-center d-flex">
                        <img src={DevIcons} className="w-20" alt="devices" />
                      </div>
                    </div>
                    <div class="mt-10">
                      <h5 className="text-center">Perizinan Gadget</h5>
                      <div className="text-center">
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-12 justify-content-center d-flex">
                        <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                      </div>
                    </div>
                    <div class="mt-10">
                      <h5 className="text-center">Pelanggaran dan Poin Siswa</h5>
                      <div className="text-center">
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-12 justify-content-center d-flex">
                        <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                      </div>
                    </div>
                    <div class="mt-10">
                      <h5 className="text-center">Laundry</h5>
                      <div className="text-center">
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-12 justify-content-center d-flex">
                        <FontAwesomeIcon icon={faKey} className="text-lgreen fan" />
                      </div>
                    </div>
                    <div class="mt-10">
                      <h5 className="text-center">Laporan Siswa</h5>
                      <div className="text-center">
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselBasicExample"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselBasicExample"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 bg-lgreen kol-1">
            <MuiThemeProvider>
              <div className="row h-0 justify-content-end">
                <a href="/" className="p-4" style={{ width: "0" }}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-light ab"
                  />
                </a>
              </div>
              <div className="row align-content-center h-100 px-4">
                <div className="col-6 text-start">
                  <h1 className="text-light fw-bold">Nyantren</h1>
                  <h4 className="text-light">Aplikasi Karya Santri</h4>
                  <h5 className="text-start text-light">Masuk</h5>
                </div>
                <div className="mt-2"></div>
                <div className="card bg-lgreen border-0">
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="card-body justify-content-center">
                      <div className="input-group-3 border-light border bg-light mrr-2 my-4 rounded">
                        <span className="prr-3 bg-light me-1">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="my-2 text-success bg-light"
                          />
                        </span>
                        {/* <TextField className="fc bg-light border-start px-2 text-success" hintText="Email" floatingLabelText="Email" /> */}
                        <Input
                          className="fc bg-light border-start px-2 text-success"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                        />
                      </div>
                      <div className="input-group-3 border-light border bg-light mrr-2 my-4 rounded">
                        <span className="prr-3 bg-light me-1">
                          <FontAwesomeIcon
                            icon={faKey}
                            className="my-2 text-success bg-light"
                          />
                        </span>
                        <Input
                          className="fc bg-light border-start px-2 text-success"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          value={password}
                        />
                      </div>
                      
                    {load === false ? (
                      <Input
                        type="submit"
                        className="btn btn-success mb-2 rounded align-self-center d-flex justify-content-center w-50"
                        value="Masuk"
                      />
                      ) : (
                      <Button className="btn btn-success mb-2 rounded align-self-center d-flex justify-content-center w-50">
                        Masuk <lord-icon trigger="loop" src="/animatedIcons/loader.json"></lord-icon>
                      </Button>
                    )}
                    </div>
                  </form>
                  {/* <Button className="btn btn-success mb-2 rounded" label={"Masuk"} style={{width: "50%"}} /> */}
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
