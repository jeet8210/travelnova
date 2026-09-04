import { Bot, Sparkles, MapPin, Calendar, Wallet } from "lucide-react";

export default function AIPlannerBanner() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
              AI Travel Planner
            </span>

            <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
              Plan Your Dream Vacation
              <span className="text-cyan-400"> With AI</span>
            </h2>

            <p className="text-slate-300 mt-6 text-lg leading-8">
              Tell our AI where you want to travel and receive a
              personalized itinerary with destinations, hotels,
              activities, and estimated costs within seconds.
            </p>

            <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition text-white rounded-2xl px-8 py-4 font-semibold flex items-center gap-3">
              <Sparkles size={20} />
              Generate My Trip
            </button>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                <Bot size={28} />
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  AI Planner
                </h3>

                <p className="text-slate-500">
                  Create your perfect itinerary
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-3 border rounded-xl p-4">
                <MapPin className="text-blue-600" />
                <span>Bali, Maldives, Switzerland...</span>
              </div>

              <div className="flex items-center gap-3 border rounded-xl p-4">
                <Calendar className="text-blue-600" />
                <span>7 Days</span>
              </div>

              <div className="flex items-center gap-3 border rounded-xl p-4">
                <Wallet className="text-blue-600" />
                <span>₹50,000 Budget</span>
              </div>

            </div>

            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold">
              Generate AI Itinerary
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}