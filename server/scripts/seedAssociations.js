const mongoose = require("mongoose");
const db = require("../models");

// This associates the seed data

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

// let userId;
let wineIds = [];
let keywordIds = [];
// let ratingIds = [];


// Save all the IDs in arrays
db.User.find({}).then(users => {
    userId = users[0].id;
});

getRandomWine = () => {
    const len = wineIds.length;
    const rand = Math.floor(Math.random() * len);
    return wineIds[rand];
}
getRandomKw = () => {
    const len = keywordIds.length;
    const rand = Math.floor(Math.random() * len);
    return keywordIds[rand];
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
        }).catch((err) => { console.log(err); })
    });
}
// Put keywords in each wine's 'keywords' array
addWineFlavors = () => {
    wineIds.forEach(wine => {
        db.Wines.findByIdAndUpdate(wine,
            {
                $push: {
                    keywords: getRandomKw()
                }
            }
        ).then(result => {
        }).catch((err) => { console.log(err); })
    });
}

function doItAll() {
    // Get the wines, save em. Then Get the keywords and push a random wine into its array
    // Then push a keyword to each wine...
    db.Wines.find({}).then(wines => {
        wines.forEach(wine => {
            wineIds.push(wine.id);
        });
        console.log(wineIds);
        db.Keywords.find({}).then(keywords => {
            keywords.forEach(keyword => {
                keywordIds.push(keyword.id);
            });
            console.log(keywordIds);
            assKeys();
            addWineFlavors();
        });
    });
}

module.exports = {
    doItAll: doItAll
}