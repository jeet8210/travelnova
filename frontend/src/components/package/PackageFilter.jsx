import { Search } from "lucide-react";

export default function PackageFilter({
  search,
  setSearch,
  sort,
  setSort,
}) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mb-10">
      <div className="grid lg:grid-cols-3 gap-5">

        {/* Search */}

        <div className="relative lg:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search packages..."
            className="w-full rounded-full border border-slate-200 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-full border border-slate-200 px-5 py-3 outline-none"
        >
          <option value="default">Featured</option>
          <option value="low">Price : Low → High</option>
          <option value="high">Price : High → Low</option>
        </select>

      </div>

      {/* Category Buttons */}

      <div className="flex flex-wrap gap-3 mt-6">

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Luxury
        </button>

        <button className="bg-slate-100 hover:bg-slate-200 px-5 py-2 rounded-full">
          Honeymoon
        </button>

        <button className="bg-slate-100 hover:bg-slate-200 px-5 py-2 rounded-full">
          Family
        </button>

        <button className="bg-slate-100 hover:bg-slate-200 px-5 py-2 rounded-full">
          Adventure
        </button>

      </div>
    </section>
  );
}