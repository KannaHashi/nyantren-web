import React, { Component, useEffect, useRef, useState } from "react";
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
import LoanGadget from "./../../Undraw/undrawLoan.svg"

const Addgadgetsantri = () => {
  const formRef = useRef();
  const time = '';

  let d = new Date();

  let nama = localStorage.getItem('name');
  let tokens = localStorage.getItem('tokens');
  let id = localStorage.getItem('id');

  const [teks, setTeks] = useState()
  const [erors, setErors] = useState()
  
  const [fTime, setfTime] = useState([]);
  const [sTime, setsTime] = useState([]);
  
  const [alasan, setAlasan] = useState();
  const [waktu, setWaktu] = useState();
  const [tanggal, setTanggal] = useState();
  const [gadget, setGadget] = useState();
  
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
  var tsh, tsm, tdh, tdm;
  tsh = sTime[0];
  tsm = sTime[1];
  tdh = fTime[0];
  tdm = fTime[1];
  
  const kelas = useRef();
  
  // useEffect(() => {
    //   console.log(tokens);
    // })
    
    const onSubmit = (e) => {
      e.preventDefault();
      let today = Date.now()
      setTanggal(d.getDate() + '-' + ((d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`) + '-' + d.getFullYear())
      const datae = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(d)
      console.log(datae)
      // console.log(formRef.current['l'].checked);
    if (formRef.current['l'].checked === true && formRef.current['h'].checked === true) {
      setGadget('Laptop & Handphone');
      } else if (formRef.current['l'].checked === true && formRef.current['h'].checked === false) {
        setGadget('Laptop');
      } else if (formRef.current['h'].checked === true && formRef.current['l'].checked === false) {
        setGadget('Handphone');
      } else {
        setGadget('Tidak Ada Pilihan')
      }
      console.log(formRef.current['l'].checked);
      console.log(gadget);
      Post();
    }
    
    const Post = async (e) => {
      const url = `http://api-nyantren.herokuapp.com/api/post/peminjaman`;
      const payload = {
        user_id: id,
        waktu_peminjaman: waktu,
        alasan: alasan,
        tanggal_peminjaman: tanggal,
        gadget: gadget
      };
      const headers = {
        headers: {
          Authorization: `Bearer ${tokens}`
        }
      }
      
      console.log(url);
      console.log(payload);
      try {
        let response = await axios.post(url, payload, headers);
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
                    <h2 className="text-light-1 fw-bold">Izin Memegang Gadget</h2>
                    <small></small>
                  </div>
                  <div className="row h-100 w-100 m-0">
                    <div className="col-6 h-70 d-flex align-items-center">
                      <div className="row">
                        <img src={LoanGadget} className="img-thumbnail w-80 border-0" alt="Gadget"/>
                        <small>Ket : klik bagian luar untuk menutup tab</small>
                      </div>
                    </div>
                    <div className="col-6 py-0 h-80">
                      {/* {Teksting} */}
                      <form action="" className="h-100" onSubmit={onSubmit} ref={formRef}>
                        <div className="card text-start bg-light-1 border-0 h-90">
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
                              <div className="input-group">
                                <label htmlFor="laptop" className="text-10">Laptop</label>
                                <input type="checkbox" className="mx-2" id="laptop" value="Laptop" name="l" />
                                <label htmlFor="handphone" className="text-10">Handphone</label>
                                <input type="checkbox" className="mx-2" id="handphone" value="Handphone" name="h" />
                              </div>
                              {/* <label htmlFor="lapon" className="text-10">Laptop & Handphone</label>
                              <input type="checkbox" className="mx-2" id="lapon" value="Laptop & Handphone" /> */}
                            </div>
                            <div className="my-3">
                              <label htmlFor="waktu" className="text-10">Waktu</label>
                              <input type="time" className="form-control" onInput={(e) => {
                                setWaktu(e.target.value)
                              }} />
                            </div>
                            <div className="my-3">
                              <label htmlFor="tanggal" className="text-10">Tanggal</label>
                              <input type="text" className="form-control default" id="tanggal" value={`${d.getDate() + '-' + months[d.getMonth()] + '-' + d.getFullYear()}`} readOnly />
                            </div>
                            <div className="my-3">
                              <label htmlFor="desc" className="text-10">Alasan</label>
                              <textarea name="desc" className="form-control" id="desc" cols="30" rows="8" onChange={(e) => {
                                setAlasan(e.target.value)
                              }} placeholder="Tambahkan alasan...."></textarea>
                            </div>
                          </div>
                          <div className="card-footer justify-content-end d-flex p-0 border-0">
                            <button className="btn btn-secondary-2 w-100 rounded-bottom text-12" id="nambah" type="submit">Tambah</button>
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

export default Addgadgetsantri;