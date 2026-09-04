import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Plane,
  Hotel,
  Utensils,
  Car,
  CheckCircle2,
} from "lucide-react";
import { getPackageById, createBooking } from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [pkg, setPkg] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getPackageById(id)
      .then((res) => setPkg(res.data))
      .catch(() => {
        setPkg({
          title: "Maldives Luxury Escape",
          days: 5,
          nights: 4,
          price: 79999,
          image:
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
          description: "Overwater villas and sunset cruises.",
          includes: {
            flights: true,
            hotel: true,
            meals: true,
            transfers: true,
          },
        });
      });
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();
    setError("");
    if (!user) {
      navigate("/login", { state: { from: `/packages/${id}` } });
      return;
    }
    if (!checkIn || !checkOut) {
      setError("Please select check-in and check-out dates.");
      return;
    }
    try {
      await createBooking({
        package: id,
        checkIn,
        checkOut,
        adults,
        children,
        totalPrice: pkg.price * adults,
      });
      setStatus("confirmed");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  if (!pkg)
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-slate-400">
        Loading…
      </div>
    );

  if (status === "confirmed") {
    return (
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
        <h1 className="font-display font-semibold text-2xl text-brand-dark mb-2">
          Booking request received
        </h1>
        <p className="text-slate-500 mb-6">
          We've reserved your spot for {pkg.title}. Our team will confirm final
          details by email shortly.
        </p>
        <Link
          to="/my-bookings"
          className="bg-brand hover:bg-brand-light transition text-white rounded-full px-6 py-3 font-semibold inline-block"
        >
          View My Bookings
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <Link
        to="/packages"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand mb-6"
      >
        <ArrowLeft size={14} /> Back to packages
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="relative rounded-3xl overflow-hidden mb-8">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-[450px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                ✈️ Premium Package
              </span>

              <h1 className="text-5xl font-bold mt-4">{pkg.title}</h1>

              <p className="mt-2 text-lg text-slate-200">
                {pkg.days} Days • {pkg.nights} Nights
              </p>
            </div>
          </div>

          <p className="text-slate-600 mb-6">{pkg.description}</p>

          {/* Itinerary */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Day-wise Itinerary</h2>

            <div className="space-y-5">
              <div className="border rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg text-blue-600">
                  Day 1 - Arrival
                </h3>

                <p className="text-slate-600 mt-2">
                  Airport pickup, hotel check-in and evening sightseeing.
                </p>
              </div>

              <div className="border rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg text-blue-600">
                  Day 2 - City Tour
                </h3>

                <p className="text-slate-600 mt-2">
                  Visit famous attractions with breakfast and guided tour.
                </p>
              </div>

              <div className="border rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg text-blue-600">
                  Day 3 - Adventure
                </h3>

                <p className="text-slate-600 mt-2">
                  Water sports, local food and evening cultural activities.
                </p>
              </div>

              <div className="border rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg text-blue-600">
                  Day 4 - Leisure
                </h3>

                <p className="text-slate-600 mt-2">
                  Free day for shopping, beach or relaxing at the resort.
                </p>
              </div>

              <div className="border rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg text-blue-600">
                  Day 5 - Departure
                </h3>

                <p className="text-slate-600 mt-2">
                  Breakfast, hotel checkout and airport transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Hotel Information */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Hotel Information</h2>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600">
                ⭐ 5-Star Luxury Resort
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Stay in a premium beachfront resort with spacious rooms,
                swimming pool, spa, free Wi-Fi, complimentary breakfast, gym
                access and 24×7 room service.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 rounded-xl p-4">
                  🛏 Deluxe Ocean View Room
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  🍽 Complimentary Breakfast
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  🏊 Swimming Pool Access
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  📶 Free High-Speed Wi-Fi
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-semibold text-slate-800 mb-3">What's included</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { icon: Plane, label: "Flights", active: pkg.includes?.flights },
              { icon: Hotel, label: "Hotel", active: pkg.includes?.hotel },
              { icon: Utensils, label: "Meals", active: pkg.includes?.meals },
              {
                icon: Car,
                label: "Transfers",
                active: pkg.includes?.transfers,
              },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`border rounded-xl p-3 text-center text-xs font-medium ${active ? "border-brand/30 text-brand bg-blue-50" : "border-slate-100 text-slate-300"}`}
              >
                <Icon size={18} className="mx-auto mb-1" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 h-fit sticky top-24">
          <div className="mb-6 text-center">
            <div className="text-4xl font-extrabold text-blue-600">
              ₹{pkg.price?.toLocaleString("en-IN")}
            </div>
            <div className="text-sm text-slate-500 mt-1">
              Per Person / Inclusive of Taxes
            </div>
          </div>
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="text-xs text-slate-500 block mb-1">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand"
                required
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 block mb-1">
                  Adults
                </label>
                <input
                  type="number"
                  min={1}
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">
                  Children
                </label>
                <input
                  type="number"
                  min={0}
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand"
                />
              </div>
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-sm">
              <span className="text-slate-500">Total</span>
              <span className="font-bold text-brand-dark">
                ₹{(pkg.price * adults).toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-light transition text-white rounded-full py-3 font-semibold"
            >
              {user ? "Confirm Booking" : "Login to Book"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
