import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function() {
    console.log("getCurrentMeads");
    return axios.get("/api/get/currentWines");
  },
  submitRating: function(ratingObj) {
    console.log("Submitting rating (API.js)");
    return axios.post("/api/post/rating", ratingObj);
  }
}