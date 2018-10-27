const db = require("../models");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {

    users: (req, res) => {
        console.log("Get all users");
        db.Users.find({}).then(users => {
            res.json(users);
        });
    },
    allWines: (req, res) => {
        console.log("Gettings all wines");
        db.Wines.find()
            // Include the keywords associated with it, excluding their IDs
            .populate({
                path: "keywords",
                select: "keyword -_id"
            })
            .populate({
                path: "ratings",
                select: "numericalRating -_id"
            })
            .then(wines => {
                res.json(wines);
            }).catch(err => {
                console.log(`Error: ${err}`);
                res.json({ message: "Error getting all the wines..." });
            });
    },
    currentWines: (req, res) => {
        console.log("Getting currently available wines");
        db.Wines.find().where('isAvailable').then(wines => {
            res.json(wines);
        }).catch(err => {
            console.log(`Error: ${err}`);
            res.json({ message: "Error getting current wines..." });
        });
    },
    wineById: (req, res) => {
        console.log(`Getting wine with id: ${req.params.id}`);
        const id = req.params.id;
        db.Wines.findById(id).then(wine => {
            res.json(wine);
        }).catch(err => {
            console.log(`Error: ${err}`);
            res.json({ message: "Error getting wine..." });
        });
    },
    ratings: (req, res) => {
        console.log("Getting all ratings");
        db.Ratings.find({}).then(ratings => {
            res.json(ratings);
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

};