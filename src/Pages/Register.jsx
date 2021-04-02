import React from "react";
import { Input, Button } from "./../Property/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowLeft, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import bg1 from './../bg1.jpg'

const Register = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{height: "100%"}}>
        <div className="row rheight-100 bg-lgreen">
          <div className="col-6 bg-white prr-5 kol-1 py-5 overflow-auto">
            <div className="h-5 justify-content-start">
              <a href="/" className="" style={{width: "0"}}>
                <FontAwesomeIcon icon={faArrowLeft} className="text-lgreen ab"/>
              </a>
            </div>
            <div className="row align-content-center h-100 my-5">
              <div className="card-body mb-2">
                <div className="text-end">
                  <h1 className="text-lgreen fw-bold">Nyantren</h1>
                  <h4 className="text-lgreen">Aplikasi Karya Santri</h4>
                  <h5 className="text-lgreen">Register</h5>
                </div>
                <div className="row p-0">
                  <div className="cols-5 m-0">
                    <div className="input-group-2 border-lgreen mrr-2 rounded-start">
                      <Input className="fc text-success border-start" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="cols-1 m-0 p-0 border-success">
                    <span className="prr-1">
                      <FontAwesomeIcon icon={faUserCircle} className="text-success faf" />
                    </span>
                  </div>
                  <div className="cols-5 m-0">
                    <div className="input-group-2 border-lgreen mrr-2 rounded-end">
                      <Input className="fc text-success border-start" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                  <div className="input-group border-lgreen mrr-2 rounded">
                    <span className="prr-3">
                    <FontAwesomeIcon icon={faUserCircle} className="text-success faf" />
                    </span>
                    <Input className="fc text-success border-start" placeholder="username" />
                  </div>
                  <div className="input-group border-lgreen mrr-2 rounded">
                    <span className="prr-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-success faf" />
                    </span>
                    <Input className="fc text-success border-start" placeholder="email" />
                  </div>
                  <div className="input-group border-lgreen mrr-2 rounded">
                    <span className="prr-3">
                    <FontAwesomeIcon icon={faKey} className="text-success faf" />
                    </span>
                    <Input className="fc text-success border-start" type="password" placeholder="password" />
                  </div>
                  <div className="input-group border-lgreen mrr-2 rounded">
                    <span className="prr-3">
                    <FontAwesomeIcon icon={faKey} className="text-success faf" />
                    </span>
                    <Input className="fc text-success border-start" type="password" placeholder="confirm password" />
                  </div>
                </div>
                <Button className="btn btn-lgreen m-2 rounded" label={"Daftar"} style={{width: "50%"}} />
                <p className="font-weight-lighter">
                  Sudah punya akun? Masuk <Link to="/login" className="links text-lgreen">disini</Link>
                </p>
            </div>
          </div>
          <div className="col-6 bg-lgreen kol-2">
            <div className="row h-100 d-flex align-items-center justify-content-center">
              <div id="carouselBasicExample" class="h-50 d-flex align-items-center carousel slide col-8" data-bs-ride="carousel">
                <ol class="carousel-indicators mt-2">
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="2"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="3"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="4"></li>
                  <li data-bs-target="#carouselBasicExample" data-bs-slide-to="5"></li>
                </ol>
                <div class="carousel-inner h-100 align-items-end d-flex">
                  <div class="carousel-item active">
                    <FontAwesomeIcon icon={faKey} className="text-light fan" />
                    <div class="mt-10 text-light">
                      <h5>Setoran Hafalan</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-light fan" />
                    <div class="mt-10 text-light">
                      <h5>Hutang Hafalan</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-light fan" />
                    <div class="mt-10 text-light">
                      <h5>Perizinan Gadget</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-light fan" />
                    <div class="mt-10 text-light">
                      <h5>Pelanggaran dan Poin Siswa</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-light fan" />
                    <div class="mt-10 text-light">
                      <h5>Laundry</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <FontAwesomeIcon icon={faKey} className="text-light fan" />
                    <div class="mt-10 text-light">
                      <h5>Laporan Siswa</h5>
                      <div className="text-center">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselBasicExample"
                  role="button"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
