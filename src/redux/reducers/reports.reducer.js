// STORES ALL TABLE VALUES FROM ALL PATIENTS FROM ALL REPORTS
const reportsTable = (state = [], action) => {

  // set all reports with data from server
  if (action.type === 'SET_REPORTS') {
    //the action payload is a new array from the server
    //it has ALL the information in it - no need to spread 
    //& add to previous state
    return action.payload;
  }
  return state;
}

export default reportsTable;