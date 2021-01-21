import {takeEvery, fork} from 'redux-saga/effects';
import * as actions from './applicationActions';

function* watchSwitchView() {
  yield takeEvery(actions.Types.SWITCH_VIEW, actions.switchView);
}

const applicationSagas = [
  fork(watchSwitchView)
];

export default applicationSagas;