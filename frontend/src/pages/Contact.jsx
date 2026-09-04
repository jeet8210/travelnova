import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="font-display font-semibold text-2xl text-brand-dark mb-3">Get in touch</h1>
        <p className="text-slate-500 mb-8">Have a question about a trip or need help planning? Reach out and our team will get back to you within 24 hours.</p>
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3"><MapPin className="text-brand" size={18} /> 123 TravelNova Street, New Delhi, India - 110001</div>
          <div className="flex items-center gap-3"><Phone className="text-brand" size={18} /> +91 98765 43210</div>
          <div className="flex items-center gap-3"><Mail className="text-brand" size={18} /> support@travelnova.com</div>
        </div>
      </div>

      <div>
        {sent ? (
          <div className="border border-slate-100 rounded-2xl p-8 text-center">
            <p className="font-semibold text-slate-800 mb-1">Message sent</p>
            <p className="text-sm text-slate-500">Thanks for reaching out — we'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required placeholder="Your name" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-brand" />
            <input type="email" required placeholder="Your email" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-brand" />
            <textarea required rows={5} placeholder="How can we help?" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-brand resize-none" />
            <button className="bg-brand hover:bg-brand-light transition text-white rounded-full px-6 py-3 font-semibold">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}
