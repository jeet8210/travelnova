import { useEffect, useState } from "react";
import PackageHero from "../components/package/PackageHero";
import PackageFilter from "../components/package/PackageFilter";
import PackageCard from "../components/package/PackageCard";
import { getPackages } from "../api/api.js";

const fallback = [
  {
    _id: "1",
    title: "Maldives Luxury Escape",
    days: 5,
    nights: 4,
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: true, transfers: true },
  },
  {
    _id: "2",
    title: "Greek Island Adventure",
    days: 7,
    nights: 6,
    price: 124999,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: true, transfers: true },
  },
  {
    _id: "3",
    title: "Switzerland Explorer",
    days: 6,
    nights: 5,
    price: 109999,
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: true, transfers: true },
  },
  {
    _id: "4",
    title: "Dubai Luxury Getaway",
    days: 4,
    nights: 3,
    price: 54999,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop",
    includes: { flights: true, hotel: true, meals: false, transfers: true },
  },
];

export default function Packages() {
  const [packages, setPackages] = useState(fallback);
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPackages()
      .then((res) => {
        if (res.data && res.data.length) setPackages(res.data);
      })
      .catch(() => {});
  }, []);

  const filtered = packages.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <PackageHero />

      <PackageFilter
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      <div className="mt-14 mb-8">
        <h2 className="text-4xl font-bold">Trending Packages</h2>

        <p className="text-slate-500 mt-2">
          Choose from our most loved travel packages.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {sorted.map((p) => (
          <PackageCard key={p._id} p={p} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          No packages found.
        </div>
      )}
    </section>
  );
}
