let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/homeimprovement", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let homeSeed = [
    
]