import { useEffect, useState } from "react";
import PackageHero from "../components/package/PackageHero";
import PackageFilter from "../components/package/PackageFilter";
import PackageCard from "../components/package/PackageCard";
import { getPackages } from "../api/api.js";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPackages()
      .then((res) => {
        setPackages(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to load packages:", err);
        setPackages([]);
      });
  }, []);

  const filtered = packages.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
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
          <PackageCard key={p._id} pkg={p} />
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