import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function() {
    return axios.get("/api/get/currentWines");
  },
}
// console.log(getCurrentMeads)