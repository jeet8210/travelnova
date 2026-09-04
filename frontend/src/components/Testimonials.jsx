import { Star, Quote, BadgeCheck } from "lucide-react";

const reviews = [
  {
    name: "Ananya Sharma",
    location: "Mumbai, India",
    text: "TravelNova made our honeymoon absolutely unforgettable. Every hotel, activity and transfer was perfectly organized.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rohan Mehta",
    location: "Bangalore, India",
    text: "Our Switzerland trip was beyond expectations. The itinerary was luxurious and everything was hassle-free.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Singh",
    location: "Delhi, India",
    text: "The AI planner saved us so much time. Amazing destinations, great support and excellent prices!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            What Our Travelers Say
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Thousands of happy travelers trust TravelNova for unforgettable
            vacations around the world.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((r) => (

            <div
              key={r.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <Quote
                className="text-blue-500 mb-6"
                size={34}
              />

              <p className="text-slate-600 leading-8 mb-8">
                "{r.text}"
              </p>

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                  />

                  <div>

                    <h4 className="font-bold">
                      {r.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {r.location}
                    </p>

                  </div>

                </div>

                <BadgeCheck
                  className="text-green-500"
                  size={24}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}