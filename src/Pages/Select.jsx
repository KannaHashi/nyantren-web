import React from "react";
import { Input, Button } from "../Property/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Select = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{height: "100%"}}>
         <div className="row rheight-100">
            <div className="col-6 bg-lgreen d-flex align-items-center justify-content-center">
                <h3 className="text-light">
                  <Link to="/login" className="links text-light">Masuk</Link>
                </h3>
            </div>
            <div className="col-6 justify-content-center d-flex align-items-center">
                <h3 className="text-lgreen">
                  <Link to="/register" className="links links-lgreen text-lgreen">Daftar</Link>
                </h3>
            </div>
         </div>
      </div>
    </React.Fragment>
  );
};

export default Select;
