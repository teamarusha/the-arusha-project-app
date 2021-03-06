import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import reportsTableSaga from './reportsTable.saga';
import getDropdowns from './getDropdowns.saga';
import postIncident from './postIncident.saga';
import reportSaga from './report.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('GET_DROPDOWNS', getDropdowns);
  yield takeEvery('POST_INCIDENT', postIncident);
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    reportsTableSaga(),
    reportSaga(),
  ]);
}
