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

  addNewWine: function (newWine) {

    const newWine2 = {
      name: newWine.name,
      color: newWine.color,
      description: newWine.description,
      priceRegular: newWine.price
  };

    console.log("addNewWine", newWine2);
    return axios.post("/api/post/addNewWine", newWine2);
  },
  getColors: function () {
    console.log("Getting the colors (API.js)");
    return axios.get("/api/get/colors");

  }
}
