const db = require("../models");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {

    users: (req, res) => {
        console.log("Get all users");
        db.Users.find({}).then(users => {
            res.json(users);
        });
    },
    ratings: (req, res) => {
        console.log("Getting all reviews");
        db.Ratings.find({}).then(ratings => {
            res.json(ratings);
        });
    },
    wines: (req, res) => {
        console.log("Gettings all wines");
        db.Wines.find({}).then(wines => {
            res.json(wines);
        });
    },
    currentWines: (req, res) => {
        console.log("Getting available wines");
        db.Wines.find(
            {
                where
            }
        )
    },
    keywords: (req, res) => {
        console.log("Getting all keywords");
        db.Keywords.find({}).then(keywords => {
            res.json(keywords);
        });
    }

}