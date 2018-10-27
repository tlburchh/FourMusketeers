const mongoose = require("mongoose");
const db = require("../models");

// This file seeds our database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

const keywordsSeed = [
  {
    keyword: "goodBeefy"
  },
  {
    keyword: "badBeefy"
  },
  {
    keyword: "badOaky"
  },
  {
    keyword: "goodMetallic"
  },
  {
    keyword: "OVER 9000"
  }
];
const winesSeed = [
  {
    name: "Cranberry",
    color: ["purple", "#551A8B"],
    description: "This is most fruity sorostitue drink ever",
    price: 16.0,
    isAvailable: true
  },
  {
    name: "Goat cheese",
    color: ["orange", "#FFA500"],
    description: "This fancy drink exemplifies the best flavours of middle-age fermentation",
    price: 9.0,
    isAvailable: true
  },
  {
    name: "Blueberry",
    color: ["purple", "#551A8B"],
    description: "This awesome wine is made strictly from wild blueberries which grow on elephant shit.",
    price: 14.0,
    isAvailable: true
  },
  {
    name: "Cinnamon",
    color: ["maroon", "#800000"],
    description: "This is basically the wine equivalent of Fireball. It can be seen at most frat parties and in high school girls' cups",
    price: 12.57,
    isAvailable: true
  },
];
const ratingsSeed = [
  {
    numericalRating: 4
  },
  {
    numericalRating: 2
  },
  {
    numericalRating: 1
  },
  {
    numericalRating: 3
  }
];

// Seed initial data

db.Keywords.insertMany(keywordsSeed).then(resp => {
  console.log("Added keywords");
  process.exit(0);
}).catch(err => {
  console.log(`Error inserting keywords ${err}`);
});

db.Wines.insertMany(winesSeed).then(resp => {
  console.log("Added wines");
  process.exit(0);
}).catch(err => {
  console.log(`Error inserting wines ${err}`);
});

db.Rating.insertMany(ratingsSeed).then(resp => {
  console.log("Added ratings");
  process.exit(0);
}).catch(err => {
  console.log(`Error inserting ratings ${err}`);
});
