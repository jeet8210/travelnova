import { Link } from "react-router-dom";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination._id}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
          <Star
            size={14}
            className="text-yellow-500 fill-yellow-500"
          />
          <span className="text-sm font-semibold">
            {destination.rating}
          </span>
        </div>

        {/* Country */}
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-2">
          <MapPin size={14} />
          {destination.name}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-900">
          {destination.name}
        </h3>

        <p className="text-slate-500 mt-2">
          {destination.tagline}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-5">

          <div>
            <p className="text-xs text-slate-400">
              Starting From
            </p>

            <h4 className="text-blue-600 font-bold text-xl">
              ₹24,999
            </h4>
          </div>

          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <Clock size={15} />
            5 Days
          </div>

        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold flex justify-center items-center gap-2 transition">
          Explore
          <ArrowRight size={18} />
        </button>

      </div>
    </Link>
  );
}