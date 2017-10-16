const mongoose = require('mongoose');
const { Schema } = mongoose;

// No need to export mongoose code. Mongoose can be confused when trying
// to create multiple models with same name
const userSchema = new Schema({
  googleId: String,
  credits: {type: Number, default: 0}
});

mongoose.model('users', userSchema);
