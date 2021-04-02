import React, { Component } from "react";
import logo from "./../../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCalendar, faChevronRight, faHome, faInfo, faPenSquare, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../../Wavy_Bus-30_Single-transparent-bg.png"
import Setoran from "./../../Undraw/undrawSetoran1.svg"
import DaftarSantri from "./../../Undraw/undrawDaftarSantri2.svg"
import Gadget from "./../../Undraw/undrawGadget2.svg"
import Welcome from "./../../Undraw/undrawWelcome.svg"
import Permission from "./../../Undraw/undraw_Permission.svg"
import LaporanHafalan from "./../../Undraw/undrawLaporanHafalan.svg"
import FpUpload from './../../freepik_Upload.jpg'
import FpUpload2 from './../../fp_Upload_2.jpg'
import FpUpload3 from './../../fp_Upload_3.png'
import List from './../../fp_List.jpg'
import swal from 'sweetalert';
import { Animated } from "react-animated-css";
import $ from 'jquery'

class Home extends Component {
   render(){
      $(window).click(function(event) {
         var ep = document.getElementById('setorModal');
         if (event.target == ep) {
            $('#setorModal').addClass('d-none')
            // $('#setorModal').fadeOut(500)
            // $(ep).css({'display': 'none'})
            // $('.animate__animated').addClass('animate__bounceOut')
            $('.animate__animated').removeClass('animate__bounceIn')
            // ep.style.display = "none"
         }
      });
      $('#st').scroll(function() {
         if ($(this).scrollTop() < 150) {
            $('#st').addClass('.bg-dark')
         }
      });
      const Welcome_ = () => {
         $(document).scrollTop(0)
      }
      const Today = () => {
         $(document).scrollTop(530)
      }
      const Gadget_ = () => {
         $(document).scrollTop(1370)
      }
      const Santri_ = () => {
         $(document).scrollTop(2290)
      }
      const CollapseSetoran1 = () => {
         $('#collapseSetoran1').slideToggle(300)
         if (!$('#collapseSetoran2').css('display', 'none')) {
            $('#collapseSetoran2').slideUp(300)
         }
      }
      const CollapseSetoran2 = () => {
         $('#collapseSetoran2').slideToggle(300)
         if (!$('#collapseSetoran1').css('display', 'none')) {
            $('#collapseSetoran1').slideUp(300)
         }
      }
      const Setor = () => {
         swal("A wild Pikachu appeared! What do you want to do?", {
            title: "Setor Hafalan Baru",
            text: "nanoka",
            buttons: {
              cancel: "Run away!",
              defeat: true
            },
          })
          .then((value) => {
            switch (value) {
              case "defeat":
                swal("Pikachu fainted! You gained 500 XP!");
                break;
              case "catch":
                swal("Gotcha!", "Pikachu was caught!", "error");
                break;
              case "modal":
                 swal({
                    title: "Setor Hafalan Baru",
                    className: ''
                 })
                break;
              default:
                swal("Got away safely!");
            }
          });          
      }
      const Setor_2 = () => {
         // $('#setorModal').addClass('animate__animated', 'animate__bounceIn')
         $('.animate__animated').addClass('animate__bounceIn')
         // $('.animate__animated').removeClass('animate__bounceOut')
         if ($('#setorModal').css({'display': 'none'})) {  
            $('#setorModal').removeClass('d-none')
         }
      }
      return(
         <React.Fragment>
            {/* <div className="container-fluid d-flex align-items-center h-100 w-100 body-1">
               <div className="row justify-content-end d-flex h-60 w-100"> */}
            <div className="position-fixed w-100 h-100 d-none align-items-center bg-light-2 justify-content-center d-flex" id="setorModal" style={{zIndex: "1"}}>
               <div className="container-fluid h-80 w-80 m-0 p-0">
                  <div className="row w-100 h-100 p-0">
                     <div className="col-12-lg justify-content-center d-flex align-items-center m-0 p-0">
                        <div className="card w-100 h-100 animate__animated">
                           <h1>HAI</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-1 justify-content-center align-items-center d-flex border-end me-3 position-fixed right-scrollbar">
               {/* <div className="card rounded-pill border-0 bg-light-2 m-0 h-60 w-3 ms-self-20 float-end position-absolute" style={{zIndex: '-1'}}></div> */}
               <div className="container me-min-47 justify-content-center rounded-3 py-self-5">
                  <div className="row justify-content-center my-self-5">
                     <div className="col-6 justify-content-center">
                        <span className="badge rounded-pill bg-lgreen py-2 px-3 pointer" onClick={Welcome_}>
                           <FontAwesomeIcon icon={faHome} />
                        </span>
                     </div>
                  </div>
                  <div className="row justify-content-center my-self-5">
                     <div className="col-6 justify-content-center">
                        <span className="badge rounded-pill bg-lblue-1 p-2 py-2 px-3 pointer" onClick={Today}>
                           <FontAwesomeIcon icon={faCalendar} />
                        </span>
                     </div>
                  </div>
                  <div className="row justify-content-center my-self-5">
                     <div className="col-6 justify-content-center">
                        <span className="badge rounded-pill bg-info p-2 py-2 px-3 pointer" onClick={Gadget_}>
                           <FontAwesomeIcon icon={faHome} />
                        </span>
                     </div>
                  </div>
                  <div className="row justify-content-center my-self-5">
                     <div className="col-6 justify-content-center">
                        <span className="badge rounded-pill bg-primary p-2 py-2 px-3 pointer" onClick={Santri_}>
                           <FontAwesomeIcon icon={faHome} />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
               {/* </div>
            </div> */}
            <div className="container-fluid pb-5 px-0 w-100 overflow-x-hidden">
               <div className="row pb-4 justify-content-center px-self-10 pt-self-7 bg-lgreen-3">
                  <div className="row justify-content-between">
                     <div className="cols-6 text-start text-light p-4 align-items-center d-flex default">
                        <div className="row h-100 align-items-center d-flex" id="today">
                           <h1><span className="">Selamat Datang, Khaidir!</span>
                              <h6 className="py-3 text-capitalize" onClick={Today}>Ada beberapa santri yang belum menyetorkan hutang hafalan</h6>
                           </h1>
                        </div>
                     </div>
                     <div className="cols-5 p-3 align-items-center d-flex justify-content-end">
                        <img src={Welcome} className="img-thumbnail border-0 p-0 bg-transparent" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="row text-center py-self-100 mb-2 m-0 px-self-10" style={{height: "50%", position: "static"}}>
                  <div className="col-7 justify-content-center align-items-start d-flex">
                     <img src={FpUpload3} className="img-thumbnail border-0 position-sticky p-0 bg-transparent" alt="upload2"/>
                  </div>
                  <div className="col-5 text-start m-0 overflow-auto align-items-center d-flex">
                     <div className="row">
                        <h1 className="text-lgrey mb-5">Ada Apa Hari Ini?</h1>
                        <div className="row justify-content-between rowProfile-px overflow-y-auto" id="st">
                           <div className="col-12-lg overflow-y-auto mh-100">
                              <div className="pointer" onClick={CollapseSetoran1}>
                                 <h5 className="text-lgrey">Setoran Hari Ini</h5>
                                 <p className="text-lgrey">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                              </div>
                              <div className="row pb-3">
                                 <div className="col-6" id="collapseSetoran1" style={{display: "none"}}>
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2 mb-2">
                                       <p className="m-0">
                                          Rifky Hidayatullah
                                          <small className="text-primary mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Al-Ahqaf : 1 - 35</small>
                                    </div>
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2 mb-2">
                                       <p className="m-0">
                                          Arrizal Bintang
                                          <small className="text-primary mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Al-Ahqaf : 1 - 5</small>
                                    </div>
                                    <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                       <p className="m-0">
                                          Naufal Farros
                                          <small className="text-primary mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Al-Ahqaf : 25 - 39</small>
                                    </div>
                                    <div className="mt-self-4">
                                       <Link to="/history" className="links">Selengkapnya...</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12-lg text-start">
                              <div className="pointer" onClick={CollapseSetoran2}>
                                 <h5 className="text-lgrey">Hutang Setoran</h5>
                                 <p className="text-lgrey">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                              </div>
                              <div className="col-6" id="collapseSetoran2" style={{display: "none"}}>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Rifky Hidayatullah
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 1 - 35</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Arrizal Bintang
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 1 - 5</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Naufal Farros
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 25 - 39</small>
                                 </div>
                                 <div className="mt-self-4">
                                    <Link to="/history" className="links">Selengkapnya...</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row text-center py-self-100 mb-2 m-0 px-self-10 bg-lgreen-3 justify-content-between">
                  <div className="col-5 text-start m-0 d-flex align-items-center kol-2">
                     <div className="row justify-content-center">
                        <h1 className="text-light mb-5">Izin Menggunakan Gadget</h1>
                        <div className="row justify-content-between rowProfile-px overflow-y-auto" id="st">
                           <div className="col-12-lg overflow-y-auto my-2">
                              <div className="pointer" onClick={CollapseSetoran1}>
                                 <h5 className="text-light">Selamat di Dunia</h5>
                                 <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                              </div>
                           </div>
                           <div className="col-12-lg text-start my-2">
                              <div className="pointer" onClick={CollapseSetoran2}>
                                 <h5 className="text-light">Selamat di Akhirat</h5>
                                 <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-5 justify-content-center align-items-start d-flex h-100">
                     <img src={Permission} className="img-thumbnail border-0 p-0 bg-transparent w-100" alt="upload2"/>
                  </div>
               </div>
               <div className="row text-center justify-content-between py-self-100 mb-2 m-0 px-self-10">
                  <div className="col-7 justify-content-center align-items-start d-flex">
                     <img src={List} className="img-thumbnail border-0 position-sticky p-0 bg-transparent" alt="upload2"/>
                  </div>
                  <div className="col-5 text-start m-0 d-flex align-items-center">
                     <div className="row">
                        <h1 className="text-lgrey mb-5">Santri Yang Dihandle</h1>
                        <div className="row justify-content-between rowProfile-px overflow-y-auto" id="st">
                           <div className="col-12-lg overflow-y-auto mh-100">
                              <div className="pointer" onClick={CollapseSetoran1}>
                                 <h5 className="text-lgrey">Siapa yang ingin anda kontrol?</h5>
                                 <p className="text-lgrey">Penampu Halaqoh bisa menambahkan santri yang akan dikontrol pada halaqoh setiap penampu halaqoh. Dengan ini juga penampu halaqoh bisa mengeluarkan santri yang bermasalah dari halaqoh.</p>
                              </div>
                           </div>
                           <div className="col-12-lg text-start">
                              <div className="pointer" onClick={CollapseSetoran2}>
                                 <h5 className="text-lgrey">Hutang Setoran</h5>
                                 <p className="text-lgrey">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                              </div>
                              <div className="col-6" id="collapseSetoran2" style={{display: "none"}}>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Rifky Hidayatullah
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 1 - 35</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Arrizal Bintang
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 1 - 5</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="">
                                       Naufal Farros
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 25 - 39</small>
                                 </div>
                                 <div className="mt-self-4">
                                    <Link to="/history" className="links">Selengkapnya...</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* akses mudah */}
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

export default Home;