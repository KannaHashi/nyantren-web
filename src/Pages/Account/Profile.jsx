import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Background from './../../bg1.jpg'
import Forever from './../../forever_.png'
// import Dark from '../darken.jpg'
// import Mq from './../bukitMq.jpg'
import $ from 'jquery'
import EditSantri from "../Edit Profile/EditSantri";
import EditGuru from "../Edit Profile/EditGuru";
import EditMusyrif from "../Edit Profile/EditMusyrif";
import Setoran from "../Data/Hafalan";
import Gadget from "../Gadget";
import Gadgets from "../Data/Gadgets";

const Profile = () => {
   const [datas, setDatas] = useState([])
   
   let id = localStorage.getItem('id');
   let nama = localStorage.getItem('name');
   let tokens = localStorage.getItem('tokens');
   let rolens = localStorage.getItem('rolens');

   //headers - authorization
   const headers = {
      headers: {
        Authorization: `Bearer ${tokens}`
      }
   }

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
   const SetoranDisplay = () => {
      $('.setoran_f').removeClass('d-none')
      $('.setoran_f').addClass('d-flex')
   }
   const GadgetDisplay = () => {
      $('.gadget_f').removeClass('d-none')
      $('.gadget_f').addClass('d-flex')
   }
   window.onclick = function(event) {
      var ep = document.getElementById('edit-santri');
      var sf = document.getElementById('setoran_f');
      var g = document.getElementById('gadget_f');
      if (event.target == ep) {
         $('#edit-santri').addClass('d-none')
         $('#edit-santri').removeClass('d-flex')
      } else if (event.target == sf) {
         $('#setoran_f').addClass('d-none')
         $('#setoran_f').removeClass('d-flex')
      } else if (event.target == g) {
         $('#gadget_f').addClass('d-none')
         $('#gadget_f').removeClass('d-flex')
      }
   }
   return(
      <React.Fragment>
         <div className="container-fluid h-100 w-100 position-fixed justify-content-center top-0 bg-light-2 d-none edit-santri" id="edit-santri" style={{zIndex: '10'}}>
            {(rolens === "santri") ? <EditSantri /> : rolens === "guru" ? <EditGuru /> : <EditMusyrif />}
         </div>
         <div className="container-fluid h-100 w-100 position-fixed justify-content-center d-none top-0 bg-light-2 setoran_f" id="setoran_f" style={{zIndex: '10'}}>
            <Setoran />
         </div>
         <div className="container-fluid h-100 w-100 position-fixed justify-content-center d-none top-0 bg-light-2 gadget_f" id="gadget_f" style={{zIndex: '10'}}>
            <Gadgets />
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
         <div className="container-fluid h-100 p-0 w-100 overflow-hidden">
            <nav className="navbar navbar-expand-sm bg-black-4 navbar-light position-absolute w-100 py-3" style={{zIndex: "1"}}>
               <div className="container-fluid justify-content-start">
                  <div className="row py-0 px-5">
                     <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                           <Link to="/" className="links text-white link-opacity-6 text-10">Home</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <div className="row h-80">
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
                                    {nama}
                                 </h3>
                                 <p className="text-secondary">
                                    {rolens}
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
            <div className="row h-100 px-5">
               <div className="col-6 h-80">
                  <div className="card text-start p-2 pb-0 border-0 rounded bg-lgreen-gradient-start pointer" onClick={SetoranDisplay}>
                     {/* <div className="card-header"></div> */}
                     <div className="card-body text-light">
                        <h5 className="mb-3">Riwayat Setoran</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
               <div className="col-6 h-80">
                  <div className="card text-start p-2 pb-0 border-0 rounded bg-lgreen-gradient-start pointer" onClick={GadgetDisplay}>
                     {/* <div className="card-header"></div> */}
                     <div className="card-body text-light">
                        <h5 className="mb-3">Riwayat Perizinan Gadget</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default Profile;