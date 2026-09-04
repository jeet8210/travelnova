import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String },
    country: { type: String },
    image: { type: String, required: true },
    rating: { type: Number, default: 4.5 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Destination", destinationSchema);
