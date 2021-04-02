import React, { Component } from "react";
import logo from "./../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert';
import { Animated } from "react-animated-css";
import $ from 'jquery'
import { faBan, faChevronRight, faInfo, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../Wavy_Bus-30_Single-transparent-bg.png"
import Setoran from "./../Undraw/undrawSetoran1.svg"
import DaftarSantri from "./../Undraw/undrawDaftarSantri2.svg"
import Gadget from "./../Undraw/undrawGadget2.svg"
import Welcome from "./../Undraw/undrawWelcome.svg"
import LaporanHafalan from "./../Undraw/undrawLaporanHafalan.svg"
import List from './../fp_List.jpg'
import Loan from './../fp_Loan.jpg'

class Izin extends Component {
  render(){
    return(
      <React.Fragment>
          <div className="row h-100 w-80">
            <div className="col-12-lg p-5 d-flex align-items-center justify-content-center">
              <div className="card border-0">
                <div className="card-header border-0">
                  <h5 className="text-light-1 fw-bold">Izin Memegang Laptop</h5>
                </div>
                <div className="card-body">
                  
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Izin;