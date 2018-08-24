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

export const loadSignUpImageAction = values => ({
  type: CONSTANTS.LOAD_IMAGE_SIGNUP,
  image: values,
});

export const cleanSignUpImageAction = () => ({
  type: CONSTANTS.CLEAN_IMAGE_SIGNUP,
});

export const loadAddImageAction = values => ({
  type: CONSTANTS.LOAD_IMAGE_ADD,
  image: values,
});

export const cleanAddImageAction = () => ({
  type: CONSTANTS.CLEAN_IMAGE_ADD,
});

export const uploadPostAction = values => ({
  type: CONSTANTS.UPLOAD_POST,
  data: values,
});

export const downloadPublicationsAction = () => ({
  type: CONSTANTS.DOWNLOAD_PUBLICATIONS,
});

export const publicationStoreAction = (publications) => ({
  type: CONSTANTS.ADD_PUBLICATION_STORE,
  data: publications,
});
