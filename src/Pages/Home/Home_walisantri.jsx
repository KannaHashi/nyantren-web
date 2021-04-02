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
import Izin from './Izin'
import Gadget_2 from './Addgadget'
import Setoran_2 from './AddHafalan'
import Wavy from "./../Wavy_Bus-30_Single-transparent-bg.png"
import Setoran from "./../Undraw/undrawSetoran1.svg"
import DaftarSantri from "./../Undraw/undrawDaftarSantri2.svg"
import Gadget from "./../Undraw/undrawGadget2.svg"
import Welcome from "./../Undraw/undrawWelcome.svg"
import LaporanHafalan from "./../Undraw/undrawLaporanHafalan.svg"
import List from './../fp_List.jpg'
import Loan from './../fp_Loan.jpg'

class Home_walisantri extends Component {
   componentDidMount() {
      $(document).scrollTop(0)
   }
   componentDidUpdate() {
      $(document).scrollTop(0)
   }
   render(){
      var loan = "asldnalsd";
      $(window).scroll(function () {
         if ($(document).scrollTop() > 150 && $(document).scrollTop() < 980) {
            $('.sidecol').addClass('position-fixed')
            $('.sidecol').addClass('d-flex')
            $('.sidecol').addClass('mt-min-11')
            $('.sidecol').css({'right': '2.6%'})
            $('.sidebox').addClass('w-90')
            $('.sidebox').addClass('h-35')
            $('.sidebox').addClass('overflow-y-auto')
            $('.sidecol').removeClass('align-items-end')
         } else if ($(document).scrollTop() > 980) {
            $('.sidecol').addClass('align-items-end')
            $('.sidebox').removeClass('w-90')
            $('.sidecol').removeClass('position-fixed')
            $('.sidebox').removeClass('h-35')
            $('.sidebox').removeClass('overflow-y-auto')
         } else if ($(document).scrollTop() < 150) {
            $('.sidebox').removeClass('h-35')
            $('.sidebox').removeClass('overflow-y-auto')
            $('.sidecol').removeClass('d-flex')
            $('.sidebox').removeClass('w-90')
            // $('.sidebox').removeClass('position-fixed')
            // $('.sidecol').addClass('d-flex')
            // $('.sidebox').removeClass('align-items-center')
            // $('.sidebox').addClass('mb-3')
            $('.sidecol').removeClass('position-fixed')
            // $('.sidebox').removeClass('d-flex')
            $('.sidecol').removeClass('d-flex')
            $('.sidecol').removeClass('align-items-end')
            // $('.sidebox').removeClass('align-items-center')
            $('.sidecol').removeClass('mt-min-11')
            $('.sidecol').css({'right': '0'})
         // } else {
         }
      });

      $(window).click(function(event) {
         var ep = document.getElementById('gadget-f');
         var izin = document.getElementById('izin-f');
         var setoran = document.getElementById('setoran-f')
         if (event.target == ep) {
            $('#gadget-f').addClass('d-none')
            $('#gadget-f').removeClass('d-flex')
         } else if (event.target == setoran) {
            $('#setoran-f').addClass('d-none')
            $('#setoran-f').removeClass('d-flex')
         }
      });

      const Setoran_ = () => {
         $(document).scrollTop(200)
      }
      const Gadget_ = () => {
         $(document).scrollTop(800)
      }
      const Santri_ = () => {
         $(document).scrollTop(1300)
      }

      const Gadget_F = () => {
         $('.gadget-f').removeClass('d-none')
         $('.gadget-f').addClass('d-flex')
      }
      const Setoran_F = () => {
         $('.setoran-f').removeClass('d-none')
         $('.setoran-f').addClass('d-flex')
      }
      const Close_Gadget = () => {
         $('.gadget-f').addClass('d-none')
         $('.gadget-f').removeClass('d-flex')
      }

      return(
         <React.Fragment>
            <div className="container-fluid h-100 w-100 position-fixed justify-content-center d-none top-0 bg-light-2 izin-f" id="izin-f" style={{zIndex: '10'}}>
               <Izin />
            </div>
            <div className="container-fluid h-100 w-100 position-fixed justify-content-center top-0 bg-light-2 d-none gadget-f" id="gadget-f" style={{zIndex: '10'}}>
               <Gadget_2 />
            </div>
            <div className="container-fluid h-100 w-100 position-fixed justify-content-center top-0 bg-light-2 d-none setoran-f" id="setoran-f" style={{zIndex: '10'}}>
               <Setoran_2 />
            </div>
            <div className="container-fluid pb-5 px-self-5">
               <div className="row justify-content-between text-center rowProfile-px py-4 mb-2 h-100">
                  <div className="col-9 m-0 h-100">
                     <div className="row rowProfile-px pb-4">
                        <div className="card p-4 bg-lgreen-gradient-start border-0 rounded shadow">
                           <div className="card-body p-0">
                              <div className="row">
                                 <div className="cols-6 text-start text-light p-4 align-items-center d-flex">
                                    <div className="row h-100">
                                       <h4>Selamat Datang, Guest!</h4>
                                       <p className="py-0">Semoga Cepat Besar!</p>
                                    </div>
                                 </div>
                                 <div className="cols-5 p-3 align-items-center d-flex">
                                    {/* <img id="egretIcon" src="http://egret-react.ui-lib.com/assets/images/illustrations/designer.svg" alt=""/> */}
                                    <img src={Welcome} className="w-100 mt-min-40" alt="Welcome Sign" style={{zIndex: "2"}} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row justify-content-between rowProfile-px my-3" id="st">
                        <div className="col-7 px-2 justify-content-start">
                           <div className="card border p-0 shadow-sm">
                              <div className="card-header alert alert-success border-0 text-start">
                                 <h5 className="">Setoran Hafalan</h5>
                              </div>
                              <div className="card-body text-start px-4">
                                 <div className="card p-0 border-start border-info-secondary border-4 rounded-0">
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                       <p className="">
                                          Rifky Hidayatullah
                                          <small className="text-lgreen mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Sunday, 20 Feb - 13:20</small>
                                    </div>
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                       <p className="">
                                          Arrizal Bintang
                                          <small className="text-lgreen mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Sunday, 20 Feb - 13:20</small>
                                    </div>
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                       <p className="">
                                          Naufal Farros
                                          <small className="text-lgreen mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Sunday, 20 Feb - 13:20</small>
                                    </div>
                                 </div>
                                 <div className="mt-self-10 row rounded bg-lgreen-gradient-start h-10">
                                    {/* <div className="col-6 p-0 m-0 text-center justify-content-center d-flex">
                                       <Link to="/history" className="links m-0 p-0">
                                       <button className="btn text-light py-2 d-flex align-items-center px-3">
                                       <small>Tambah Persetujuan</small>
                                       <span className="ms-2 d-flex align-items-center">
                                       <FontAwesomeIcon icon={faPlusCircle} className="text-20" />
                                       </span>
                                       </button>
                                       </Link>
                                    </div> */}
                                 </div>
                              </div>
                              <div className="card-footer bg-lgreen-gradient-start border-0 p-0 m-0">
                                 <div className="btn-group w-100">
                                    <Link to="/history" className="links links-light btn btn-secondary-2 rounded-bottom px-2 py-3 text-center w-100 h-100">
                                       <small>Lihat Riwayat</small>
                                       <span className="ms-2 d-flex align-items-center"></span>
                                    </Link>
                                    <button className="links links-light btn btn-secondary-2 rounded-bottom px-0 py-3 text-center w-100 h-100" onClick={Setoran_F}>
                                       <small>Tambah Hafalan Baru</small>
                                       <span className="ms-2 d-flex align-items-center"></span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-5 px-2">
                           <div className="card border border-pink shadow-sm h-100">
                              <div className="card-header border-0 alert alert-danger text-start">
                                 <h5>Hutang Setoran</h5>
                              </div>
                              <div className="card-body text-start px-4">
                                 <div className="card p-0 border-start border-danger border-4 rounded-0">
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                       <p className="">
                                          Arkan Adil
                                          <small className="text-danger mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">28 Januari</small>
                                    </div>
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                       <p className="">
                                          Fityan Ilham
                                          <small className="text-danger mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">02 Februari</small>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row mx-self-1 mt-self-4 py-self-5 px-self-5 text-light-1 justify-content-between" id="santri">
                        <div className="col-7 p-0 justify-content-start d-flex align-items-center pe-2">
                           <img src={Loan} className="img-thumbnail border-0 bg-transparent w-100" alt="Gambar"/>
                        </div>
                        <div className="col-5 p-0 justify-content-end text-start px-2">
                           <h2 className="text-light-1 fw-bold text-start">Perizinan Gadget</h2>
                           <div className="my-self-4 row">
                              <div className="card p-0 border-0 rounded-0">
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Rifky Hidayatullah
                                       <small className="text-info mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Sunday, 20 Feb - 13:20 <br/> <span className="fw-bold">Mendaftar Universitas</span></small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Arrizal Bintang
                                       <small className="text-info mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Sunday, 20 Feb - 13:20 <br/> <span className="fw-bold">Mendaftar Universitas</span></small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Naufal Farros
                                       <small className="text-info mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Sunday, 20 Feb - 13:20 <br/><span className="fw-bold">Mendaftar Universitas</span></small>
                                 </div>
                              </div>
                           </div>
                           <div className="row justify-content-start">
                              <div className="btn-group">
                                 <Link to="/gadget" className="btn btn-secondary-2 rounded-end rounded-pill border-0 px-4 py-3 w-70">
                                    <small>
                                       Lihat Perizinan
                                    </small>
                                 </Link>
                                 <button className="btn btn-secondary-2 rounded-start rounded-pill border-0 px-4 py-3 w-70" onClick={Gadget_F}>
                                    <small>
                                       Tambah Izin
                                    </small>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row mx-self-1 mt-self-4 py-self-5 px-self-5 text-light-1" id="santri">
                        <div className="col-5 p-0 justify-content-end text-start">
                           <h2 className="text-light-1 fw-bold">Santri Yang Dihandle</h2>
                           <div className="my-self-4 row">
                              <div className="card p-0 border-0 rounded-0">
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Rifky Hidayatullah
                                       <small className="text-info mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Rekayasa Perangkat Lunak, XII</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Arrizal Bintang
                                       <small className="text-info mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Rekayasa Perangkat Lunak, XII</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Naufal Farros
                                       <small className="text-info mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Rekayasa Perangkat Lunak, XII</small>
                                 </div>
                              </div>
                           </div>
                           <div className="row justify-content-start">
                              <Link to="/santri" className="btn btn-secondary-2 rounded-pill border-0 px-4 py-3 w-70">
                                 Lihat Daftar Santri
                              </Link>
                           </div>
                        </div>
                        <div className="col-7 p-0 justify-content-center d-flex align-items-center">
                           <img src={List} className="img-thumbnail border-0 bg-transparent w-100" alt="Gambar"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-3 px-3 h-100 sidecol">
                     {/* <div className="h-100 sidecol"> */}
                        <div className="card sidebox" style={{transition: "0.4s"}} >
                           <div className="card-body p-2">
                              <div className="card bg-light justify-content-center p-5" style={{verticalAlign: "middle"}}>
                                 <p className="text-secondary my-3">
                                    Anda Login Sebagai :
                                 </p>
                                 <h5 className="text-success">
                                    Musyrif
                                 </h5>
                                 <Link to="/profile" className="links text-btn-white mt-3 p-2 btn btn-lgreen d-flex align-self-center justify-content-center">
                                    Lihat Profil
                                 </Link>
                              </div>
                              <div className="text-start my-3">
                                 <div className="card bg-transparent text-light-1 border-0 p-0">
                                    <div className="links pointer link-secondary list-fitur pe-2" onClick={Setoran_}>
                                       <div className="row">
                                          <div className="col-3 d-flex align-items-center justify-content-center">
                                             <FontAwesomeIcon icon={faVrCardboard} />
                                          </div>
                                          <div className="col-9">
                                             <h6 className="">Setoran Hafalan</h6>
                                             <small className="text-capitalize">Mengontrol Setoran dan Murojaah Hafalan Santri</small>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="links pointer link-secondary list-fitur pe-2" onClick={Gadget_}>
                                       <div className="row">
                                          <div className="col-3 d-flex align-items-center justify-content-center">
                                             <FontAwesomeIcon icon={faVrCardboard} />
                                          </div>
                                          <div className="col-9">
                                             <h6 className="">Perizinan Gadget</h6>
                                             <small className="text-capitalize">Memberikan izin kepada santri yang meminjam laptop diluar waktu kbm</small>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="links pointer link-secondary list-fitur pe-2" onClick={Santri_}>
                                       <div className="row">
                                          <div className="col-3 d-flex align-items-center justify-content-center">
                                             <FontAwesomeIcon icon={faVrCardboard} />
                                          </div>
                                          <div className="col-9">
                                             <h6 className="">Santri Yang Dihandle</h6>
                                             <small className="text-capitalize">Mengontrol Hafalan dan Kehidupan Santri</small>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="links pointer link-secondary list-fitur pe-2" onClick={Santri_}>
                                       <div className="row">
                                          <div className="col-3 d-flex align-items-center justify-content-center">
                                             <FontAwesomeIcon icon={faVrCardboard} />
                                          </div>
                                          <div className="col-9">
                                             <h6 className="">Santri Yang Dihandle</h6>
                                             <small className="text-capitalize">Mengontrol Hafalan dan Kehidupan Santri</small>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="links pointer link-secondary list-fitur pe-2" onClick={Santri_}>
                                       <div className="row">
                                          <div className="col-3 d-flex align-items-center justify-content-center">
                                             <FontAwesomeIcon icon={faVrCardboard} />
                                          </div>
                                          <div className="col-9">
                                             <h6 className="">Santri Yang Dihandle</h6>
                                             <small className="text-capitalize">Mengontrol Hafalan dan Kehidupan Santri</small>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     {/* </div> */}
                  </div>
               </div>
            </div>
            <div className="container-fluid bg-lgreen-gradient-start w-100">
               <div className="row justify-content-center">
                  <div className="col-12-lg py-2">
                     <nav className="navbar navbar-expand-sm justify-content-center">
                        <ul className="navbar-nav justify-content-center row">
                           <li className="col-6 justify-content-end nav-item px-3 pointer text-white">
                              <a href="https://github.com/Kesantrian-App" className="links text-white">
                                 <div className="row p-0 mx-1">
                                    <div className="col-10 p-0 text-end">
                                       <small>Nyantren App</small>
                                    </div>
                                    <div className="col-2 links">
                                       <FontAwesomeIcon icon={faGithub} className="text-15" />
                                    </div>
                                 </div>
                              </a>
                           </li>
                           <li className="col-6 border-start border-white nav-item px-3 pointer text-white">
                              <div className="row">
                                 <div className="col-1 links me-2">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="text-15" />
                                 </div>
                                 <div className="col-10">
                                    <small>khaidirmuktamar234@gmail.com</small>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-8 py-2 text-center border-top">
                     <small className="text-white">Copyright &copy; Nyantren 2021</small>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Home_walisantri;