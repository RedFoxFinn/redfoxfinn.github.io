
import {takeEvery, fork, all} from 'redux-saga/effects';
import * as actions from '../actions/applicationActions';

function* watchSetThemeDark() {
  yield takeEvery(actions.Types.setThemeDark, actions.setTheme('dark'));
}

function* watchSetThemeLight() {
  yield takeEvery(actions.Types.setThemeLight, actions.setTheme('light'));
}

function* watchSetLangEn() {
  yield takeEvery(actions.Types.setLangEn, actions.setLanguage('en'));
}

function* watchSetLangFi() {
  yield takeEvery(actions.Types.setLangFi, actions.setLanguage('fi'));
}

const applicationSagas = [
  fork(watchSetThemeDark),
  fork(watchSetThemeLight),
  fork(watchSetLangEn),
  fork(watchSetLangFi)
];

export default applicationSagas;