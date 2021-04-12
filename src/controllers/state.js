
import React, {createContext, useReducer} from 'react';
import checker from '../tools/checker';

export const actionTypes = ['SWITCH_LANG', 'SWITCH_THEME'];

const generateInitialState = () => {
  return {
    theme: 'dark',
    language: 'en'
  };
};

const FirstReducer = (state = generateInitialState(), action) => {
  switch (action.type) {
    case actionTypes[0]: return {
      ...state, 
      language: action.language
    };
    case actionTypes[1]: return {
      ...state,
      theme: action.theme
    };
    default: return state;
  }
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(FirstReducer);

  return <Context.Provider value={[state, dispatch]}>
    {children}
  </Context.Provider>
};

export const Context = createContext(generateInitialState());
export default Store;