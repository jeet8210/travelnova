import { useState } from "react";
import { Send, Mail, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[32px] bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 items-center px-10 py-14">

            {/* Left */}

            <div>

              <span className="uppercase tracking-[4px] text-cyan-300 font-semibold">
                Stay Updated
              </span>

              <h2 className="text-4xl font-bold text-white mt-4">
                Get Exclusive Travel Deals
              </h2>

              <p className="text-slate-300 mt-5 leading-8">
                Subscribe to our newsletter and receive exclusive offers,
                travel inspiration, destination guides and AI travel tips
                directly in your inbox.
              </p>

              <div className="flex items-center gap-3 mt-8 text-cyan-300">
                <Sparkles size={18} />
                <span>Weekly Travel Inspiration</span>
              </div>

            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl p-8 shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                <Mail size={30} />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Join Our Community
              </h3>

              <p className="text-slate-500 mb-6">
                Enter your email below and never miss our latest travel offers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2">

                  <Send size={18} />

                  Subscribe Now

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}