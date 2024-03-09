const express = require("express");
const router = express.Router();
const{
    getContacts , 
    createContact, 
    getContact,
    updateContact, 
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken); // it will validate token for all the routes,

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;
