import axios from "axios";

export default {
  // Gets user info
  getUser: function () {
    return axios.get('/auth/user');
  },
  // Logs the user out
  logout: function () {
    return axios.post('/auth/logout');
  },
  // Log the user in
  login: function (email, password) {
    return axios.post('/auth/login', { email, password });
  },
  // New user registration
  signup: function (userData) {
    return axios.post('/auth/signup', userData);
  }
};
