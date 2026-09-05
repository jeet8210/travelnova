import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, MapPin, Search } from "lucide-react";
import { getDestinations } from "../api/api.js";

export default function Destinations() {
  const [searchParams] = useSearchParams();
  const [destinations, setDestinations] = useState([]);
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    getDestinations()
      .then((res) => {
        setDestinations(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to load destinations:", err);
        setDestinations([]);
      });
  }, []);

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="relative rounded-3xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
          alt="Travel Banner"
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-5">
            Explore The World's <br />
            Best Destinations
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Discover amazing places, luxury resorts and unforgettable
            adventures across the globe.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your dream destination..."
            className="w-full bg-white rounded-full border border-slate-200 py-4 pl-14 pr-5 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <Link
            key={d._id}
            to={`/destinations/${d._id}`}
            className="relative rounded-2xl overflow-hidden h-60 group block"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <span className="absolute top-3 right-3 bg-white/90 text-xs font-semibold rounded-full px-2 py-1 flex items-center gap-1">
              <Star
                size={12}
                className="text-yellow-500 fill-yellow-500"
              />
              {d.rating}
            </span>

            <div className="absolute bottom-3 left-3 text-white">
              <div className="font-semibold flex items-center gap-1">
                <MapPin size={14} />
                {d.name}
              </div>

              <div className="text-xs text-slate-200">
                {d.tagline}
              </div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="text-slate-400 text-sm col-span-full text-center py-10">
            No destinations found.
          </p>
        )}
      </div>
    </section>
  );
}