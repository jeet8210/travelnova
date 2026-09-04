import DestinationCard from "./DestinationCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { getDestinations } from "../api/api.js";

const fallback = [
  {
    _id: "1",
    name: "Maldives",
    tagline: "Paradise on Earth",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop",
  },
  {
    _id: "2",
    name: "Switzerland",
    tagline: "Alpine Wonderland",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    _id: "3",
    name: "Bali",
    tagline: "Island of Gods",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
  },
  {
    _id: "4",
    name: "Dubai",
    tagline: "City of Dreams",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
  },
];

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState(fallback);

  useEffect(() => {
    getDestinations(true)
      .then((res) => {
        if (res.data && res.data.length) setDestinations(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="destinations" className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-semibold text-xl text-brand-dark">
          Popular Destinations
        </h2>
        <a
          href="#"
          className="text-brand text-sm font-medium flex items-center gap-1 hover:underline"
        >
          View all destinations <ArrowRight size={14} />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
