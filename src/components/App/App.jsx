import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import Footer from "../Footer/Footer";

import NonAdminProtectedRoute from '../ProtectedRoute/NonAdminProtectedRoute';
import AdminProtectedRoute from '../ProtectedRoute/AdminProtectedRoute';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Admin from '../Admin/Admin';
import FinalReport from '../FinalReport/FinalReport';


import { ThemeProvider } from '@material-ui/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import './App.css';
import IncidentHome from "../IncidentForm/IncidentHome";
import PatientHome from "../PatientHome/PatientHome";
import TreatmentHome from "../TreatmentForm/TreatmentHome";
import VitalsForm from "../VitalsForm/VitalsForm";
import SummaryFieldSubmit from "../SummaryFieldSubmit/SummaryFieldSubmit";


import Nav from '../Nav/Nav';
import AdminHeader from '../Admin/AdminHeader';
// import {useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  // KEEPING TRACK OF USER REDUX STATE
  // const user = useSelector((store) => store.user);
  // let isAdmin = (user.is_admin == true)
  // let nonAdmin = (user.is_admin == false)
  // let def = (user == null || undefined)

  return (
      <ThemeProvider theme={createMuiTheme}>
    <Router>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          <Route exact path="/login" >
            <LoginPage />
          </Route>
          <Route exact path="/registration" >
            <RegisterPage />
          </Route>

{/* -------------------------------------------------------FOR EVERYONE LOGGED IN------------------------------------------------------- */}




          <ProtectedRoute exact path="/home">
          <LandingPage />
          </ProtectedRoute>


{/* -------------------------------------------------------ADMIN ROUTES-------------------------------------------------------- */}

        


          <AdminProtectedRoute
            // logged in shows individual report, else shows LoginPage
            exact
            path="/report/:id"
          >
            <AdminHeader/>
            <FinalReport />
          </AdminProtectedRoute>
        

{/* -------------------------------------------------------NON ADMIN ROUTES-------------------------------------------------------- */}
  


          <NonAdminProtectedRoute exact path="/login" authRedirect="/home">
            <LoginPage />
          </NonAdminProtectedRoute>
      

          <NonAdminProtectedRoute path="/incident/:id">
            <Nav/>
            <IncidentHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute exact path="/patient">
            <Nav/>
            <PatientHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute path="/patient/:id">
            <Nav/>
            <PatientHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute exact path="/treatment">
            <Nav/>
            <TreatmentHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute path="/treatment/:id">
            <Nav/>
            <TreatmentHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute exact path="/vitals">
            <Nav/>
            <VitalsForm />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute path="/vitals/:id">
            <Nav/>
            <VitalsForm />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute exact path="/summary">
            <Nav/>
            <SummaryFieldSubmit />
          </NonAdminProtectedRoute>

        

          <Route>
            <h1>404</h1>
          </Route>

          <Footer />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;


  