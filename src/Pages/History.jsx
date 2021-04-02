import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { faBan, faChevronRight, faInfoCircle, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";

const History = () => {
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
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <th scope="row">1.</th>
                           <td>A. Khaidir Muktamar</td>
                           <td>XII</td>
                           <td>Rekayasa Perangkat Lunak</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default History;