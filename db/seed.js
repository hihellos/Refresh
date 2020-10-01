let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/homeimprovement", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let homeSeed = [
        {
            roomName: "Kitchen", 
            image: "./assets/images/kitchen1.jpg",
            tasks: [
                {
                    taskName: "Refinish cabinets",                    cost: 500
                },
                {
                    taskName: "Add recessed lighting",
                    cost: 500
                },
                {
                    taskName: "New fridge",
                    cost: 1200
                },
            ],
        },
        {
            roomName: "Bathroom", 
            image: "./assets/images/bathroom1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Bedroom", 
            image: "./assets/images/bedroom2.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Laundry Room", 
            image: "./assets/images/laundryroom1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Living Room", 
            image: "./assets/images/livingroom1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Garage", 
            image: "./assets/images/garage1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Exterior", 
            image: "./assets/images/exterior1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Backyard", 
            image: "./assets/images/yard1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Pool", 
            image: "./assets/images/pool1.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },
        {
            roomName: "Basement", 
            image: "./assets/images/hvac.jpg", 
            tasks: [
                {
                    taskName: "Refinish bathtub",                    cost: 500,
                    isFixed: false
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                    isFixed: false
                },
            ],
        },

];

db.Preset.deleteMany({})
  .then(() => db.Preset.insertMany(homeSeed))
  .then(data => {
    console.log(" records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
