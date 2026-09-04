import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination" },
    image: { type: String, required: true },
    days: { type: Number, required: true },
    nights: { type: Number, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    includes: {
      flights: { type: Boolean, default: true },
      hotel: { type: Boolean, default: true },
      meals: { type: Boolean, default: false },
      transfers: { type: Boolean, default: true },
    },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Package", packageSchema);
