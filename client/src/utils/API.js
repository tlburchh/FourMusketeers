import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function() {
    console.log("getCurrentMeads");
    return axios.get("/api/get/currentWines");
  },
  seedDB: function() {
    console.log("Seed function hit in API");
    return axios.get("/api/get/seed");
  }
}