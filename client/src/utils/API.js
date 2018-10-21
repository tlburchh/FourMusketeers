import axios from "axios";

export default {
  // Gets all books
  getTrails: function() {
    return axios.get("/api/trails");
  },
  // Gets the book with the given id
  getTrail: function(id) {
    return axios.get("/api/trails/" + id);
  },
  // Deletes the book with the given id
  deleteTrail: function(id) {
    return axios.delete("/api/trails/" + id);
  },
  // Saves a book to the database
  saveTrail: function(trailData) {
    return axios.post("/api/trails", trailData);
  }
};
