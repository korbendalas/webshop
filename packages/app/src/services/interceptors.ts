import Lockr from "lockr";

export function authRequest(config) {
  const token = Lockr.get("shop-token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}

export const authResponse = [
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      //   store.dispatch({ type: 'DEAUTHENTICATE_USER' });
      //   localStorage.removeItem('jwtToken');
      //   localStorage.removeItem('user');
    }
    return Promise.reject(error);
  },
];
