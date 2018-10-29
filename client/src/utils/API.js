import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function() {
    console.log("getCurrentMeads");
    return axios.get("/api/get/currentWines");
  },
}