import {
  Globe,
  Plane,
  Building2,
  Hotel,
  MapPinned,
  Compass,
} from "lucide-react";

const brands = [
  {
    name: "Google Travel",
    icon: Globe,
  },
  {
    name: "Booking.com",
    icon: Building2,
  },
  {
    name: "Airbnb",
    icon: Hotel,
  },
  {
    name: "Tripadvisor",
    icon: MapPinned,
  },
  {
    name: "Expedia",
    icon: Plane,
  },
  {
    name: "TravelNova",
    icon: Compass,
  },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
            Trusted Worldwide
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Trusted By Millions of Travelers
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We collaborate with the world's leading travel companies to
            provide unforgettable experiences across the globe.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {brands.map((brand, index) => {

            const Icon = brand.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col items-center justify-center"
              >

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <Icon size={28} />
                </div>

                <h3 className="font-semibold text-slate-800 text-center">
                  {brand.name}
                </h3>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}