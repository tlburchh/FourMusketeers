import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function() {
    console.log("getCurrentMeads");
    return axios.get("/api/get/currentWines");
  },

  addNewWine: function() {
    console.log("addNewWine");
    return axios.post("/api/post/addNewWine");
  }
}