import CONSTANTS from './Constants';

export const registerAction = values => ({
  type: CONSTANTS.REGISTER,
  data: values,
});

export const loginAction = values => ({
  type: CONSTANTS.LOGIN,
  data: values,
});
