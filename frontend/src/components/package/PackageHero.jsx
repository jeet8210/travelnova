import { Link } from "react-router-dom";

export default function PackageHero() {
  return (
    <section className="relative rounded-3xl overflow-hidden h-[500px] mb-12">

      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
        alt="Travel Packages"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

        <span className="bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg mb-6">
          ✈️ TRAVELNOVA EXCLUSIVE
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Discover Amazing
          <br />
          Travel Packages
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-slate-200 leading-8 mb-10">
          Handpicked luxury holidays, adventure trips, honeymoon escapes,
          family vacations and unforgettable experiences at unbeatable prices.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">

          <Link
            to="/packages"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            Explore Packages
          </Link>

          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-slate-900 transition px-8 py-4 rounded-full font-semibold"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}