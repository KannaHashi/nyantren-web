import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { faBan, faChevronRight, faInfoCircle, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";

class Santri extends Component {
   // componentDidMount() {
   //    console.log('gassss')
   //    let uriUrl = window.document.URL.split('/');
   //    let dock = document.getElementsByClassName('nav-link');
   //    let coba = {target : null};
   //    // console.log(dock)
   //    for (let index = 0; index < dock.length; index++) {
   //       if (dock[index].dataset['name'] === uriUrl[4].substr(1)) {
   //          coba.target = dock[index];
   //       }
   //    }
   //    this.OpenLink(coba)
   // }

   // OpenLink(e) {
   //    var i, tab, tablink, targetP, tabtitle, title;
   //    tabtitle = ['Santri', 'Musyrif', 'Guru']
   //    tablink = ['crudsantri', 'crudmusyrif', 'crudguru'];
   //    title = document.getElementById('title');
   //    targetP = document.getElementsByClassName('nav-link');
   //    for (let index = 0; index < tablink.length; index++) {
   //       document.getElementById(tablink[index]).style.display = 'none';
   //    }
   //    for (let index = 0; index < 3; index++) {
   //       console.log(tabtitle[index])
   //    }
   //    for (let index = 0; index < tablink.length; index++) {
   //       try {
   //          targetP[index+1].classList.remove('active')
   //       } catch (e) {}
   //    }
   //    if (e.target.dataset['name'] === "crudguru") {
   //       title.innerHTML = "Guru"
   //    } else if (e.target.dataset['name'] === "crudmusyrif") {
   //       title.innerHTML = "Musyrif"
   //    } else {
   //       title.innerHTML = "Santri"
   //    }
   //    console.log(e.target.dataset['name'])
   //    document.getElementById(e.target.dataset['name']).style.display = "block"
   //    e.target.classList.add('active')
   //    tab = document.getElementsByClassName(tab);
   // }
   render() {
      return(
         <React.Fragment>
            <div className="container-fluid">
               <div className="row rowProfile-px h-100">
                  <div className="col-12 text-start px-0 py-3">
                     <table className="table table-hover table-light mb-0 w-100">
                        <thead>
                           <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama</th>
                              <th scope="col">Kelas</th>
                              <th scope="col">Jurusan</th>
                              <th colSpan="3" scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">1.</th>
                              <td>A. Khaidir Muktamar</td>
                              <td>XII</td>
                              <td>Rekayasa Perangkat Lunak</td>
                              <td className="px-0">
                                 <button className="btn btn-danger">
                                    <span className="me-2">
                                       <FontAwesomeIcon icon={faBan} className="" />
                                    </span>
                                    Hapus
                                 </button>
                              </td>
                              <td className="px-0">
                                 <button className="btn btn-outline-warning">
                                    <span className="me-2">
                                       <FontAwesomeIcon icon={faPenSquare} />
                                    </span>
                                    Sunting
                                 </button>
                              </td>
                              <td className="px-0">
                                 <button className="btn btn-outline-primary">
                                    <span className="me-2">
                                       <FontAwesomeIcon icon={faInfoCircle} />
                                    </span>
                                    Detail
                                 </button>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Santri;