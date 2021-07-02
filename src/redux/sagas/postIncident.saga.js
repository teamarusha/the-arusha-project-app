import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* postIncident(action) {

    console.log('IN POST INCIDENT SAGA');
    console.log('action.payload', action.payload);

    const {
        incident,
        patients,
        treatment,
        vitals
    } = action.payload;

    console.log(`incident, patients, treatment, vitals`, incident, patients, treatment, vitals);






    try {

        // yield axios.post(`/api/incident`, action.payload);

        console.log('POST WORKED');


    } catch (error) {
        console.log('POST INCIDENT ERROR:', error);
    }


}

export default postIncident;