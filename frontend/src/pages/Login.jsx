import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(location.state?.from || "/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <h1 className="font-display font-semibold text-2xl text-brand-dark mb-2 text-center">Welcome back</h1>
      <p className="text-slate-500 text-sm text-center mb-8">Log in to manage your bookings and trips.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs text-slate-500 block mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-500 block mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="••••••••" />
          </div>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button disabled={loading} className="w-full bg-brand hover:bg-brand-light transition text-white rounded-full py-3 font-semibold disabled:opacity-60">
          {loading ? "Logging in…" : "Log In"}
        </button>
      </form>

      <p className="text-sm text-slate-500 text-center mt-6">
        Don't have an account? <Link to="/signup" className="text-brand font-medium hover:underline">Sign up</Link>
      </p>
    </section>
  );
}
