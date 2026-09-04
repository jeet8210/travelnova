import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-lg mx-auto px-6 py-32 text-center">
      <h1 className="font-display font-bold text-5xl text-brand-dark mb-3">404</h1>
      <p className="text-slate-500 mb-8">This page doesn't exist. Let's get you back on track.</p>
      <Link to="/" className="bg-brand hover:bg-brand-light transition text-white rounded-full px-6 py-3 font-semibold inline-block">
        Back to Home
      </Link>
    </section>
  );
}
