import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { faBan, faChevronRight, faInfoCircle, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";

class Gadget extends Component {
   render() {
      return(
         <React.Fragment>
            <div className="container-fluid p-0 overflow-x-hidden">
               <div className="row h-100 justify-content-center px-self-10">
                  <div className="col-12 text-start px-0 py-3">
                     <table className="table table-hover table-light mb-0 w-100 text-12">
                        <thead>
                           <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama</th>
                              <th scope="col">Kelas</th>
                              <th scope="col">Jurusan</th>
                              <th scope="col">Waktu</th>
                              <th scope="col">Alasan</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row" className="py-3">1.</th>
                              <td>A. Khaidir Muktamar</td>
                              <td>XII</td>
                              <td>Rekayasa Perangkat Lunak</td>
                              <td>19:00 - 21:00</td>
                              <td>Mendaftar Universitas</td>
                           </tr>
                           <tr>
                              <th scope="row" className="py-3">2.</th>
                              <td>A. Khaidir Muktamar</td>
                              <td>XII</td>
                              <td>Rekayasa Perangkat Lunak</td>
                              <td>19:00 - 21:00</td>
                              <td>Mendaftar Universitas</td>
                           </tr>
                           <tr>
                              <th scope="row" className="py-3">3.</th>
                              <td>A. Khaidir Muktamar</td>
                              <td>XII</td>
                              <td>Rekayasa Perangkat Lunak</td>
                              <td>19:00 - 21:00</td>
                              <td>Mendaftar Universitas</td>
                           </tr>
                           <tr>
                              <th scope="row" className="py-3">4.</th>
                              <td>A. Khaidir Muktamar</td>
                              <td>XII</td>
                              <td>Rekayasa Perangkat Lunak</td>
                              <td>19:00 - 21:00</td>
                              <td>Mendaftar Universitas</td>
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

export default Gadget;