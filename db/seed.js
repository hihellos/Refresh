let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/homeimprovement", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let homeSeed = [
        {
            roomName: "Kitchen", 
            image: "../public/assets/images/kitchen1.jpg",
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
            image: "../public/assets/images/bathroom1.jpg", 
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
            image: "../public/assets/images/bedroom2.jpg", 
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
            image: "../public/assets/images/laundryroom1.jpg", 
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
            image: "../public/assets/images/livingroom1.jpg", 
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
            image: "../public/assets/images/garage1.jpg", 
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
            image: "../public/assets/images/exterior1.jpg", 
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
            image: "../public/assets/images/yard1.jpg", 
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
            image: "../public/assets/images/pool1.jpg", 
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
            image: "../public/assets/images/hvac.jpg", 
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
