const reports = (state = [], action) => {
    console.log('hello from the reports reducer');
  
    // set all reports with data from server
    if (action.type === 'SET_REPORTS') {
      //the action payload is a new array from the server
      //it has ALL the information in it - no need to spread 
      //& add to previous state
      return action.payload;
    }
    return state;
  }
  
  export default reports;