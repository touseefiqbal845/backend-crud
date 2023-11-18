const express = require("express");
const { postPerson } = require("../controllers/personController");

const router = express.Router();

router.post("/register", postPerson);
router.route("/:id").post(postPerson);

module.exports = router;
