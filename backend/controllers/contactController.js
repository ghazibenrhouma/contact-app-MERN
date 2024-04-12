const contactModel = require("../models/Contact");

// Lister contact
exports.listerContact = (req, res) => {
  contactModel
    .find({})
    .exec()
    .then((contactList) => {
      res.status(200).json({ contactList });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Ajouter contact
exports.ajouterContact = (req, res) => {
  const contactObj = {
    nom: req.body.nom,
    tel: req.body.tel,
  };
  const contact = new contactModel(contactObj);

  contact
    .save()
    .then((createdList) => {
      res.status(200).json({ createdList });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Modifier contact
exports.modiferContact = (req, res) => {
  const param = req.params.id;
  contactModel
    .findByIdAndUpdate(param, req.body)
    .exec()
    .then(() => {
      res.status(200).json({ message: "contact modifié avec succés !!" });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Supprimer contact
exports.supprimerContact = (req, res) => {
  const param = req.params.id;
  contactModel
    .findByIdAndDelete(param)
    .exec()
    .then(() => {
      res.status(200).json({ message: "contact supprimé avec succés !" });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
