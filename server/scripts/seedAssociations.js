const mongoose = require("mongoose");
const db = require("../models");

// This associates the seed data

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

let wineIds = [];
let keywordIds = [];


// Get the wines, save em. Then Get the keywords and push a random wine into its array
// Then push a keyword to each wine...
db.Wines.find({}).then(wines => {
    wines.forEach(wine => {
        wineIds.push(wine.id);
    });
    console.log("Got wine IDs");
    db.Keywords.find({}).then(keywords => {
        keywords.forEach(keyword => {
            keywordIds.push(keyword.id);
        });
        console.log("Got keyword IDs");
        assKeys();
    });
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

getManyKws = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(getRandomKw());
    }
    console.log(`Keywords: ${arr}`, arr);
    return arr;
}

assKeys = () => {
    keywordIds.forEach(keyword => {
        db.Keywords.findOneAndUpdate({ _id: keyword },
            {
                $push: {
                    wines: getRandomWine()
                }
            }
        ).then(result => {
            console.log("Added the wines to keyword");
            addWineFlavors();
        }).catch((err) => { console.log(err); })
    });
}
// Put keywords in each wine's 'keywords' array
addWineFlavors = () => {
    wineIds.forEach(wine => {
        db.Wines.findOneAndUpdate({ _id: wine },
            {
                $push: {
                    keywords: getRandomKw()
                }
            }
        ).then(result => {
            console.log("Added keywords to wines");
            process.exit(0);
        }).catch((err) => { console.log(err); })
    });
}
