const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const presetSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
    image: String,

    tasks: [
        {
        taskName: String,
        id: Number,
        cost: Number,
        isFixed: {
            type: Boolean,
            default: false
            }
        }
    ]
})

const Preset = mongoose.model("Preset", presetSchema);

module.exports = Preset;
