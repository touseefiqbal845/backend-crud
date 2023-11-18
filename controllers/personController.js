const asyncHandler = require("express-async-handler");
const Person = require("../models/personModel");




const postPerson = asyncHandler(async (req, res) => {
  console.log("body is ", req.body);
  const { age, name, weight } = req.body;
  if (!age || !name || !weight) {
    res.status(400);
    throw new Error("All Fields are mandatory");
  }
  const person = await Person.create({
    age,
    name,
    weight,
  });

//   // Combine the newly created person and sorted people in a single response
//   const response = {
//     person: person,
//     sortedPeople: sortedPeople,
//   };

// const iterations = 5;

// // Create Person documents and sort them
// for (let i = 0; i < iterations; i++) {
//   await Person.create({
//     age: Math.abs(2 - i),
//     name: 'Test' + i,
//     weight: Math.floor(Math.random() * 100) + 1
//   });
//   const sortedPeople = await Person.find().sort({ age: 1, weight: -1 });

// }
const { id } = req.params;
const deletedPerson = await Person.findByIdAndDelete(id);
 res.status(201).json(deletedPerson);
});



module.exports = { postPerson };
