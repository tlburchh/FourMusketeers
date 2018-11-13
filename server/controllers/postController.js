const db = require("../models");

// Define methods for SETTING various data from the Users, Wines, etc collections
module.exports = {

    insert: (req, res) => {
        const wine = req.body;
        db.Colors.findOne({ color: wine.color }).then(resp => {
            wine.color = resp._id;
            wine.priceRegular = wine.price;
            wine.isAvailable = wine.available;
            db.Wines.create(wine).then(resp => {
                res.json({ message: "Added new wine.", resp: resp });
            }).catch(err => {
                console.log(err);
                res.json({ message: "Error adding new wine." });
            });
        }).catch(err => {
            console.log("Error getting color");
        });
    },

    rating: (req, res) => {
        const ratings = req.body.ratings;
        const selected = req.body.selected;
        insertRatings(ratings, selected, res);
    },

    wineOrder: (req, res) => {
        const wines = req.body;
        let orderIds = [];
        db.Order.find({}).then(order => {
            order.forEach(ord => {
                orderIds.push(ord._id);
            });
            wines.forEach((wine, i) => {
                db.Wines.findOneAndUpdate({ _id: wine._id },
                    {
                        order: orderIds[i]
                    }).then(resp => {
                        console.log(`Wine order changed`);
                        if (i === wines.length - 1) {
                            res.json({ message: "Wine order saved" });
                        }
                    }).catch(err => {
                        console.log(`Error saving new wine order`);
                    });
            });
        }).catch(err => {
            console.log(`Error getting order`);
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