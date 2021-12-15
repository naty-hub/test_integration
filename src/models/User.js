const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  mail: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
});

module.exports = mongoose.model('User', userSchema);