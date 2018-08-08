import CONSTANTS from './Constants';

export const registerAction = values => ({
  type: CONSTANTS.REGISTER,
  data: values,
});

export const loginAction = values => ({
  type: CONSTANTS.LOGIN,
  data: values,
});

export const establishSessionAction = values => ({
  type: CONSTANTS.ESTABLISH_SESSION,
  data: values,
});

export const closeSessionAction = values => ({
  type: CONSTANTS.CLOSE_SESSION,
  data: values,
});
