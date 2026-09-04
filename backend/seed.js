import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Destination from "./models/Destination.js";
import Package from "./models/Package.js";

dotenv.config();
connectDB();

const destinations = [
  { name: "Maldives", tagline: "Paradise on Earth", country: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8", rating: 4.9, featured: true },
  { name: "Switzerland", tagline: "Alpine Wonderland", country: "Switzerland", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7", rating: 4.9, featured: true },
  { name: "Bali", tagline: "Island of Gods", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", rating: 4.7, featured: true },
  { name: "Dubai", tagline: "City of Dreams", country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", rating: 4.8, featured: true },
];

const seed = async () => {
  try {
    await Destination.deleteMany();
    await Package.deleteMany();
    const created = await Destination.insertMany(destinations);

    const packages = [
      { title: "Maldives Luxury Escape", destination: created[0]._id, image: created[0].image, days: 5, nights: 4, price: 79999, includes: { flights: true, hotel: true, meals: true, transfers: true }, description: "Overwater villas and sunset cruises." },
      { title: "Switzerland Explorer", destination: created[1]._id, image: created[1].image, days: 6, nights: 5, price: 109999, includes: { flights: true, hotel: true, meals: true, transfers: true }, description: "Scenic trains through the Alps." },
      { title: "Greek Island Adventure", destination: created[2]._id, image: created[2].image, days: 7, nights: 6, price: 124999, includes: { flights: true, hotel: true, meals: true, transfers: true }, description: "Whitewashed villages and blue seas." },
      { title: "Dubai Luxury Getaway", destination: created[3]._id, image: created[3].image, days: 4, nights: 3, price: 54999, includes: { flights: true, hotel: true, meals: false, transfers: true }, description: "Skyline views and desert safaris." },
    ];
    await Package.insertMany(packages);

    console.log("Seed data inserted");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
