import React, { Component } from "react";
import logo from "./../../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert';
import { Animated } from "react-animated-css";
import $ from 'jquery'
import { faBan, faChevronRight, faInfo, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../../Wavy_Bus-30_Single-transparent-bg.png"
import DaftarSantri from "./../../Undraw/undrawDaftarSantri2.svg"

class EditMusyrif extends Component {
  render(){
    return(
      <React.Fragment>
          <div className="row h-100 w-80">
            <div className="col-12-lg p-5 h-100 w-100">
              <div className="card h-100 w-100 m-0 justify-content-center">
                {/* <button className="btn position-absolute right-0 top-0" onClick={this.props.Close_Gadget}>
                  <FontAwesomeIcon icon={faBan} />
                </button> */}
                <div className="card-body h-100 p-4">
                  <div className="container-fluid h-100">
                    <div className="row w-100 my-4 text-center">
                      <h2 className="text-light-1 fw-bold">Edit Profile</h2>
                      <small></small>
                    </div>
                    <div className="row h-100 w-100 m-0">
                      <div className="col-6 h-70 d-flex align-items-center">
                        <div className="row">
                          <img src={DaftarSantri} className="img-thumbnail w-100 border-0" alt="Gadget"/>
                          <small>Ket : klik bagian luar untuk menutup tab</small>
                        </div>
                      </div>
                      <div className="col-6 py-0 h-80">
                        <div className="card text-start h-90">
                          <div className="card-body px-4 overflow-y-auto">
                            <div className="my-3">
                              <label htmlFor="name" className="text-10">Nama</label>
                              <input type="text" className="form-control text-12" name="name" id="name" value="Ustadz Ahlal" />
                            </div>
                            <div className="my-3">
                              <label htmlFor="pendidikan" className="text-10">Pendidikan</label>
                              <input type="text" className="form-control text-12" name="pendidikan" id="pendidikan" value="S1, Sarjana Hukum" readOnly />
                            </div>
                          </div>
                          <div className="card-footer justify-content-end d-flex p-0 border-0">
                            <button className="btn btn-secondary-2 w-100 rounded-bottom">Simpan</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default EditMusyrif;