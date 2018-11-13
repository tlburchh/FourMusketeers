const db = require("../models");

// Define methods for SETTING various data from the Users, Wines, etc collections
module.exports = {

    insert: (req, res) => {
        const wine = req.body;
        db.Colors.findOne({ color: wine.color }).then(resp => {
            console.log(resp);
            wine.color = resp._id;
            wine.priceRegular = wine.price;
            db.Wines.create(wine).then(resp => {
                console.log("Added new wine.");
                res.json({ message: "Added new wine.", resp: resp });
            }).catch(err => {
                console.log(err);
                res.json({ message: "Error adding new wine." });
            });
        }).catch(err => {
            console.log("Error getting color");
        });

        // db.Wines.insertOne(wine).then(winesResp => {
        //     db.Keywords.insertMany(newKeyword).then(keywordResp => {
        //         res.json({ message: `New wine and keyword added.` });
        //     }).catch(keyWordErr => {
        //         console.log(`Error adding keyword: ${keyWordErr}`);
        //     });
        // }).catch(err => {
        //     console.log(`Error adding new wine: ${err}`);
        //     res.json({ message: `Error adding new wine` });
        // });
    },


    rating: (req, res) => {
        const ratings = req.body.ratings;
        const selected = req.body.selected;
        insertRatings(ratings, selected, res);
    },
    testRating: (req, res) => {
        const rating = {
            numericalRating: 3,
            keyWordRating: ["5bd29883900ee5754ffa2d8e", "5bd29883900ee5754ffa2d8e"],
            user: "5bd29883900ee5754ffa2d8e",
            wine: "5bd29883900ee5754ffa2d8e"
        };
        db.Rating.create(rating).then(resp => {
            res.json({ message: `Inserted test rating: ${resp}` });
        }).catch(err => {
            res.json({ message: `Error inserting test rating: ${err}` });
        });
    },

    testWine: (req, res) => {
        const wines = [
            {
                name: "Off dry ass",
                color: ["blue", "#ffee1a"],
                description: "This is the best mead",
                price: 14,
                isAvailable: true,
                keywords: ["5bd29f5a8f53e80822b007d6", "5bd29f5a8f53e80822b007d8"],
                ratings: ["5bd29d8d7fab1503b446cd15"]
            }
        ];
        db.Wines.insertMany(wines).then(resp => {
            res.json({ message: " inserted the wine" });
        }).catch(err => {
            res.json({ message: `Error: ${err}` });
        });
    },

    testKeyword: (req, res) => {
        const keywords = [
            {
                keyword: "badSour"
            },
            {
                keyword: "goodOaky"
            },
            {
                keyword: "badMoldy"
            },
            {
                keyword: "badHombres"
            }
        ];
        db.Keywords.insertMany(keywords).then(resp => {
            res.json({ message: "Inserted the flavours..." });
        }).catch(err => {
            res.json({ message: `Error: ${err}` });
        });
    }

}

// Helpers for insert ratings
insertRatings = (ratings, selected, res) => {
    // Insert the ratings
    // On callback, increment the wines selected for the tasting

    incrementTimesTasted(selected, res);
}

incrementTimesTasted = (selected, res) => {
    res.json({ message: "Submit ratings done!" });
}