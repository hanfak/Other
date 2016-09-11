var mongoose  = require("mongoose");

var ContactSchema  = {
  name:  String,
  email: String,
  number: String
};

mongoose.model("Contact", ContactSchema);
mongoose.connect("mongodb://localhost/contact");
module.exports = mongoose;
