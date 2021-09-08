const LOGIN = {
  LOGIN_ACTION_LOADING: "LOGIN_ACTION_LOADING",
  LOGIN_ACTION_SUCCESS: "LOGIN_ACTION_SUCCESS",
  LOGIN_ACTION_FAILURE: "LOGIN_ACTION_FAILURE",
};

const SIGNUP = {
  SIGNUP_ACTION_LOADING: "SIGNUP_ACTION_LOADING",
  SIGNUP_ACTION_SUCCESS: "SIGNUP_ACTION_SUCCESS",
  SIGNUP_ACTION_FAILURE: "SIGNUP_ACTION_FAILURE",
};

const CHECKOUT = {
  GET_CHECKOUT_LIST: "GET_CHECKOUT_LIST",
  UPDATE_CHECKOUT_LIST: "UPDATE_CHECKOUT_LIST",
  UPDATE_COUNTER_CHECKOUT_LIST: "UPDATE_COUNTER_CHECKOUT_LIST",
  REMOVE_CHECKOUT_LIST: "REMOVE_CHECKOUT_LIST",
  CLEAR_CHECKOUT_LIST: "CLEAR_CHECKOUT_LIST",
};

const USER = {
  GET_USER_ACTION_LOADING: "GET_USER_ACTION_LOADING",
  GET_USER_ACTION_SUCCESS: "GET_USER_ACTION_SUCCESS",
  GET_USER_ACTION_FAILURE: "GET_USER_ACTION_FAILURE",

  UPDATE_USER_ACTION_LOADING: "UPDATE_USER_ACTION_LOADING",
  UPDATE_USER_ACTION_SUCCESS: "UPDATE_USER_ACTION_SUCCESS",
  UPDATE_USER_ACTION_FAILURE: "UPDATE_USER_ACTION_FAILURE",

  CHANGE_USER_PASSWORD_ACTION_LOADING: "CHANGE_USER_PASSWORD_ACTION_LOADING",
  CHANGE_USER_PASSWORD_ACTION_SUCCESS: "CHANGE_USER_PASSWORD_ACTION_SUCCESS",
  CHANGE_USER_PASSWORD_ACTION_FAILURE: "CHANGE_USER_PASSWORD_ACTION_FAILURE",

  FORGET_USER_PASSWORD_ACTION_LOADING: "FORGET_USER_PASSWORD_ACTION_LOADING",
  FORGET_USER_PASSWORD_ACTION_SUCCESS: "FORGET_USER_PASSWORD_ACTION_SUCCESS",
  FORGET_USER_PASSWORD_ACTION_FAILURE: "FORGET_USER_PASSWORD_ACTION_FAILURE",

  RESET_USER_PASSWORD_ACTION_LOADING: "RESET_USER_PASSWORD_ACTION_LOADING",
  RESET_USER_PASSWORD_ACTION_SUCCESS: "RESET_USER_PASSWORD_ACTION_SUCCESS",
  RESET_USER_PASSWORD_ACTION_FAILURE: "RESET_USER_PASSWORD_ACTION_FAILURE",

  GET_BANNER_ACTION_LOADING: "GET_BANNER_ACTION_LOADING",
  GET_BANNER_ACTION_SUCCESS: "GET_BANNER_ACTION_SUCCESS",
  GET_BANNER_ACTION_FAILURE: "GET_BANNER_ACTION_FAILURE",

  GET_TESTIMONIAL_ACTION_LOADING: "GET_TESTIMONIAL_ACTION_LOADING",
  GET_TESTIMONIAL_ACTION_SUCCESS: "GET_TESTIMONIAL_ACTION_SUCCESS",
  GET_TESTIMONIAL_ACTION_FAILURE: "GET_TESTIMONIAL_ACTION_FAILURE",
};

const CUSTOMER = {
  GET_ADDRESS_ACTION_LOADING: "GET_ADDRESS_ACTION_LOADING",
  GET_ADDRESS_ACTION_SUCCESS: "GET_ADDRESS_ACTION_SUCCESS",
  GET_ADDRESS_ACTION_FAILURE: "GET_ADDRESS_ACTION_FAILURE",

  ADD_ADDRESS_ACTION_LOADING: "ADD_ADDRESS_ACTION_LOADING",
  ADD_ADDRESS_ACTION_SUCCESS: "ADD_ADDRESS_ACTION_SUCCESS",
  ADD_ADDRESS_ACTION_FAILURE: "ADD_ADDRESS_ACTION_FAILURE",
};

const PRODUCT = {
  GET_PRODUCT_CATEGORY_LOADING: "GET_PRODUCT_CATEGORY_LOADING",
  GET_PRODUCT_CATEGORY_SUCCESS: "GET_PRODUCT_CATEGORY_SUCCESS",
  GET_PRODUCT_CATEGORY_FAILURE: "GET_PRODUCT_CATEGORY_FAILURE",

  GET_PRODUCT_ITEM_LOADING: "GET_PRODUCT_ITEM_LOADING",
  GET_PRODUCT_ITEM_SUCCESS: "GET_PRODUCT_ITEM_SUCCESS",
  GET_PRODUCT_ITEM_FAILURE: "GET_PRODUCT_ITEM_FAILURE",
};

const ORDER = {
  GET_LOCAL_ORDER_LIST: "GET_LOCAL_ORDER_LIST",
  UPDATE_LOCAL_ORDER_LIST: "UPDATE_LOCAL_ORDER_LIST",
  CLEAR_LOCAL_ORDER_LIST: "CLEAR_LOCAL_ORDER_LIST",

  CREATE_CUSTOMER_ORDER_LOADING: "CREATE_CUSTOMER_ORDER_LOADING",
  CREATE_CUSTOMER_ORDER_SUCCESS: "CREATE_CUSTOMER_ORDER_SUCCESS",
  CREATE_CUSTOMER_ORDER_FAILURE: "CREATE_CUSTOMER_ORDER_FAILURE",

  GET_CUSTOMER_ORDER_LOADING: "GET_CUSTOMER_ORDER_LOADING",
  GET_CUSTOMER_ORDER_SUCCESS: "GET_CUSTOMER_ORDER_SUCCESS",
  GET_CUSTOMER_ORDER_FAILURE: "GET_CUSTOMER_ORDER_FAILURE",

  GET_DELIVERY_DATE_LOADING: "GET_DELIVERY_DATE_LOADING",
  GET_DELIVERY_DATE_SUCCESS: "GET_DELIVERY_DATE_SUCCESS",
  GET_DELIVERY_DATE_FAILURE: "GET_DELIVERY_DATE_FAILURE",
};

const VENDOR = {
  GET_VENDOR_LOADING: "GET_VENDOR_LOADING",
  GET_VENDOR_SUCCESS: "GET_VENDOR_SUCCESS",
  GET_VENDOR_FAILURE: "GET_VENDOR_FAILURE",

  GET_COUPON_CODE_LOADING: "GET_COUPON_CODE_LOADING",
  GET_COUPON_CODE_SUCCESS: "GET_COUPON_CODE_SUCCESS",
  GET_COUPON_CODE_FAILURE: "GET_COUPON_CODE_FAILURE",

  CLEAR_COUPON_CODE: "CLEAR_COUPON_CODE",

  CLEAR_VENDOR_STATE: "CLEAR_VENDOR_STATE",
  SET_VENDOR_ID: "SET_VENDOR_ID",
};

const OTP = {
  VERIFY_OTP_LOADING: "VERIFY_OTP_LOADING",
  VERIFY_OTP_SUCCESS: "VERIFY_OTP_SUCCESS",
  VERIFY_OTP_FAILURE: "VERIFY_OTP_FAILURE",
  RESEND_OTP_LOADING: "RESEND_OTP_LOADING",
  RESEND_OTP_SUCCESS: "RESEND_OTP_SUCCESS",
  RESEND_OTP_FAILURE: "RESEND_OTP_FAILURE",
};

const START_SPINNER_LOADING = "START_SPINNER_LOADING";
const DESTROY_SESSION = "DESTROY_SESSION";

export default {
  LOGIN,
  SIGNUP,
  CHECKOUT,
  USER,
  START_SPINNER_LOADING,
  PRODUCT,
  CUSTOMER,
  DESTROY_SESSION,
  ORDER,
  VENDOR,
  OTP,
};
