import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';


import Footer from '../Footer/Footer';

import NonAdminProtectedRoute from '../ProtectedRoute/NonAdminProtectedRoute';
import AdminProtectedRoute from '../ProtectedRoute/AdminProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Admin from '../Admin/Admin';

import PatientHome from '../PatientHome/PatientHome';
import PatientDemographics from '../PatientDemographics/PatientDemographics';
import PatientSymptoms from '../PatientSymptoms/PatientSymptoms';
import PatientMedical from '../PatientMedical/PatientMedical';
import PatientInjury from '../PatientInjury/PatientInjury';
import PatientCardiac from '../PatientCardiac/PatientCardiac';

import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import './App.css';
import IncidentFormResponse from '../IncidentForm/IncidentFormResponse';
import IncidentFormDisposition from '../IncidentForm/IncidentFormDisposition';
import IncidentFormScene from '../IncidentForm/IncidentFormScene';
import ReduxCookie from '../ReduxCookie/ReduxCookie';
import IncidentHome from "../IncidentForm/IncidentHome";
import TreatmentHome from "../TreatmentForm/TreatmentHome";
import ReduxCookie from "../ReduxCookie/ReduxCookie";
import VitalsForm from "../VitalsForm/VitalsForm";


import Nav from '../Nav/Nav';
import AdminHeader from '../Admin/AdminHeader';
import {useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);
  
  // KEEPING TRACK OF USER REDUX STATE
  const user = useSelector((store) => store.user);
  let isAdmin = (user.is_admin == true)
  let nonAdmin = (user.is_admin == false)
  let def = null

  return (
    <Router>
      <ThemeProvider theme={createMuiTheme}>

  {/* CONDITIONAL RENDERING OF APP BAR w/ NAV */}
      {isAdmin ? <AdminHeader/>
      : nonAdmin ? <Nav/> 
      : def
      }

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/dropdown"
          >
            <ReduxCookie />
          </Route>
          </Switch>
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            
          <NonAdminProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </NonAdminProtectedRoute>


          <NonAdminProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </NonAdminProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <NonAdminProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />

          </NonAdminProtectedRoute>
    

<<<<<<< HEAD
          <NonAdminProtectedRoute
          exact
          path="/patientHome"
          >
=======
          <ProtectedRoute path="/incident/:id">
            <IncidentHome />
          </ProtectedRoute>

          <ProtectedRoute exact path="/patient">
>>>>>>> 4c72a12b5c4d566bb5ea94495bcdbed6c8e90556
            <PatientHome />
          </NonAdminProtectedRoute>

<<<<<<< HEAD
          <NonAdminProtectedRoute
          exact
          path="/patientDemographics"
          >
            <PatientDemographics />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute
          exact
          path="/patientInjury"
          >
            <PatientInjury />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute
          exact
          path="/patientMedical"
          >
            <PatientMedical />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute
          exact
          path="/patientSymptoms"
          >
            <PatientSymptoms />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute
          exact
          path="/patientCardiacArrest"
          >

          <NonAdminProtectedRoute exact path="/incident">
            <IncidentHome />
          </NonAdminProtectedRoute>
=======
          <ProtectedRoute exact path="/patient/:id">
            <PatientHome />
          </ProtectedRoute>
>>>>>>> 4c72a12b5c4d566bb5ea94495bcdbed6c8e90556

          <NonAdminProtectedRoute path="/incident/:id">
            <IncidentHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute exact path="/treatment">
            <TreatmentHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute path="/treatment/:id">
            <TreatmentHome />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute exact path="/vitals">
            <VitalsForm />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute path="/vitals/:id">
            <VitalsForm />
          </NonAdminProtectedRoute>


          <AdminProtectedRoute
          exact
          path="/admin"
          >
            <Admin />
          </AdminProtectedRoute>



          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
<<<<<<< HEAD
       
=======
          
        </Switch>
>>>>>>> 4c72a12b5c4d566bb5ea94495bcdbed6c8e90556
        <Footer />
        </ThemeProvider>
        </Router>
  );
}

export default App;
