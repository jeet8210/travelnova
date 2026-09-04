import {
  ShieldCheck,
  Sparkles,
  Headset,
  HeartHandshake,
  Globe2,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "100% Secure Booking",
    desc: "Your payments and personal information are protected with industry-leading security.",
  },
  {
    icon: Sparkles,
    title: "AI Travel Planner",
    desc: "Get personalized travel itineraries powered by Artificial Intelligence.",
  },
  {
    icon: Headset,
    title: "24/7 Premium Support",
    desc: "Travel experts are always available to help you anytime, anywhere.",
  },
  {
    icon: HeartHandshake,
    title: "Best Price Guarantee",
    desc: "Luxury vacations at unbeatable prices with exclusive member discounts.",
  },
  {
    icon: Globe2,
    title: "Worldwide Destinations",
    desc: "Choose from 150+ breathtaking destinations across the globe.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Experience Travel Like Never Before
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto mt-5">
            TravelNova combines luxury, technology, and expert planning to
            create unforgettable journeys for every traveler.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {items.map(({ icon: Icon, title, desc }) => (

            <div
              key={title}
              className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6">
                <Icon size={30} />
              </div>

              <h3 className="font-bold text-lg text-slate-900 mb-3">
                {title}
              </h3>

              <p className="text-slate-500 text-sm leading-7">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}