const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    stockSymbol: { type: String, required: true },
    quantity: { type: Number, required: true },
    averagePrice: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', PortfolioSchema);
