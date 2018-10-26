const db = require("../models");

// Define methods for GETTING various data from the Users, Wines, etc collections
module.exports = {

    review: (req, res) => {
        const review = req.body;
        db.Rating.insert(review).then(resp => {
            console.log(`Inserted rating: ${resp}`);
            res.json({ message: "Successfully saved rating." })
        }).catch(err => {
            console.log(`Error saving rating: ${err}`);
            res.json({ message: `Error saving rating: ${err}` })
        });

    }

}