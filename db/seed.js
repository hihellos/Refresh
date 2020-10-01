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
                    taskName: "Refinish cabinets",
                    cost: 500
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
                    taskName: "Refinish bathtub",
                    cost: 500,
                },
                {
                    taskName: "Replace showerhead",
                    cost: 500,
                },
            ],
        },
        {
            roomName: "Bedroom", 
            image: "../public/assets/images/bedroom2.jpg", 
            tasks: [
                {
                    taskName: "New Paint",
                    cost: 200,
                },
                {
                    taskName: "Clean baseboards",
                    cost: 50,
                },
            ],
        },
        {
            roomName: "Laundry Room", 
            image: "../public/assets/images/laundryroom1.jpg", 
            tasks: [
                {
                    taskName: "Professional vent cleaning",
                    cost: 200,
                },
                {
                    taskName: "Deep clean washer",
                    cost: 100,
                },
                {
                    taskName: "New utility sink",
                    cost: 100,
                },
            ],
        },
        {
            roomName: "Living Room", 
            image: "../public/assets/images/livingroom1.jpg", 
            tasks: [
                {
                    taskName: "New paint",
                    cost: 500,
                },
                {
                    taskName: "Refinish floors",
                    cost: 1200,
                },
            ],
        },
        {
            roomName: "Garage", 
            image: "../public/assets/images/garage1.jpg", 
            tasks: [
                {
                    taskName: "Reorganize shelving",
                    cost: 100,
                },
                {
                    taskName: "Pressure wash floor",
                    cost: 200,
                },
            ],
        },
        {
            roomName: "Exterior", 
            image: "../public/assets/images/exterior1.jpg", 
            tasks: [
                {
                    taskName: "Pressure wash walkway, deck, driveway",
                    cost: 500,
                },
                {
                    taskName: "Add solar panels",
                    cost: 20000,
                },
                {
                    taskName: "Spruce up curb appeal",
                    cost: 100,
                },
            ],
        },
        {
            roomName: "Backyard", 
            image: "../public/assets/images/yard1.jpg", 
            tasks: [
                {
                    taskName: "Reseed grass",
                    cost: 200,
                },
                {
                    taskName: "Repair retaining wall",
                    cost: 500,
                },
                {
                    taskName: "Refinish fence",
                    cost: 500,
                },
            ],
        },
        {
            roomName: "Pool", 
            image: "../public/assets/images/pool1.jpg", 
            tasks: [
                {
                    taskName: "Drain and clean out filters",
                    cost: 700,
                },
                {
                    taskName: "Buy pool vacuum",
                    cost: 200,
                },
            ],
        },
        {
            roomName: "Basement", 
            image: "../public/assets/images/hvac.jpg", 
            tasks: [
                {
                    taskName: "Polish concrete",
                    cost: 400,
                },
                {
                    taskName: "Refelt pool table",
                    cost: 200,
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
