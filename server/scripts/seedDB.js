const mongoose = require("mongoose");
const db = require("../models");

// This file seeds our database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

const keywordsSeed = [
  {
    keyword: "gtart"
  },
  {
    keyword: "btart"
  },
  {
    keyword: "bsmokey"
  },
  {
    keyword: "gsour"
  },
  {
    keyword: "gchocolate"
  }
];
const winesSeed = [
  {
    name: "Traditional Off-Dry Mead",
    color: ["blue", "#0000FF"],
    description: "Honey wine with just a hint of sweetness. Light floral notes with a slight citrus finish. Serve as you would a white wine, lightly chilled with Lemon Chicken, fish, or with spicy food! Silver Medal winner at the 2017 NC State Fair and Bronze Medal winner at the 2017 Mid-Atlantic Southeastern Wine competition, 2012 Mazer Cup International mead-only competition, and the 2015 Finger Lakes Wine competition!",
    price: '16.00',
    isAvailable: true
  },
  {
    name: "Pear Off-Dry Mead",
    color: ["pear", "#d1e231"],
    description: "Our Off-Dry Pear is a lightly fruity reminder of Springtime. It’s aroma whispers of pear blossoms and honey, while the creamy mouth feel holds the balance of the earthy notes of honey with the light floral of pear, ending in a long ripe pear finish. Crisp and lush! Pair with cheeses, such as brie or cheddar, Asian-inspired foods, or a light salad with a light vinaigrette. Bronze Medal winner at the 2017 Mid-Atlantic Southeastern Wine and 2016 American Wine Society competitions!",
    price: '9.00',
    isAvailable: true
  },
  {
    name: "Currant Mead",
    color: ["currant", "#ad3d3c"],
    description: "Our latest homage to red wine made from a delicious combination of Black and Red Currant juices. Black Currant provides lovely green flavors, while the Red Currant adds a nice tart finish. Wildflower Honey adds earthy notes to this very complex mead. Enjoy with local grass-fed hamburger topped with bleu cheese, a hearty mushroom ravioli, or rich dark chocolate!",
    price: '14.00',
    isAvailable: true
  },
  {
    name: "Pomegranate Pink Peppercorn Mead",
    color: ["pomegranate", "#EE3233"],
    description: "In early 2013, our dear friend and mead wench, Jenn, was diagnosed with breast cancer. To honor the courage and determination of her, and all the other women fighting and surviving breast cancer, we created Pomegranate Pink Peppercorn Mead. It has the lively zing of pomegranate and the fruity spice of pink peppercorns. Like those women, this mead is something special. $5 from each bottle sold will be donated to deserving women in order to offset their medical bills. We release this mead each year in October for Breast Cancer Awareness Month. Bronze Medal winner in 2017 American Wine Society competition, Silver Medal winner in 2015 and Bronze Medal winner in 2014 at the Finger Lakes Wine competition!",
    price: '12.57',
    isAvailable: true
  },
  {
    name: "Cranberry Orange Mead / Fall Seasonal",
    color: ["cranberry", "#601830"],
    description: "We have taken the classic holiday flavors of Cranberry and Orange and created a new holiday tradition! This slightly sweet honey wine is bursting with flavor. Sweet, yet tart and tangy! A perfect complement to all of your holiday meals, from turkey dinner to baked ham. Or mix with sparkling wine for an unusual mimosa-type beverage for your holiday brunch!",
    price: '13.99',
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


db.Keywords.remove({}).then(
  db.Keywords.insertMany(keywordsSeed).then(resp => {
    console.log("Added keywords");
    db.Wines.remove({}).then((res, err) => {
      db.Wines.insertMany(winesSeed).then(resp => {
        console.log("Added wines");
        db.Rating.remove({}).then(
          db.Rating.insertMany(ratingsSeed).then(resp => {
            console.log("Added ratings");
            process.exit(0);
          }).catch(err => {
            console.log(`Error inserting ratings ${err}`);
          })
        );
      }).catch(err => {
        console.log(`Error inserting wines ${err}`);
      });
    });
  }).catch(err => {
    console.log(`Error inserting keywords ${err}`);
  })
);

