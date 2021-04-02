import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import Files from './../../freepik/findFiles.png'

const Gadgets = () => {
  const [datas, setDatas] = useState([])
  const [datasantri, setDatasantri] = useState([])
  
  let id = localStorage.getItem('id');
  let nama = localStorage.getItem('name');
  let tokens = localStorage.getItem('tokens');
  let rolens = localStorage.getItem('rolens');

  //headers - authorization
  const headers = {
    headers: {
      Authorization: `Bearer ${tokens}`
    }
  }

  useEffect(() => {
    getSetoran()
  }, []);

  const getSetoran = async () => {
    const url = 'http://api-nyantren.herokuapp.com/api/show/kesantrian/peminjaman'
    const urlSantri = 'http://api-nyantren.herokuapp.com/api/show/kesantrian/santri'
    const response = await axios.get(url, headers).then(data => data.data).catch(error => error)
    const responseSantri = await axios.get(url, headers).then(data => data.data).catch(error => error)
    setDatas(response);
    setDatasantri(responseSantri);
    console.log(response);
    console.log(responseSantri);
  }

  return(
    <React.Fragment>
        <div className="row h-100 w-80">
          <div className="col-12-lg p-5 h-100 w-100">
            <div className="card h-100 bg-light-1 w-100 m-0 justify-content-center">
              {/* <button className="btn position-absolute right-0 top-0" onClick={this.props.Close_Gadget}>
                <FontAwesomeIcon icon={faBan} />
              </button> */}
              <div className="card-body h-100 p-4">
                <div className="container-fluid h-100">
                  {/* <div className="row w-100 my-4 text-end">
                    <h3 className="text-light-1 fw-bold">Edit Profile</h3>
                    <small></small>
                  </div> */}
                  <div className="row py-5 h-100">
                      <div className="col-6 h-100">
                        <div className="card bg-light-3 border-0 overflow-auto h-100">
                            <div className="card-body">
                              {datas.map((data, index) => (
                                <div className="row" key={index}>
                                    <div className="col-12-lg">
                                        <div className="card my-2 border-0 text-light bg-lgreen-gradient-start text-start p-3">
                                          <h6>Nama Santri : {data.user_id}</h6>
                                          <small>Pemberi Izin : {data.guru_id}</small>
                                          <small>Alasan : {data.alasan}</small>
                                          <small>Tanggal : {data.tanggal_peminjaman}</small>
                                          <small>Waktu : {data.waktu_peminjaman}</small>
                                          {/* <div className="col-8"></div> */}
                                          <a href={data.rekaman} className="btn btn-lgreen mt-3 text-10" target="_blank">Rekaman</a>
                                        </div>
                                    </div>
                                  </div>
                              ))}
                            </div>
                        </div>
                      </div>
                      <div className="col-6 m-0 h-100">
                        <div className="row text-center">
                          <h3 className="text-dark fw-bold">Riwayat Setoran</h3>
                        </div>
                        <img src={Files} className="img-thumbnail border-0 p-0 h-80" alt="Files"/>
                        <div className="row">
                        <small className="text-capitalize">Klik bagian luar untuk menutup tab</small>
                        </div>
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

export default Gadgets;