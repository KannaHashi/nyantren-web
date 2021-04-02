import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faPenSquare, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Background from './../../bg1.jpg'
import Camera from './../../cameraSimple.png'
import $ from 'jquery'

class Profile extends Component {
   render(){
      const DisplayEditPP = () => {
         $('.ppProfile-3').css({'display': 'block'})
         // $('.ppProfile-3').fadeIn(500)
      }
      const HideEditPP = () => {
         $('.ppProfile-3').css({'display': 'none'})
         // $('.ppProfile-3').fadeOut(400)
      }
      return(
         <React.Fragment>
            <div className="container-fluid h-100 p-0 w-100 overflow-hidden">
               <div className="row h-100">
                  <div className="col-3 border-end py-self-5">
                     <div className="row justify-content-center">
                        <h3>Profil User</h3>
                     </div>
                     <div className="row justify-content-end py-self-20">
                        <div className="col-9">
                           <ul className="list-group list-group-flush text-start">
                              <li className="list-group-item">
                                 <h6>Info User</h6>
                              </li>
                              <li className="list-group-item">
                                 <h6>Info User</h6>
                              </li>
                              <li className="list-group-item">
                                 <h6>Info User</h6>
                              </li>
                              <li className="list-group-item">
                                 <h6>Info User</h6>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-9 d-flex align-items-center px-self-10">
                     <div className="container">
                        <div className="row justify-content-start w-100">
                           <div className="col-3 justify-content-start">
                              <img src={Background} alt="" className="img-thumbnail border-0 rounded-circle p-0 ppProfile-2 shadow-lg-solid" onMouseEnter={DisplayEditPP} onMouseLeave={HideEditPP} />
                              <label htmlFor="pp" className="pointer">
                                 <img src={Camera} alt="" className="position-absolute translate-edit img-thumbnail border-0 rounded-circle p-0 ppProfile-3"/>
                              </label>
                              <input type="file" name="pp" id="pp" className="d-none" />
                              {/* <span className="position-absolute translate-middle-2 top-50 badge rounded-pill bg-lgreen p-3">
                                 <FontAwesomeIcon icon={faPen} />
                              </span> */}
                           </div>
                           <div className="col-9 text-start d-flex align-items-center justify-content-start">
                              <div className="row">
                                 <h4 className="text-dark">Nanoka</h4>
                                 <small className="text-muted">New York, USA</small>
                              </div>
                           </div>
                        </div>
                        <div className="row w-100 d-flex align-items-center mt-self-7">
                           <div className="col text-start px-4">
                              <div className="my-5">
                                 <label htmlFor="username" className="form-label text-12 text-secondary m-2">Username</label>
                                 <input type="text" id="username" className="form-control form-p-1 text-15"/>
                              </div>
                              <div className="my-5">
                                 <label htmlFor="newpassword" className="form-label text-12 text-secondary m-2">Password Baru</label>
                                 <input type="password" id="newpassword" className="form-control form-p-1 text-15"/>
                              </div>
                           </div>
                           <div className="col text-start px-4">
                              <div className="my-5">
                                 <label htmlFor="email" className="form-label text-12 text-secondary m-2">Email</label>
                                 <input type="email" id="email" className="form-control form-p-1 text-15"/>
                              </div>
                              <div className="my-5">
                                 <label htmlFor="k_password" className="form-label text-12 text-secondary m-2">Konfirmasi Password Baru</label>
                                 <input type="password" id="k_password" name="k_password" className="form-control form-p-1 text-15"/>
                              </div>
                           </div>
                        </div>
                        <div className="row px-3">
                           <div className="col-12-lg justify-content-center text-start">
                                 <label htmlFor="password" className="form-label text-12 text-muted m-2">Konfirmasi Perubahan</label>
                              <div className="input-group shadow-sm-solid w-95">
                                 <input type="password" className="form-control form-p-2 text-15"/>
                                 <button className="btn btn-primary">Simpan</button>
                              </div>
                           <small className="text-muted">Note : Jika Anda Yakin Ingin Mengubah Data, Silahkan Masukkan Password Yang Anda Gunakan Saat Ini</small>
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

export default Profile;