import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Phone } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(form.name, form.email, form.password, form.phone);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Could not create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <h1 className="font-display font-semibold text-2xl text-brand-dark mb-2 text-center">Create your account</h1>
      <p className="text-slate-500 text-sm text-center mb-8">Join TravelNova and start planning your next trip.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs text-slate-500 block mb-1">Full name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input required value={form.name} onChange={update("name")} className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="Jane Doe" />
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="email" required value={form.email} onChange={update("email")} className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Phone (optional)</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input value={form.phone} onChange={update("phone")} className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="+91 98765 43210" />
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="password" required minLength={6} value={form.password} onChange={update("password")} className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="At least 6 characters" />
          </div>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button disabled={loading} className="w-full bg-brand hover:bg-brand-light transition text-white rounded-full py-3 font-semibold disabled:opacity-60">
          {loading ? "Creating account…" : "Create Account"}
        </button>
      </form>

      <p className="text-sm text-slate-500 text-center mt-6">
        Already have an account? <Link to="/login" className="text-brand font-medium hover:underline">Log in</Link>
      </p>
    </section>
  );
}
