import PackageCard from "./PackageCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Plane, Hotel, Utensils, Car, ArrowRight } from "lucide-react";
import { getPackages } from "../api/api.js";

const fallback = [
  {
    _id: "1",
    title: "Maldives Luxury Escape",
    days: 5,
    nights: 4,
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: true, transfers: true },
  },
  {
    _id: "2",
    title: "Greek Island Adventure",
    days: 7,
    nights: 6,
    price: 124999,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: true, transfers: true },
  },
  {
    _id: "3",
    title: "Switzerland Explorer",
    days: 6,
    nights: 5,
    price: 109999,
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: true, transfers: true },
  },
  {
    _id: "4",
    title: "Dubai Luxury Getaway",
    days: 4,
    nights: 3,
    price: 54999,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: false, transfers: true },
  },
];

const IncludeIcon = ({ active, icon: Icon }) => (
  <Icon size={14} className={active ? "text-slate-600" : "text-slate-300"} />
);

export default function FeaturedPackages() {
  const [packages, setPackages] = useState(fallback);

  useEffect(() => {
    getPackages()
      .then((res) => {
        if (res.data && res.data.length) setPackages(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="packages" className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-semibold text-xl text-brand-dark">
          Featured Packages
        </h2>
        <a
          href="#"
          className="text-brand text-sm font-medium flex items-center gap-1 hover:underline"
        >
          View all packages <ArrowRight size={14} />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg._id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
