import React from "react";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import {useSelector} from 'react-redux';
import AdminHeader from '../Admin/AdminHeader';
import Nav from '../Nav/Nav';
import Admin from "../Admin/Admin";
import IncidentHome from "../IncidentForm/IncidentHome";


function LandingPage() {

  const user = useSelector((store) => store.user);

// landing page different based on whether login is admin or responder
if(user.is_admin === true) {
  return (
    <div>
      <AdminHeader/>
      <Admin/>
    </div>
  )
} else if(user.is_admin === false) {
  return (
    <div>
      <Nav/>
      <IncidentHome/>
    </div>
  )
}
 

}

export default LandingPage;

