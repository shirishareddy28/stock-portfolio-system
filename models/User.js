
const mongoose = require('mongoose');

// Define the schema for the 'users' collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    portfolioValue: { type: Number, default: 0 }
});

// Create a model for the 'users' collection based on the schema
const User = mongoose.model('User', userSchema);

// Export the model so it can be used in routes or controllers
module.exports = User;

