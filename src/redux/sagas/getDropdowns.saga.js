import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* getDropdowns() {
    try {
        const dropdown = yield axios.get(`/api/dropdown`);
        
        
        yield put({ type: 'SET_COOKIE_MIRROR', payload: dropdown.data });
    } catch (error) {
        console.log('get dropdown error', error);
    }
}

export default getDropdowns;