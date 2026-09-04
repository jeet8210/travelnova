import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  ArrowLeft,
  Clock,
  Plane,
  Hotel,
  Utensils,
  Camera,
  ShieldCheck,
} from "lucide-react";
import { getDestinationById, getPackages } from "../api/api.js";

export default function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [packages, setPackages] = useState([]);
  const gallery = [
  destination?.image,
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
];

  useEffect(() => {
    getDestinationById(id)
      .then((res) => setDestination(res.data))
      .catch(() => {
        setDestination({
          name: "Maldives",
          tagline: "Paradise on Earth",
          country: "Maldives",
          rating: 4.9,
          image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
        });
      });
    getPackages()
      .then((res) => setPackages(res.data))
      .catch(() => {});
  }, [id]);

  if (!destination)
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-slate-400">
        Loading…
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <Link
        to="/destinations"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand mb-6"
      >
        <ArrowLeft size={14} /> Back to destinations
      </Link>

      <div className="relative rounded-3xl overflow-hidden h-80 mb-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="font-display font-bold text-3xl mb-1">
            {destination.name}
          </h1>
          <p className="flex items-center gap-2 text-sm text-slate-200">
            <MapPin size={14} /> {destination.country} ·{" "}
            <Star size={14} className="text-yellow-400 fill-yellow-400" />{" "}
            {destination.rating}
          </p>
        </div>
      </div>

      <p className="text-slate-600 max-w-2xl mb-10">
        {destination.tagline}. Discover breathtaking scenery, world-class
        hospitality, and unforgettable experiences curated by TravelNova's local
        experts.
      </p>

      <h2 className="font-display font-semibold text-xl text-brand-dark mb-5">
        Packages for {destination.name}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.slice(0, 3).map((p) => (
          <Link
            key={p._id}
            to={`/packages/${p._id}`}
            className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition block"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm text-slate-800 mb-1">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 mb-2">
                {p.days} Days · {p.nights} Nights
              </p>
              <div className="font-bold text-brand-dark">
                ₹{p.price?.toLocaleString("en-IN")}
              </div>
            </div>
          </Link>
        ))}
        {packages.length === 0 && (
          <p className="text-slate-400 text-sm">No packages available yet.</p>
        )}
      </div>
    </section>
  );
}
