
import {Types} from '../actions/applicationActions';

const createInitialState = () => {
  return {
    applicationTheme: 'dark',
    applicationLanguage: 'en'
  };
};

const applicationReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case Types.setTheme: return {...state, applicationTheme: action.setThemeTo};
    case Types.setLang: return {...state, applicationLanguage: action.setLangTo};
    default: return state;
  }
};

export default applicationReducer;