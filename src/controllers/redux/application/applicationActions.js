export const Types = {
  SWITCH_VIEW: 'SWITCH_VIEW'
};

export const switchView = (view) => ({ type: Types.SWITCH_VIEW, view: view });