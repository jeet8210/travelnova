import { Link } from "react-router-dom";
import {
  Plane,
  Hotel,
  Utensils,
  Car,
  Heart,
  Star,
  MapPin,
} from "lucide-react";

const IncludeIcon = ({ active, icon: Icon }) => (
  <Icon
    size={15}
    className={active ? "text-blue-600" : "text-slate-300"}
  />
);

export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Discount */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          20% OFF
        </span>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          <Heart size={18} />
        </button>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow">
          <Star
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />
          4.9
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-800">
          {pkg.title}
        </h2>

        <p className="flex items-center gap-2 text-slate-500 mt-2">
          <MapPin size={15} />
          Luxury Holiday Package
        </p>

        <p className="text-sm text-slate-400 mt-3">
          {pkg.days} Days • {pkg.nights} Nights
        </p>

        <div className="flex gap-4 mt-5">
          <IncludeIcon
            active={pkg.includes?.flights}
            icon={Plane}
          />
          <IncludeIcon
            active={pkg.includes?.hotel}
            icon={Hotel}
          />
          <IncludeIcon
            active={pkg.includes?.meals}
            icon={Utensils}
          />
          <IncludeIcon
            active={pkg.includes?.transfers}
            icon={Car}
          />
        </div>

        <div className="flex items-center justify-between mt-8">
          <div>
            <p className="text-sm text-slate-400">
              Starting From
            </p>

            <h3 className="text-3xl font-bold text-blue-600">
              ₹{pkg.price?.toLocaleString("en-IN")}
            </h3>

            <span className="text-xs text-slate-400">
              per person
            </span>
          </div>

          <Link
            to={`/packages/${pkg._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-semibold transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}