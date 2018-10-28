const mongoose = require("mongoose");
const db = require("../models");

// This associates the seed data

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

let userId;
let wineIds = [];
let keywordIds = [];
let ratingIds = [];


// Save all the IDs in arrays
db.User.find({}).then(users => {
    userId = users[0].id;
    // console.log(userId);
});

db.Wines.find({}).then(wines => {
    wines.forEach(wine => {
        wineIds.push(wine.id);
    });
});

db.Keywords.find({}).then(keywords => {
    keywords.forEach(kw => {
        keywordIds.push(kw.id);
        assKeys();
    });
});

db.Rating.find({}).then(ratings => {
    ratings.forEach(rating => {
        ratingIds.push(rating.id);
    });
});

getRandomWine = () => {
    const len = wineIds.length;
    const rand = Math.floor(Math.random() * len);
    return wineIds[rand];
}

assKeys = () => {
    keywordIds.forEach(keyword => {
        db.Keywords.findByIdAndUpdate(keyword,
            {
                $push: {
                    wines: getRandomWine()
                }
            }
        ).then(result => {
            console.log(result);
            process.exit(0);
        }).catch((err) => { console.log(err); })
    });
}
