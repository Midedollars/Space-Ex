const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
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
const usersModel = mongoose.model("Users", usersSchema);

// to make the mmodel accessible to other files
module.exports = usersModel;
