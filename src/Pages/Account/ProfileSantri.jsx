import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Background from './../../bg1.jpg'
import Forever from './../../forever_.png'
// import Dark from '../darken.jpg'
// import Mq from './../bukitMq.jpg'
import $ from 'jquery'
import EditSantri from "../Edit Profile/EditSantri";

class ProfileSantri extends Component {
   render(){
      
      const EditDisplay = () => {
         var ep = document.getElementById('editProfile');
         if (ep.style.display == 'flex') {
            $(ep).css({'display': 'none'});
         } else {
            $(ep).css({'display': 'flex'});
         }
      }

      const EditDisplaySantri = () => {
        $('.edit-santri').removeClass('d-none')
        $('.edit-santri').addClass('d-flex')
      }

      window.onclick = function(event) {
         var ep = document.getElementById('edit-santri');
         if (event.target == ep) {
            $('#edit-santri').addClass('d-none')
            $('#edit-santri').removeClass('d-flex')
         }
      }
      
      return(
         <React.Fragment>
         <div className="container-fluid h-100 w-100 position-fixed justify-content-center top-0 bg-light-2 d-none edit-santri" id="edit-santri" style={{zIndex: '10'}}>
            <EditSantri />
         </div>
               <div className="p-4 h-100 w-100 position-fixed align-items-center" id="editProfile">
                  <div className="container">
                     <div className="row justify-content-center d-flex align-items-center">
                        <div className="col-6 card card-body rounded">
                           <div className="row justify-content-center">
                              <div className="col-4 mt-min-8">
                                 <img src={Forever} className="img-thumbnail border-0 rounded-circle" id="ppProfile-2" alt="Profile Picture"/>
                              </div>
                           </div>
                           <div className="row align-items-center d-flex justify-content-center">
                              <div className="col-8 h-100">
                                 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            <div className="container-fluid h-80 p-0 w-100 overflow-hidden">
               <nav className="navbar navbar-expand-sm bg-black-4 navbar-light position-absolute w-100 py-3" style={{zIndex: "1"}}>
                  <div className="container-fluid justify-content-start">
                     <div className="row py-0 px-5">
                        <ul className="navbar-nav">
                           <li className="nav-item mx-3">
                              <Link to="/" className="links text-white link-opacity-6 text-10">Home</Link>
                           </li>
                           <li className="nav-item mx-3">
                              <Link to="/dashboard" className="links text-white link-opacity-6 text-10">Dashboard</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>
               <div className="row h-100">
                  <div className="col-12-lg h-100 p-0">
                     <div className="d-flex align-items-end h-60" id="profile-head">
                        <div className="row mb-min-5 w-100">
                           <div className="col-4 justify-content-end">
                              <img src={Forever} className="img-thumbnail float-end border-0 p-0" id="ppProfile" alt=""/>
                           </div>
                           <div className="col-8 text-start p-4">
                              <div className="row">
                                 <div className="col-4">
                                    <h3 className="text-white">
                                       A. Khaidir Muktamar
                                    </h3>
                                    <p className="text-secondary">
                                       Santri
                                    </p>
                                 </div>
                                 <div className="col-8">
                                    <button className="btn btn-lgreen p-3" id="editDisplay" onClick={EditDisplaySantri}>Sunting Profil</button>
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

export default ProfileSantri;