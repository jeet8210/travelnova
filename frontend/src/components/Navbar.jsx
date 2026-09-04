import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Compass, Sparkles, ChevronDown, Phone, Globe2, User, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Destinations", to: "/destinations" },
    { label: "Packages", to: "/packages" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-white">
      <div className="bg-brand-dark text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span>Explore 150+ Destinations</span>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone size={12} /> 24/7 Support</span>
            <span className="flex items-center gap-1"><Globe2 size={12} /> EN <ChevronDown size={12} /></span>
            <span>INR</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-brand-dark">
          <Compass className="text-brand" size={26} /> TravelNova
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-brand transition">{l.label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/destinations" className="hidden sm:flex items-center gap-1.5 border border-slate-300 rounded-full px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand transition">
            <Sparkles size={14} /> AI Planner
          </Link>

          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 bg-slate-100 rounded-full pl-1.5 pr-3 py-1.5 text-sm font-medium">
                <span className="bg-brand text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-semibold">
                  {user.name?.[0]?.toUpperCase() || "U"}
                </span>
                {user.name?.split(" ")[0]}
              </button>
              <div className="absolute right-0 mt-1 w-40 bg-white border border-slate-100 rounded-xl shadow-lg py-2 hidden group-hover:block">
                <Link to="/my-bookings" className="block px-4 py-2 text-sm hover:bg-slate-50">My Bookings</Link>
                <button
                  onClick={() => { logout(); navigate("/"); }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-red-500"
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="hidden sm:flex items-center gap-1.5 text-sm font-medium hover:text-brand transition">
              <User size={16} /> Login
            </Link>
          )}

          <Link to="/packages" className="bg-brand text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-brand-light transition">
            Book Now
          </Link>

          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="hover:text-brand transition">{l.label}</Link>
          ))}
          {!user && <Link to="/login" onClick={() => setOpen(false)} className="hover:text-brand transition">Login</Link>}
        </div>
      )}
    </header>
  );
}
