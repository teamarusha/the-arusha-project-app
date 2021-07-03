import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { Typography, Grid, Link } from "@material-ui/core";
// CUSTOM COMPONENTS
import {useSelector} from 'react-redux';
import AdminHeader from '../Admin/AdminHeader';
import Nav from '../Nav/Nav';
import Admin from "../Admin/Admin";
import IncidentHome from "../IncidentForm/IncidentHome";


function LandingPage() {

  const history = useHistory();
  const user = useSelector((store) => store.user);

  const handleClick = (event) => {
    history.push("/registration");
  };

  
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

