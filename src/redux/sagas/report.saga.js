import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

// fetches REPORT information SPECIFIC TO PATIENT SELECTED
function* fetchReport(action) {
    try {
        //yield makes us wait until the async thing (axios) is done
        //keep the response in a variable to access later
        const response = yield axios.get(`/api/reports/${action.payload}`)
        //when its done successfully then 'dispatch' the action to set reducer
        yield put({ type: 'SET_REPORT', payload: response.data })

    } catch (error) {
        alert(`Sorry. Things aren't working at the moment. Try again later`);
        console.log('error getting report', error);
    }
}

function* reportSaga() {
    yield takeLatest('FETCH_REPORT', fetchReport);
}

export default reportSaga;