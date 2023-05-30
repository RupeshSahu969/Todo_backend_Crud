const mongoose = require("mongoose");
// require("dotenv").config();

// const connection = mongoose.connect("mongodb+srv://rupeshsahukumar80:Rupeshsahu%401234@cluster0.i9cbi61.mongodb.net/Todoapp?retryWrites=true&w=majority");

const connection=mongoose.connect("mongodb+srv://rupeshsahukumar80:Rupeshsahu%401234@cluster0.i9cbi61.mongodb.net/Tododapp?retryWrites=true&w=majority")

module.exports = {
  connection,
};
