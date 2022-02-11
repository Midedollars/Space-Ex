const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a schema for user
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  
  phoneNumber: {
      type: String,
      required: true,
  }
});

// converting the schema to a model
const userModel = mongoose.model("User", userSchema);

// to make the mmodel accessible to other files
module.exports = userModel;
