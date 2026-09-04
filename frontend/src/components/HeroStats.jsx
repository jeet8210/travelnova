import { MapPinned, Users, Star, Award } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      icon: <Users size={22} />,
      number: "25K+",
      title: "Happy Travelers",
    },
    {
      icon: <MapPinned size={22} />,
      number: "150+",
      title: "Destinations",
    },
    {
      icon: <Star size={22} />,
      number: "4.9",
      title: "Average Rating",
    },
    {
      icon: <Award size={22} />,
      number: "12+",
      title: "Years Experience",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                {item.number}
              </h2>

              <p className="text-slate-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}