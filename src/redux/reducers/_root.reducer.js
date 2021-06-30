import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import reportsTable from './reportsTable.reducer';
import dropdowns from './dropdowns.reducer';
import incident from './incident.reducer';
import report from './report.reducer';
import patients from './patients.reducer';
import vitals from './vitals.reducer';
import treatment from './treatment.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  reportsTable, //gets all reports from database
  dropdowns,
  incident,
  report,
  patients,
  vitals,
  treatment
});

export default rootReducer;
