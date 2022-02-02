const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  aptImage: {
    type: String,
    required: true,
  },

  emailAddress: {
    type: String,
    required: true,
  },

  apartmentName: {
    type: String,
    required: true,
  },
  
  address: {
      type: String,
      required: true,
  }
});

// converting the schema to a model
const apartmentModel = mongoose.model("Apartments", userSchema);

// to make the mmodel accessible to other files
module.exports = apartmentModel;
