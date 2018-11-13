const db = require("../models");
// const seedStuff = require("../scripts/seedDB");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {

    users: (req, res) => {
        db.Users.find({}).then(users => {
            res.json(users);
        });
    },
    allWines: (req, res) => {
        db.Wines.find()
            // Include the keywords associated with it, excluding their IDs
            .populate({
                path: "keywords",
                select: "keyword -_id"//getting the keyword without the id.
            })
            .populate({
                path: "ratings",
                select: "numericalRating -_id"
            })
            .populate({
                path: 'color',
                select: "color -_id"
            })
            .then(wines => {
                res.json(wines);
            }).catch(err => {
                console.log(`Error: ${err}`);
                res.json({ message: "Error getting all the wines..." });
            });
    },
    wineById: (req, res) => {
        const id = req.params.id;
        db.Wines.findById(id).then(wine => {
            res.json(wine);
        }).catch(err => {
            console.log(`Error: ${err}`);
            res.json({ message: "Error getting wine..." });
        });
    },
    ratings: (req, res) => {
        db.Ratings.find({}).then(ratings => {
            res.json(ratings);
        });
    },
    currentWines: (req, res) => {
        db.Wines.find({
            isAvailable: true
        })
            // Include the keywords associated with it, excluding their IDs
            .populate({
                path: "keywords",
                select: "keyword -_id"
            })
            .populate({
                path: 'color',
                select: "color -_id"
            })
            .then(results => {
                res.json(results);
            }).catch(err => {
                console.log(err);
                res.json({ message: `Error occurred: ${err}` });
            });
    },
    keywords: (req, res) => {
        db.Keywords.find({})
            .populate({
                path: "wines",
                select: "name -_id"
            })
            .then(keywords => {
                res.json(keywords);
            });
    },
    seed: (req, res) => {
        console.log("Seeding DB");
        require("../scripts/seedDB")(res);
    },
    colors: (req, res) => {
        db.Colors.find({})
            .then(colors => {
                res.json({ colors: colors });
            }).catch(err => {
                console.log("Error getting colors from DB");
            });
    }

};