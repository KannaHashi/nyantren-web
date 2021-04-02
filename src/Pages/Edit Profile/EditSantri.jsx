import React, { Component, useState, useEffect } from "react";
import axios from 'axios'
import logo from "./../../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert';
import { Animated } from "react-animated-css";
import $ from 'jquery'
import { faBan, faChevronRight, faInfo, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import DaftarSantri from "./../../Undraw/undrawDaftarSantri2.svg"
import e from "cors";

const EditSantri = () => {
  const [datas, setDatas] = useState([])
  
  const [teks, setTeks] = useState()
  const [erors, setErors] = useState()
  
  let id = localStorage.getItem('id');
  let nama = localStorage.getItem('name');
  let tokens = localStorage.getItem('tokens');
  let rolens = localStorage.getItem('rolens');

  const [named, setNamed] = useState()

  //headers - authorization
  const headers = {
      headers: {
        Authorization: `Bearer ${tokens}`
      }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    post()
  }

  const post = async (e) => {
    const url = `http://api-nyantren.herokuapp.com/api/post/santri/detail`;
    const payload = {
      name: named
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${tokens}`
      }
    }
    
    console.log(url);
    console.log(payload);
    try {
      let response = await axios.put(url, payload, headers);
      setTeks('Alhamdulillah, Berhasil Ditambahkan!')
      console.log('Alhamdulillah, Berhasil Ditambahkan!')
      setErors('true')
      // console.log(headers);
      // console.log(response);
    } catch {
      setTeks('Subhanallah, Gagal Ditambahkan!')
      setErors('false')
      console.log("Gagal Menambahkan Setoran");
    }
  }

  return(
    <React.Fragment>
        <div className="row h-100 w-80">
          <div className="col-12-lg p-5 h-100 w-100">
            <div className="card h-100 w-100 m-0 justify-content-center">
              {/* <button className="btn position-absolute right-0 top-0" onClick={this.props.Close_Gadget}>
                <FontAwesomeIcon icon={faBan} />
              </button> */}
              <div className="card-body h-100 p-4">
                <div className="container-fluid h-100">
                  <div className="row w-100 my-4 text-center">
                    <h2 className="text-light-1 fw-bold">Edit Profile</h2>
                    <small></small>
                  </div>
                  <div className="row h-100 w-100 m-0">
                    <div className="col-6 h-70 d-flex align-items-center">
                      <div className="row">
                        <img src={DaftarSantri} className="img-thumbnail w-100 border-0" alt="Gadget"/>
                        <small className="mt-3">Ket : klik bagian luar untuk menutup tab</small>
                      </div>
                    </div>
                    <div className="col-6 py-0 h-80">
                      <form action="" className="h-100" onSubmit={onSubmit}>
                        <div className="card text-start bg-light-1 border-0 h-90">
                          <div className="card-body px-4 overflow-y-auto">
                            <div className="my-3">
                              <label htmlFor="name" className="text-10">Nama</label>
                              <input type="text" className="form-control text-12" name="name" id="name" defaultValue={nama} onChange={(e) => {
                                setNamed(e.target.value)
                              }} />
                              <div className="my-1">
                                <small className="alert alert-danger py-1">Bermasalah</small>
                                {/* <input type="checkbox" name="bermasalah" id="bermasalah"/><label htmlFor="bermasalah" className="mx-2 text-10">Bermasalah</label> */}
                              </div>
                            </div>
                            <div className="my-3">
                              <label htmlFor="kelas" className="text-10">Kelas</label>
                              <input type="text" className="form-control text-12" name="kelas" id="kelas" defaultValue="XII" />
                            </div>
                            <div className="my-3">
                              <label htmlFor="kelas" className="text-10">Jurusan</label>
                              <input type="text" className="form-control text-12" name="kelas" id="kelas" value="Rekayasa Perangkat Lunak" readOnly />
                            </div>
                            <div className="my-3">
                              <label htmlFor="kelas" className="text-10">Halaqoh</label>
                              <input type="text" className="form-control text-12" name="kelas" id="kelas" value="Ustad Dzulkifli" readOnly />
                            </div>
                          </div>
                          <div className="card-footer justify-content-end d-flex p-0 border-0">
                            <button className="btn btn-secondary-2 w-100 rounded-bottom" type="submit">Simpan</button>
                          </div>
                        </div>
                      </form>
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

export default EditSantri;