import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from "./Pages/Navbar";
import ProtectedRoute from "./Component/ProtectedRoute";
import Home from "./Pages/Home/Home";
import Home_1 from "./Pages/Home/Home_1";
import Santri_1 from "./Pages/Home/Home_santri";
import Guru from "./Pages/Home/Home_guru";
import About from "./Pages/About";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Register";
import Select from "./Pages/Select";
import Gadget from "./Pages/Gadget";
import Izin from "./Pages/Izin";
import History from "./Pages/History";
import Data from "./Pages/Data";
import Santri from './Pages/Santri';
// import EditSantri from './Pages/Edit Profile/EditSantri';
import Profile from "./Pages/Account/Profile";
import ProfileGuru from "./Pages/Account/ProfileGuru";
import ProfileMusyrif from "./Pages/Account/ProfileMusyrif";
import Profile2 from "./Pages/Account/Profile2";
// import Profile2 from "./Pages/Profile2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowLeft, faKey, faUserCircle, faHome, faChevronRight, faBan, faPenSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ProfileSantri from './Pages/Account/ProfileSantri';
import { useState } from 'react';
import useToken from './Auth/useToken';

function App() {
  const { token, setToken } = useToken();
  // const { role, setRole } = useRole();

  if(!token) {
    return <Login setToken={setToken} />
  }

  const user = localStorage.getItem('token');
  const js = JSON.parse(user);
  const role = js.success.role[0];
  const name = js.success.name;
  const emails = js.success.email;
  const tokens = js.success.token;
  localStorage.setItem('rolens', role);
  localStorage.setItem('name', name);
  localStorage.setItem('emails', emails);
  localStorage.setItem('tokens', tokens);
  console.log(role);

  const roles = localStorage.getItem('rolens');

  const Roled = () => {
    console.log(role);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar>
              {(role === "santri") ? <Santri_1 /> : role === "guru" ? <Guru /> : <Home_1 />}
              {Roled}
              {/* {() => {}} */}
            </Navbar>
          </Route>
          {/* <Route exact path="/dashboardsantri">
            <Navbar>
              <Santri_1 />
            </Navbar>
          </Route>
          <Route exact path="/dashboardguru">
            <Navbar>
              <Guru />
            </Navbar>
          </Route> */}
          <Route exact path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route exact path="/gadget">
            <Navbar>
              <Gadget />
            </Navbar>
          </Route>
          <Route exact path="/izin">
            <Navbar>
              <Izin />
            </Navbar>
          </Route>
          <Route exact path="/history">
            <Navbar>
              <History />
            </Navbar>
          </Route>
          <Route exact path="/santri">
            <Navbar>
              <Santri />
            </Navbar>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/profileguru">
            <ProfileGuru />
          </Route>
          <Route exact path="/profilemusyrif">
            <ProfileMusyrif />
          </Route>
          <Route exact path="/profilesantri">
            <ProfileSantri />
          </Route>
          <Route exact path="/profile2">
            <Profile2 />
          </Route>
          <Route path="/select" component={Select} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
