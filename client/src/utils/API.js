import axios from "axios";

export default {
  // Gets all wines
  getCurrentMeads: function() {
    return axios.get("/api/get/currentMeads");
  },
}
// console.log(getCurrentMeads)