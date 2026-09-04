import { Link } from "react-router-dom";
import {
  Heart,
  Plane,
  Hotel,
  Utensils,
  Car,
  Star,
  MapPin,
} from "lucide-react";

const IncludeIcon = ({ active, icon: Icon }) => (
  <Icon
    size={16}
    className={active ? "text-blue-600" : "text-slate-300"}
  />
);

export default function PackageCard({ pkg }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Image */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Discount */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          20% OFF
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-red-50">
          <Heart size={18} />
        </button>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
          <Star
            size={14}
            className="text-yellow-500 fill-yellow-500"
          />
          <span className="text-sm font-semibold">4.9</span>
        </div>

      </div>

      {/* Content */}

      <div className="p-5">

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
          <MapPin size={15} />
          Maldives
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {pkg.title}
        </h3>

        <p className="text-slate-500 mt-2">
          {pkg.days} Days • {pkg.nights} Nights
        </p>

        {/* Includes */}

        <div className="flex items-center gap-4 mt-5">

          <IncludeIcon active={pkg.includes?.flights} icon={Plane} />
          <IncludeIcon active={pkg.includes?.hotel} icon={Hotel} />
          <IncludeIcon active={pkg.includes?.meals} icon={Utensils} />
          <IncludeIcon active={pkg.includes?.transfers} icon={Car} />

        </div>

        {/* Price */}

        <div className="mt-6">

          <p className="text-slate-400 line-through">
            ₹99,999
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            ₹{pkg.price.toLocaleString("en-IN")}
          </h2>

          <p className="text-xs text-slate-400">
            Per Person
          </p>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-3 mt-6">

          <Link
            to={`/packages/${pkg._id}`}
            className="border border-blue-600 text-blue-600 rounded-xl py-3 text-center font-semibold hover:bg-blue-50 transition"
          >
            Explore
          </Link>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
          >
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
}