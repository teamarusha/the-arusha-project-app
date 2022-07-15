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
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FinalReport from '../FinalReport/FinalReport';
import { ThemeProvider } from '@material-ui/styles';
import createTheme from '../GLOBALUI/Theme';
import './App.css';
import IncidentHome from "../IncidentForm/IncidentHome";
import PatientHome from "../PatientHome/PatientHome";
import TreatmentHome from "../TreatmentForm/TreatmentHome";
import VitalsForm from "../VitalsForm/VitalsForm";
import SummaryFieldSubmit from "../SummaryFieldSubmit/SummaryFieldSubmit";
import Nav from '../Nav/Nav';
import AdminHeader from '../Admin/AdminHeader';

function App() {
  const dispatch = useDispatch();

  //initializes user reducer to grab user information
  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <ThemeProvider theme={createTheme}>
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
            // logged in shows individual report for selected patient, else shows LoginPage
            exact
            path="/report/:id"
          >
            <AdminHeader />
            <FinalReport />
          </AdminProtectedRoute>


          {/* -------------------------------------------------------NON ADMIN ROUTES-------------------------------------------------------- */}

          <NonAdminProtectedRoute exact path="/login" authRedirect="/home">
            <LoginPage />
          </NonAdminProtectedRoute>

          {/* Incident view based on patient */}
          <NonAdminProtectedRoute path="/incident/:id">
            <Nav />
            <IncidentHome />
          </NonAdminProtectedRoute>

          {/* Patient */}
          <NonAdminProtectedRoute exact path="/patient">
            <Nav />
            <PatientHome />
          </NonAdminProtectedRoute>

          {/* patient page for specific patient */}
          <NonAdminProtectedRoute path="/patient/:id">
            <Nav />
            <PatientHome />
          </NonAdminProtectedRoute>

          {/* treatment home page */}
          <NonAdminProtectedRoute exact path="/treatment">
            <Nav />
            <TreatmentHome />
          </NonAdminProtectedRoute>

          {/* treatment page for specific patient */}
          <NonAdminProtectedRoute path="/treatment/:id">
            <Nav />
            <TreatmentHome />
          </NonAdminProtectedRoute>

          {/* vitals home page */}
          <NonAdminProtectedRoute exact path="/vitals">
            <Nav />
            <VitalsForm />
          </NonAdminProtectedRoute>

          {/* vitals page based on specific patient */}
          <NonAdminProtectedRoute path="/vitals/:id">
            <Nav />
            <VitalsForm />
          </NonAdminProtectedRoute>

          {/* summary page  */}
          <NonAdminProtectedRoute exact path="/summary">
            <Nav />
            <SummaryFieldSubmit />
          </NonAdminProtectedRoute>

          <NonAdminProtectedRoute path="/summary/:id">
            <Nav />
            <SummaryFieldSubmit />
          </NonAdminProtectedRoute>
          {/* if error will show 404 */}
          <Route>
            <h1>404</h1>
          </Route>

          <Footer />
        </Switch>
      </Router>
    </ThemeProvider>
  );
} //end App

export default App;


