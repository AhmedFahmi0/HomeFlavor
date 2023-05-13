// Requires
const mongoose = require("mongoose");
const { Schema } = mongoose;
const dotenv = require("dotenv").config();

// Connect to DB
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

//Stores schema
let FeedBackSchema = new mongoose.Schema({
  store_id: {
    type: Schema.Types.ObjectId,
    ref: "stores",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    // type: String,
  },
  comment: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  stars: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
});

//Export to controller
module.exports = mongoose.model("feedbacks", FeedBackSchema);
