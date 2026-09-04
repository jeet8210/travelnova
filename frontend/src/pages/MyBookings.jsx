import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Calendar, Users } from "lucide-react";
import { getMyBookings } from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function MyBookings() {
  const { user, loading: authLoading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    getMyBookings()
      .then((res) => setBookings(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [user]);

  if (authLoading) return null;
  if (!user) return <Navigate to="/login" state={{ from: "/my-bookings" }} replace />;

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-display font-semibold text-2xl text-brand-dark mb-8">My Bookings</h1>

      {loading && <p className="text-slate-400 text-sm">Loading…</p>}

      {!loading && bookings.length === 0 && (
        <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl">
          <p className="text-slate-500 mb-4">You haven't booked a trip yet.</p>
          <Link to="/packages" className="bg-brand hover:bg-brand-light transition text-white rounded-full px-6 py-3 font-semibold inline-block">
            Browse Packages
          </Link>
        </div>
      )}

      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b._id} className="border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-center">
            {b.package?.image && (
              <img src={b.package.image} alt={b.package.title} className="w-full sm:w-32 h-24 object-cover rounded-xl" />
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800">{b.package?.title || "Package"}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <Calendar size={12} /> {new Date(b.checkIn).toLocaleDateString()} – {new Date(b.checkOut).toLocaleDateString()}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <Users size={12} /> {b.adults} Adults, {b.children} Children
              </p>
            </div>
            <div className="text-right">
              <div className="font-bold text-brand-dark">₹{b.totalPrice?.toLocaleString("en-IN")}</div>
              <span className={`inline-block mt-1 text-[10px] font-semibold rounded-full px-2 py-1 ${
                b.status === "confirmed" ? "bg-green-50 text-green-600" :
                b.status === "cancelled" ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-600"
              }`}>
                {b.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
