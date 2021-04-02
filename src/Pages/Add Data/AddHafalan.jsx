import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import Select from 'react-select';
import Gadget from "./../../Undraw/undrawGadget2.svg"
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(loadAnimation);

const AddHafalan = () => {
  const loop_1 = 'loop'

  let nama = localStorage.getItem('name');
  let tokens = localStorage.getItem('tokens');
  let id = localStorage.getItem('id');

  const searchable = true
  const clearable = true

  const [names, setNames] = useState([])
  const [idsantri, setIdsantri] = useState([])
  const [list, setList] = useState([])

  const [user2, setUser] = useState()
  const [surah, setSurah] = useState()
  const [ayatAwal, setAyatAwal] = useState()
  const [ayatAkhir, setAyatAkhir] = useState()
  const [rekaman, setRekaman] = useState()

  const [teks, setTeks] = useState()
  const [erors, setErors] = useState()
  const [select, setSelect] = useState()
  
  const [fTime, setfTime] = useState([]);
  const [sTime, setsTime] = useState([]);
  
  const [santri, setSantri] = useState();
  const [alasan, setAlasan] = useState();
  const [waktu, setWaktu] = useState();
  const [tanggal, setTanggal] = useState();
  const [gadget, setGadget] = useState();
  
  const onSubmit = (e) => {
    e.preventDefault();
    Post();
  }
  
  useEffect(() => {
    getSantri()
    console.log(list.name);
  }, []);

  const getSantri = async () => {
    const urlSantri = `http://api-nyantren.herokuapp.com/api/show/kesantrian/santri`;
    const headers = {
      headers: {
        Authorization: `Bearer ${tokens}`
      }
    }
    //get data
    // let response = await axios.get(urlSantri, headers)
    const response = await axios.get(urlSantri, headers).then(data => data.data.success).catch(error => error)
    setList(response);
    setNames(response.name);
    console.log(response);
    // try {
    //   let response = await axios.get(urlSantri, headers)
    //   console.log(response.data.success.name);
    //   // setNames(response.data.success.name);
    //   // setIdsantri(response.data.success.id);
    //   setList(response.data.success);
    // } catch (err){
    //   // console.log(err.response);
    //   setTeks('Subhanallah, Gagal Ditambahkan!')
    // }
  }
  
  const Post = async (e) => {
    const url = `http://api-nyantren.herokuapp.com/api/post/kesantrian/setoranquran`;
    const payload = {
      guru_id: id,
      surah: surah,
      ayat_awal: ayatAwal,
      ayat_akhir: ayatAkhir,
      rekaman: rekaman
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

  const handleC = (e) => {
    console.log(e);
    setSelect(e.value)
    console.log(select);
  }

  const options = list.map(function (data) {
    return { value: data.id, label: data.name }
  })
    
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
                      {erors === '' ? null : erors === 'true' ? <div className="position-absolute w-100 rounded-top alert alert-success text-10 my-0 rounded-0" style={{zIndex: "20"}}  >{teks}</div> : erors === 'false' ? <div className="position-absolute w-100 rounded-top alert alert-danger text-10 my-0 rounded-0" style={{zIndex: "20"}}  >{teks}</div> : ''}
                      <div className="card-body px-4 overflow-y-auto">
                        <div className="my-3">
                          <label htmlFor="nama" className="text-10 border-bottom w-15">Name</label>
                          <p className="text-capitalize">{nama}</p>
                        </div>
                        <div className="my-3">
                          <label htmlFor="name" className="text-10 border-bottom w-50">Nama Santri</label>
                          <Select name="santri" id="santri"
                          onChange={handleC}
                          clearable={clearable}
                          searchable={searchable}
                          labelKey='name'
                          valueKey='countryCode'
                          options={options} />
                          <div className="my-1">
                            {/* <input type="checkbox" name="bermasalah" id="bermasalah"/><label htmlFor="bermasalah" className="mx-2 text-10">Bermasalah</label> */}
                          </div>
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

export default AddHafalan;