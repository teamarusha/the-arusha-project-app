import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* postIncident(action) {

    console.log('IN POST INCIDENT SAGA');
    console.log('action.payload', action.payload);
    try {
        yield axios.post(`/api/incident`, action.payload);

        console.log('POST WORKED');
        
        yield put({ type: 'RESET_STORAGE'})

    } catch (error) {
        console.log('POST INCIDENT ERROR:', error);
    }


}

export default postIncident;