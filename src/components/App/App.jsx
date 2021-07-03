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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Admin from '../Admin/Admin';
import FinalReport from '../FinalReport/FinalReport';


import {ThemeProvider} from '@material-ui/styles';
import createMuiTheme from '../GLOBALUI/Theme';
import './App.css';
import IncidentHome from "../IncidentForm/IncidentHome";
import PatientHome from '../PatientHome/PatientHome';
import TreatmentHome from "../TreatmentForm/TreatmentHome";
import VitalsForm from "../VitalsForm/VitalsForm";


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
{/* -------------------------------------------------------FOR EVERYONE :)------------------------------------------------------- */}



          <Redirect exact from="/" to="/home" />

          <ProtectedRoute exact path="/home">
          <LandingPage />
          </ProtectedRoute>


{/* -------------------------------------------------------ADMIN ROUTES-------------------------------------------------------- */}

        

          <AdminProtectedRoute exact path="/login" authRedirect="/home">
            <LoginPage />
          </AdminProtectedRoute>

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
      
          <NonAdminProtectedRoute exact path="/incident">
            <Nav/>
            <IncidentHome />
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
          </Switch>
        <Footer />
        </Router>
        </ThemeProvider>

  );
}

export default App;


  {/* CONDITIONAL RENDERING OF APP BAR w/ NAV */}
      {/* {  isAdmin ? <AdminHeader/>
      : nonAdmin ? <Nav/> 
      : def
      } */}

// PLACE ABOVE ADMIN TOP ROUTES

   {/* Visiting localhost:3000/about will show the about page. */}
          {/* <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/login"
          >
            {/* LoginPage */}
            {/* <LoginPage /> */}
          {/* <Route
            exact
            path="/registration"
            >
            <RegisterPage />
          </Route> */}
            {/* // shows AboutPage at all times (logged in or not)  */}


          
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}


            // PLACE ABOVE ADMIN  
             {/* <NonAdminProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </NonAdminProtectedRoute> */}


// PLACE BELOW REDIRECT TOP COMPONENT
   {/* Visiting localhost:3000/about will show the about page. */}
          {/* <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/login"
          >
            {/* LoginPage */}
            {/* <LoginPage /> */}
          {/* <Route
            exact
            path="/registration"
            >
            <RegisterPage />
          </Route> */}
            {/* // shows AboutPage at all times (logged in or not)  */}

// PLACE BELOW INITIAL ADMIN COMPONENT
                 {/* <AdminProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/admin"
            // - else shows LoginPage at /login
            exact
            path="/admin"
            authRedirect="/login"
          >
            <Admin />
          </AdminProtectedRoute> */}

// PLACE ABOVE INITIAL NONADMIN COMPONENT

                  {/* <NonAdminProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/incident"
          >
            <IncidentHome />
          </NonAdminProtectedRoute> */}

// PLACE BELOW INITIAL NONADMIN COMPONENT
                  {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          {/* <NonAdminProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/incident"
          >
            <IncidentHome />
          </NonAdminProtectedRoute> */}

          {/* <NonAdminProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/incident"
          >
            <IncidentHome />
          </NonAdminProtectedRoute> */}