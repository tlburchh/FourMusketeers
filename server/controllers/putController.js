const db = require("../models");

// Define methods for UPDATING various data from the Users, Wines, etc collections
module.exports = {

    wineById: (req, res) => {

        db.Colors.findOne({ color: req.body.color }).then(resp => {
            const wine = {
                name: req.body.name,
                description: req.body.description,
                priceRegular: req.body.price,
                isAvailable: req.body.available,
                color: resp._id
            }
            db.Wines.findOneAndUpdate({ _id: req.params.id }, wine).then(resp => {
                res.json({ message: "Updated wine.", resp: resp });
            }).catch(err => {
                console.log(err);
                res.json({ message: "Error updating wine." });
            });
        }).catch(err => {
            console.log("Error getting color");
        });

    }

};

// router.put("/wine/:id", putController.wineById);