const mongoose = require("mongoose");
const db = require("../models");

// This associates the seed data

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wino", { useNewUrlParser: true });

