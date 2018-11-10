const db = require("../models");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {

    insert: (req, res) => {
        const newWine = {
            name: req.body.name,
            color: req.body.color,
            description: req.body.description,
            priceRegular: req.body.priceRegular
        };

        const newKeyword = {
            keyword: req.body.keyword,
            isGood: req.body.isGood
        };

        db.Wines.insertMany(newWine).then(winesResp => {
            console.log(`Inserted new wine: ${winesResp}`);
            db.Keywords.insertMany(newKeyword).then(keywordResp => {
                console.log(`Inserted new keyword : ${keywordResp}.`)
                res.json({message: `New wine and keyword added.`});
            }).catch(keyWordErr => {
                console.log(`Error adding keyword: ${keyWordErr}`);
            });
            
        }).catch(err => {
            console.log(`Error adding new wine: ${err}`);
            res.json({message: `Error adding new wine`});
        });
    },


    rating: (req, res) => {
        const rating = req.body;
        console.log(rating);
        res.json({message: "rating received"});
        // db.Rating.insert(rating).then(resp => {
        //     console.log(`Inserted rating: ${resp}`);
        //     res.json({ message: "Successfully saved rating." })
        // }).catch(err => {
        //     console.log(`Error saving rating: ${err}`);
        //     res.json({ message: `Error saving rating: ${err}` })
        // });

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