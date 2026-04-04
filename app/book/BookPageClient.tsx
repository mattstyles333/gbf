"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import { siteConfig } from "../content";

function buildInquiryHref(form: {
  name: string;
  email: string;
  phone: string;
  dates: string;
  guests: string;
  message: string;
}) {
  const subject = form.dates.trim()
    ? `Bonefishing inquiry - ${form.dates.trim()}`
    : "Bonefishing inquiry";

  const body = [
    "Hello Great Bone Fishing,",
    "",
    "I would like to check availability for a Turks & Caicos bonefishing trip.",
    "",
    `Name: ${form.name.trim() || "Not provided"}`,
    `Email: ${form.email.trim() || "Not provided"}`,
    `Phone: ${form.phone.trim() || "Not provided"}`,
    `Guests: ${form.guests || "Not provided"}`,
    `Preferred dates: ${form.dates.trim() || "Not provided"}`,
    "",
    "Trip details:",
    form.message.trim() || "Not provided",
    "",
    "Thank you,",
    form.name.trim() || "",
  ].join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function BookPageClient() {
  const [status, setStatus] = useState<"idle" | "opening" | "ready">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const inquiryHref = buildInquiryHref(form);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("opening");
    window.location.href = inquiryHref;
    setStatus("ready");
  };

  return (
    <>
      <PageHero
        title="Book Your Trip"
        subtitle="No online checkout, no pressure. Tell us your dates, group size, and trip goals, and we&apos;ll reply with availability and the best option for your group."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {status === "ready" ? (
                <div className="card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Your Inquiry Draft Is Ready</h2>
                  <p className="text-slate-500 mb-6">
                    Your email app should open with a pre-filled inquiry to our team. If
                    nothing opened, email us directly and we&apos;ll reply within 24 to 48 hours.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href={inquiryHref} className="btn-primary">
                      Open Email Again
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn-outline !text-ocean-700 !border-ocean-400"
                    >
                      Edit Inquiry
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mt-6">
                    Direct email:{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-ocean-700 font-semibold hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h2 className="text-2xl font-bold mb-2">Start Your Inquiry</h2>
                  <p className="text-sm text-slate-500 mb-6">
                    Submitting opens your email app with a pre-filled message to {siteConfig.email}.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        placeholder="[email protected]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        placeholder="+1 (336) 655-0541"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-semibold text-slate-700 mb-1">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n} guest{n > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="dates" className="block text-sm font-semibold text-slate-700 mb-1">
                        Preferred Dates / Trip Duration
                      </label>
                      <input
                        id="dates"
                        name="dates"
                        type="text"
                        value={form.dates}
                        onChange={(e) => setForm({ ...form, dates: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        placeholder="e.g. March 15-20, 2026 / 5 nights"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your group, experience level, and whether you want guided, DIY, or lodge options."
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button
                      type="submit"
                      disabled={status === "opening"}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "opening" ? "Opening Email..." : "Open Email Draft"}
                    </button>
                    <a
                      href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                      className="btn-outline !text-ocean-700 !border-ocean-400"
                    >
                      Or call: {siteConfig.phoneUSA}
                    </a>
                  </div>
                </form>
              )}
            </div>

            <div>
              <div className="card p-6 mb-6">
                <h3 className="font-bold mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">USA</span>
                    <a
                      href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                      className="text-slate-700 hover:text-ocean-600 font-semibold"
                    >
                      {siteConfig.phoneUSA}
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Turks &amp; Caicos</span>
                    <a
                      href={`tel:${siteConfig.phoneTCI.replace(/[^0-9+]/g, "")}`}
                      className="text-slate-700 hover:text-ocean-600 font-semibold"
                    >
                      {siteConfig.phoneTCI}
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-slate-700 hover:text-ocean-600 break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Address</span>
                    <span className="text-slate-600">{siteConfig.address}</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 mb-6">
                <h3 className="font-bold mb-3">How Booking Works</h3>
                <ol className="space-y-3 text-sm text-slate-500">
                  {[
                    "Send your inquiry or call us directly",
                    "We reply with availability, recommendations, and rates",
                    "We email deposit details to lock in your dates",
                    "Balance is due on arrival or on the day of fishing",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card p-6">
                <h3 className="font-bold mb-3">Need Quick Info?</h3>
                <p className="text-slate-500 text-sm mb-4">
                  If you already know your dates, call or email us directly and we&apos;ll help
                  you choose the right guided, DIY, or lodge package.
                </p>
                <p className="text-slate-500 text-sm">
                  We&apos;re happy to talk through tides, travel logistics, and the right fit for
                  your group before you commit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
