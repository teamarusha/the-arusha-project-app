import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

// fetches all saved lists from database
function* fetchReports() {
    try {
      //yield makes us wait until the async thing (axios) is done
      //keep the response in a variable to access later
      const response = yield axios.get('/api/reports')
      //when its done successfully then 'dispatch' the action to set reducer
      console.log(response.data)
      yield put({ type: 'SET_REPORTS', payload: response.data })
  
    } catch (error) {
      alert(`Sorry. Things aren't working at the moment. Try again later`);
      console.log('error getting reports', error);
    }
  }

  // if dispatch called - triggers function that follows
function* reportsTableSaga() {
    yield takeLatest('FETCH_REPORTS', fetchReports);
}

export default reportsTableSaga;