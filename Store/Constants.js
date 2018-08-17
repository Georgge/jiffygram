import CloudinaryConf from './Services/CloudinaryConfig';

const CONSTANTS = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
  ESTABLISH_SESSION: 'ESTABLISH_SESSION',
  CLOSE_SESSION: 'CLOSE_SESSION',
  CLEAN_IMAGE_SIGNUP: 'CLEAN_IMAGE_SIGNUP',
  LOAD_IMAGE_SIGNUP: 'LOAD_IMAGE_SIGNUP',
  CLOUDINARY_NAME: CloudinaryConf.DIRECT_API,
  CLOUDINARY_PRESET: CloudinaryConf.PRESET,
  LOAD_IMAGE_ADD: 'LOAD_IMAGE_ADD',
  CLEAN_IMAGE_ADD: 'CLEAN_IMAGE_ADD',
};

export default CONSTANTS;
