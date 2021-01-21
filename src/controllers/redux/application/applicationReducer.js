
const createInitialState = () => {
  return {
      view: 'home'
  };
};

const applicationReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case 'SWITCH_VIEW': return {...state, view: action.view};
    default: return state;
  }
};

export default applicationReducer;