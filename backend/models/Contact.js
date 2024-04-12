const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactObj = new Schema({
  nom: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("contacts", contactObj);

module.exports = model;
