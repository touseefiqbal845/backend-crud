const mongoose = require ("mongoose");


const personSchema = mongoose.Schema({
    age: {
        type: Number,
        required: [true, "Please add Age"],
    },
    name: {
        type: String,
        required: [true, "Please add name"],
    },
    weight: {
        type: Number,
        required: [true, "Please add Weight "],
      },
}, {
    timestamps: true,
})
module.exports = mongoose.model("Person",personSchema);


