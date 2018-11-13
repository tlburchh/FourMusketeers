import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function () {
    return axios.get("/api/get/currentWines");
  },
  seedDB: function() {
    console.log("Seed function hit in API");
    return axios.get("/api/get/seed");
  },
  getAllWines: function() {
    return axios.get("/api/get/allWines");
  },
  submitRating: function (ratingObj) {
    return axios.post("/api/post/rating", ratingObj);
  },

  addNewWine: function (newWine) {

    const newWine2 = {
      name: newWine.name,
      color: newWine.color,
      description: newWine.description,
      priceRegular: newWine.price
    };

    return axios.post("/api/post/addNewWine", newWine2);
  },
  getColors: function () {
    return axios.get("/api/get/colors");

  }
}
