import { put } from '@redux-saga/core/effects';
import axios from 'axios';

// SENDS INCIIDENT INFORMATION TO SERVER
function* postIncident(action) {

    try {
        yield axios.post(`/api/incident`, action.payload);
        yield put({ type: 'RESET_STORAGE'})
    } catch (error) {
        console.log('POST INCIDENT ERROR:', error);
    }
}

export default postIncident;