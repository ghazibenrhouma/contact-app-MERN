const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/lister", contactController.listerContact);
router.post("/ajouter", contactController.ajouterContact);
router.put("/modifier/:id", contactController.modiferContact);
router.delete("/supprimer/:id", contactController.supprimerContact);

module.exports = router;
