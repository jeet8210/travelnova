import { Link } from "react-router-dom";
import {
  Compass,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  "Home",
  "Destinations",
  "Packages",
  "AI Planner",
  "Contact",
];

const destinations = [
  "Maldives",
  "Switzerland",
  "Dubai",
  "Bali",
  "Thailand",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-14">

        {/* Company */}

        <div>

          <div className="flex items-center gap-3 text-3xl font-bold mb-6">

            <Compass className="text-cyan-400" />

            TravelNova

          </div>

          <p className="text-slate-400 leading-8 mb-8">

            Luxury AI powered travel experiences crafted for unforgettable
            journeys around the world.

          </p>

          <div className="flex gap-4">

            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-500 transition flex items-center justify-center cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Quick Links
          </h3>

          <div className="space-y-4">

            {quickLinks.map((item) => (
              <Link
                key={item}
                to="/"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
              >
                <ArrowRight size={16} />
                {item}
              </Link>
            ))}

          </div>

        </div>

        {/* Destinations */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Top Destinations
          </h3>

          <div className="space-y-4">

            {destinations.map((item) => (
              <Link
                key={item}
                to="/destinations"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
              >
                <ArrowRight size={16} />
                {item}
              </Link>
            ))}

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Contact
          </h3>

          <div className="space-y-5 text-slate-400">

            <div className="flex gap-3">

              <MapPin className="text-cyan-400" />

              <span>
                New Delhi, India
              </span>

            </div>

            <div className="flex gap-3">

              <Phone className="text-cyan-400" />

              <span>
                +91 9876543210
              </span>

            </div>

            <div className="flex gap-3">

              <Mail className="text-cyan-400" />

              <span>
                support@travelnova.com
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 TravelNova. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">

            <a href="#" className="hover:text-cyan-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-cyan-400">
              Terms
            </a>

            <a href="#" className="hover:text-cyan-400">
              Sitemap
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}