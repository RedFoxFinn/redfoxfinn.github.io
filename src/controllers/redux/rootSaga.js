
import {all} from 'redux-saga/effects';
import applicationSagas from './application/applicationSagas';

export default function* rootSaga() {
  yield all([...applicationSagas])
}