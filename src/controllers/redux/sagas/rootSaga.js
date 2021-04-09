import {all} from 'redux-saga/effects';

import applicationSagas from './applicationSagas';

export default function* rootSaga() {
  yield all([...applicationSagas])
}