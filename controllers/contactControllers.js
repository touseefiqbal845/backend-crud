const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// des Get Contacts
// route Get api/contacts
// access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// des Get Contact
// route Get api/contacts/:id
// access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});
// des Post Contact
// route Get api/contacts
// access public

const postContact = asyncHandler(async (req, res) => {
  console.log("body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email | !phone) {
    res.status(400);
    throw new Error("All Fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});
// des Post Contact
// route Get api/contacts/:id
// access public

const putContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateContact);
});
// des Delete Contact
// route Get api/contacts/:id
// access public

const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact Not Found");
    }

    // await contact.remove(); // Use contact instance to remove the document
    res.status(200).json(contact);
  } catch (error) {
    console.error("Error deleting contact:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});
module.exports = {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
};
