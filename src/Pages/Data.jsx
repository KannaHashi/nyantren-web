import React, {Component} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowLeft, faKey, faUserCircle, faHome, faChevronRight, faBan, faPenSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Data extends Component {
   componentDidMount() {
      console.log('gassss')
      let uriUrl = window.document.URL.split('/');
      let dock = document.getElementsByClassName('nav-link');
      let coba = {target : null};
      // console.log(dock)
      for (let index = 0; index < dock.length; index++) {
         if (dock[index].dataset['name'] === uriUrl[4].substr(1)) {
            coba.target = dock[index];
         }
      }
      this.OpenLink(coba)
   }

   OpenLink(e) {
      var i, tab, tablink, targetP, tabtitle, title;
      tabtitle = ['Santri', 'Musyrif', 'Guru']
      tablink = ['crudsantri', 'crudmusyrif', 'crudguru'];
      title = document.getElementById('title');
      targetP = document.getElementsByClassName('nav-link');
      for (let index = 0; index < tablink.length; index++) {
         document.getElementById(tablink[index]).style.display = 'none';
      }
      for (let index = 0; index < 3; index++) {
         console.log(tabtitle[index])
      }
      for (let index = 0; index < tablink.length; index++) {
         try {
            targetP[index+1].classList.remove('active')
         } catch (e) {}
      }
      if (e.target.dataset['name'] === "crudguru") {
         title.innerHTML = "Guru"
      } else if (e.target.dataset['name'] === "crudmusyrif") {
         title.innerHTML = "Musyrif"
      } else {
         title.innerHTML = "Santri"
      }
      console.log(e.target.dataset['name'])
      document.getElementById(e.target.dataset['name']).style.display = "block"
      e.target.classList.add('active')
      tab = document.getElementsByClassName(tab);
   }
   render() {
      return(
         <React.Fragment>
            <div className="container-fluid">
               <div className="row rowProfile-px h-100">
                  <nav aria-label="breadcrumb" className="bc">
                     <ol className="breadcrumb">
                        <li className="mx-1 breadcrumb-item" aria-current="page">Home</li>
                        <li className="mx-1">
                           <FontAwesomeIcon icon={faChevronRight} />
                        </li>
                        <li className="mx-1 breadcrumb-item" aria-current="page">
                           <Link to="/" className="links">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                     </ol>
                  </nav>
                  <div className="col-12 text-start px-0 py-3">
                     <div className="card shadow border-0 rounded">
                        <div className="card-header p-self-5 pb-0 border-0 bg-lgreen-gradient-start text-light">
                           <div className="row p-0 justify-content-between w-100 m-0">
                              <ul className="nav nav-tabs border-0 nav-responsive">
                                 <li className="nav-item ms-self-4">
                                    <h5 id="title" className="pb-2">Santri</h5>
                                 </li>
                              </ul>
                              <ul className="nav nav-tabs border-0 d-flex justify-content-end nav-responsive" id="navtab">
                                 <li className="nav-item of-0">
                                    <a href="#crudsantri" onClick={this.OpenLink} data-name="crudsantri" className="nav-link links active pointer of-0" aria-current="page">Santri</a>
                                 </li>
                                 <li className="nav-item of-0">
                                    <a href="#crudmusyrif" onClick={this.OpenLink} data-name="crudmusyrif" className="nav-link links pointer of-0" aria-current="page">Musrip</a>
                                 </li>
                                 <li className="nav-item of-0">
                                    <a href="#crudguru" onClick={this.OpenLink} data-name="crudguru" className="nav-link links pointer of-0" aria-current="page">Guru</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="card-body px-0 pb-0 tab" id="crudsantri">
                           <table className="table table-hover mb-0">
                              <thead>
                                 <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Kelas</th>
                                    <th scope="col">Jurusan</th>
                                    <th colSpan="3">Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1.</th>
                                    <td>A. Khaidir Muktamar</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2.</th>
                                    <td>Abdullah Said Mustaqim</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3.</th>
                                    <td>Arrizal Bintang Ramadhan</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">4.</th>
                                    <td>Mohammad Rifky Hidayatullah</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">5.</th>
                                    <td>Muhammad Giri Sultan Athallah</td>
                                    <td>XII</td>
                                    <td>Teknik Komputer dan Jaringan</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6.</th>
                                    <td>M. Naufal Farros</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">7.</th>
                                    <td>Ridwan Firdaus</td>
                                    <td>XII</td>
                                    <td>Teknik Komputer dan Jaringan</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">8.</th>
                                    <td>Yusuf M. Edward</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className="card-body px-0 pb-0 tab" style={{display: "none"}} id="crudmusyrif">
                           <table className="table table-hover mb-0">
                              <thead>
                                 <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Kelas</th>
                                    <th scope="col">Jurusan</th>
                                    <th colSpan="3">Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1.</th>
                                    <td>A. Khaidir Muktamar</td>
                                    <td>XII</td>
                                    <td>Musrip</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2.</th>
                                    <td>Abdullah Said Mustaqim</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3.</th>
                                    <td>Arrizal Bintang Ramadhan</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">4.</th>
                                    <td>Mohammad Rifky Hidayatullah</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">5.</th>
                                    <td>Muhammad Giri Sultan Athallah</td>
                                    <td>XII</td>
                                    <td>Teknik Komputer dan Jaringan</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6.</th>
                                    <td>M. Naufal Farros</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">7.</th>
                                    <td>Ridwan Firdaus</td>
                                    <td>XII</td>
                                    <td>Teknik Komputer dan Jaringan</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">8.</th>
                                    <td>Yusuf M. Edward</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className="card-body px-0 pb-0 tab" style={{display: "none"}} id="crudguru">
                           <table className="table table-hover mb-0">
                              <thead>
                                 <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Kelas</th>
                                    <th scope="col">Jurusan</th>
                                    <th colSpan="3">Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1.</th>
                                    <td>A. Khaidir Muktamar</td>
                                    <td>XII</td>
                                    <td>Guru</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2.</th>
                                    <td>Abdullah Said Mustaqim</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3.</th>
                                    <td>Arrizal Bintang Ramadhan</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">4.</th>
                                    <td>Mohammad Rifky Hidayatullah</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">5.</th>
                                    <td>Muhammad Giri Sultan Athallah</td>
                                    <td>XII</td>
                                    <td>Teknik Komputer dan Jaringan</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6.</th>
                                    <td>M. Naufal Farros</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">7.</th>
                                    <td>Ridwan Firdaus</td>
                                    <td>XII</td>
                                    <td>Teknik Komputer dan Jaringan</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                                 <tr>
                                    <th scope="row">8.</th>
                                    <td>Yusuf M. Edward</td>
                                    <td>XII</td>
                                    <td>Rekayasa Perangkat Lunak</td>
                                    <td>
                                       <button className="btn btn-danger">
                                          <FontAwesomeIcon icon={faBan} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-warning">
                                          <FontAwesomeIcon icon={faPenSquare} />
                                       </button>
                                    </td>
                                    <td>
                                       <button className="btn btn-outline-primary">
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </button>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Data;