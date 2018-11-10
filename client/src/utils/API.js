import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function () {
    console.log("getCurrentMeads");
    return axios.get("/api/get/currentWines");
  },
  submitRating: function (ratingObj) {
    console.log("Submitting rating (API.js)");
    return axios.post("/api/post/rating", ratingObj);
  },
  // submitRating: function (ratingObj) {
  //   console.log("Submitting rating (API.js)");
  //   return axios.post("/api/post/rating", ratingObj);
  // },
  addNewWine: function () {
    console.log("addNewWine");
    return axios.post("/api/post/addNewWine");
  },
  getColors: function () {
    console.log("Getting the colors (API.js)");
    return axios.get("/api/get/colors");
  }
}