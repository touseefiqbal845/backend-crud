const express= require ("express");
const router = express.Router();
const {getContacts,getContact,postContact,putContact,deleteContact }= require("../controllers/contactControllers")

router.route("/").get(getContacts).post(postContact);
router.route("/:id").put(putContact).get(getContact).delete(deleteContact);

module.exports = router;