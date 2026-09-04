import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Star,
  Users,
  Play,
  MapPin,
  Calendar,
  User,
  Search,
} from "lucide-react";
import heroImage from "../assets/images/hero/hero1.jpg";

export default function Hero() {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      destination
        ? `/destinations?q=${encodeURIComponent(destination)}`
        : "/destinations",
    );
  };

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white z-10">
          <span className="inline-block text-xs font-semibold tracking-wide bg-white/10 text-blue-200 rounded-full px-4 py-1.5 mb-5">
            WELCOME TO TRAVELNOVA
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
            Discover
            <br />
            <span className="text-brand-light">Extraordinary</span>
            <br />
            Journeys
          </h1>
          <p className="text-slate-300 max-w-md mb-8">
            Luxury AI-powered travel experiences crafted for unforgettable
            adventures.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/packages"
              className="bg-brand hover:bg-brand-light transition rounded-full px-6 py-3 font-semibold flex items-center gap-2"
            >
              Explore Tours <ArrowRight size={16} />
            </Link>
            <Link
              to="/destinations"
              className="border border-white/30 hover:border-white transition rounded-full px-6 py-3 font-semibold flex items-center gap-2"
            >
              <Sparkles size={16} /> Plan My Trip
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <div className="text-sm">
                <div className="font-semibold">4.9 Rating</div>
                <div className="text-slate-300 text-xs">
                  From 20K+ Travelers
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-2">
              <Users size={18} />
              <div className="text-sm">
                <div className="font-semibold">20K+</div>
                <div className="text-slate-300 text-xs">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={heroImage}
            alt="TravelNova Hero"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full pl-2 pr-4 py-2 text-sm font-medium">
            <span className="bg-brand text-white rounded-full p-1.5">
              <Play size={12} fill="white" />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative -mt-14 z-20">
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl shadow-2xl p-4 grid lg:grid-cols-5 gap-4 items-center"
        >
          <div className="flex items-center gap-2 px-2">
            <MapPin className="text-brand shrink-0" size={18} />
            <div className="text-sm">
              <div className="text-slate-400 text-xs">Destination</div>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="outline-none w-full text-slate-800 font-medium placeholder:text-slate-800 placeholder:font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 px-2 sm:border-l sm:pl-4">
            <Calendar className="text-brand shrink-0" size={18} />
            <div className="text-sm">
              <div className="text-slate-400 text-xs">Check-in</div>
              <div className="font-medium text-slate-800">Select date</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-2 sm:border-l sm:pl-4">
            <Calendar className="text-brand shrink-0" size={18} />
            <div className="text-sm">
              <div className="text-slate-400 text-xs">Check-out</div>
              <div className="font-medium text-slate-800">Select date</div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-2 sm:border-l sm:pl-4">
            <User className="text-brand shrink-0" size={18} />
            <div className="text-sm">
              <div className="text-slate-400 text-xs">Guests</div>
              <div className="font-medium text-slate-800">
                2 Adults · 0 Children
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-brand hover:bg-brand-light transition text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
          >
            <Search size={16} /> Search
          </button>
        </form>
      </div>
    </section>
  );
}
