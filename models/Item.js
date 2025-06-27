
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }], // Cloudinary URLs
  priceStart: { type: Number, required: true }, // starting price
  category: { type: String, required: true }, // e.g., books, gadgets
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  auction: { type: mongoose.Schema.Types.ObjectId, ref: "Auction" }, // linked auction
  status: {
    type: String,
    enum: ["available", "sold", "expired"],
    default: "available"
  }
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema);
export default Item;
