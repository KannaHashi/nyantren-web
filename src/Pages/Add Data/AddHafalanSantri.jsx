import React, { Component, useState } from "react";
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
import { Button, Input } from './../../Property/Form'
import Gadget from "./../../Undraw/undrawGadget2.svg"
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(loadAnimation);

const AddHafalanSantri = () => {
  const loop_1 = 'loop'
  const db = 'http://api-nyantren.herokuapp.com/api'
  
  const [teks, setTeks] = useState()
  const [erors, setErors] = useState()

  const [user2, setUser] = useState()
  const [surah, setSurah] = useState()
  const [ayatAwal, setAyatAwal] = useState()
  const [ayatAkhir, setAyatAkhir] = useState()
  const [rekaman, setRekaman] = useState()
  
  let nama = localStorage.getItem('name');
  let tokens = localStorage.getItem('tokens');
  let ids = localStorage.getItem('id');
  
  const headers = {
    headers: {
      Authorization: `Bearer ${tokens}`
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    Post();
  };

  const Post = async (e) => {
    const url = `http://api-nyantren.herokuapp.com/api/post/setoranquran`;
    const payload = {
      user_id: ids,
      surah: surah,
      ayat_awal: ayatAwal,
      ayat_akhir: ayatAkhir,
      rekaman: rekaman
    };
    console.log(url);
    console.log(payload);
    try {
      let response = await axios.post(url, payload, headers);
      setTeks('Alhamdulillah, Berhasil Ditambahkan!')
      console.log('Alhamdulillah, Berhasil Ditambahkan!')
      setErors('true')
    } catch {
      setErors('false')
      setTeks('Subhanallah, Gagal Ditambahkan!')
      console.log("Gagal Menambahkan Setoran");
    }
  };
  
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
                <h2 className="text-light-1 fw-bold">Tambah Hafalan Baru</h2>
                <small></small>
              </div>
              <div className="row h-100 w-100 m-0">
                <div className="col-6 h-70 d-flex align-items-center">
                  <div className="row">
                    <img src={Gadget} className="img-thumbnail w-100 border-0" alt="Gadget"/>
                    <small className="text-start mt-3">Ket : klik bagian luar untuk menutup tab</small>
                  </div>
                </div>
                <div className="col-6 py-0 h-80">
                  <form action="" className="h-100" onSubmit={onSubmit}>
                    <div className="card border-0 bg-light-1 text-start h-90">
                      {erors === '' ? null : erors === 'true' ? <div className="position-absolute w-100 rounded-top alert alert-success text-10 my-0 rounded-0" zIndex="20"  >{teks}</div> : erors === 'false' ? <div className="position-absolute w-100 rounded-top alert alert-danger text-10 my-0 rounded-0" zIndex="20"  >{teks}</div> : ''}
                      <div className="card-body px-4 overflow-y-auto">
                        <div className="my-3">
                          <label htmlFor="name" className="text-10 border-bottom w-50">Nama Santri</label>
                          <p> {nama} </p>
                          <div className="my-1">
                            {/* <input type="checkbox" name="bermasalah" id="bermasalah"/><label htmlFor="bermasalah" className="mx-2 text-10">Bermasalah</label> */}
                          </div>
                        </div>
                        <div className="my-3">
                          <label htmlFor="kelas" className="text-10 border-bottom w-15">Kelas</label>
                          <p>XII RPL</p>
                        </div>
                        <div className="my-3">
                          <label htmlFor="surah" className="text-10">Surah</label>
                          <div className="input-group">
                            <input type="text" className="form-control text-12" name="surah" id="surah" placeholder="Surah" autoComplete="off" onChange={(e) => {
                              setSurah(e.target.value)
                            }} />
                          </div>
                        </div>
                        {/* <div className="my-3">
                          <label htmlFor="waktu" className="text-10">Waktu</label>
                            <input type="time" className="form-control" name="waktu" id="waktu"/>
                        </div> */}
                        <div className="my-3">
                          <label htmlFor="ayawl" className="text-10">Ayat</label>
                          <div className="input-group">
                            <input type="number" className="form-control text-12" name="ayawl" id="ayawl" placeholder="dari..." autoComplete="off" maxLength='3'  onChange={(e) => {
                              setAyatAwal(e.target.value)
                            }} />
                            <input type="number" className="form-control text-12" name="ayatakhir" id="ayatakhir" placeholder="sampai..." autoComplete="off"  onChange={(e) => {
                              setAyatAkhir(e.target.value)
                            }} />
                          </div>
                        </div>
                        <div className="my-3">
                          <label htmlFor="rekaman" className="text-10">Rekaman</label>
                          <div className="input-group">
                            <input type="text" className="form-control text-12" name="rekaman" id="rekaman" placeholder="Masukkan link..."  onChange={(e) => {
                              setRekaman(e.target.value)
                            }} />
                            {/* <input type="file" className="form-control" id="rekaman" accept="audio/*" placeholder="Tambahkan file..." readOnly hidden /> */}
                            {/* <label htmlFor="rekaman" className="btn btn-outline-dark text-10 d-flex align-items-center">Upload di <br/> Google Drive</label> */}
                          </div>
                        </div>
                        <a href="https://drive.google.com/drive/folders/1duuLFvZujqNX73UmFeLvfkCUjhTlZpgU?usp=sharing" className="btn btn-outline-info w-70" target="_blank">
                          <div className="row">
                            <div className="col-8">
                              <small className="text-10">
                                Upload di <br/> Google Drive
                              </small>
                            </div>
                            <div className="col-4 border-start d-flex align-items-center justify-content-center">
                              <lord-icon trigger={loop_1} src="/animatedIcons/cloud.json"></lord-icon>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="card-footer justify-content-end d-flex p-0 border-0">
                        <button className="btn btn-secondary-2 w-100 rounded-bottom text-12" type="submit">Tambah</button>
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

export default AddHafalanSantri;