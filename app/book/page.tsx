"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import { siteConfig } from "../content";

export default function BookPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <>
      <PageHero
        title="Book Your Trip"
        subtitle="Check availability and send us an inquiry. We respond quickly to help you plan the perfect bonefishing trip."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === "sent" ? (
                <div className="card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Inquiry Sent!</h2>
                  <p className="text-slate-500 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 24–48 hours to
                    discuss your trip and confirm availability.
                  </p>
                  <a href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`} className="btn-primary">
                    Call Us: {siteConfig.phoneUSA}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
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
                        type="email"
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
                        type="tel"
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
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="dates" className="block text-sm font-semibold text-slate-700 mb-1">
                        Preferred Dates / Trip Duration
                      </label>
                      <input
                        id="dates"
                        type="text"
                        value={form.dates}
                        onChange={(e) => setForm({ ...form, dates: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        placeholder="e.g. March 15–20, 2026 / 5 nights"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your group, experience level, what you're looking for..."
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Send Inquiry"}
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

            {/* Contact Info */}
            <div>
              <div className="card p-6 mb-6">
                <h3 className="font-bold mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">USA</span>
                    <a href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`} className="text-slate-700 hover:text-ocean-600 font-semibold">
                      {siteConfig.phoneUSA}
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Turks &amp; Caicos</span>
                    <a href={`tel:${siteConfig.phoneTCI.replace(/[^0-9+]/g, "")}`} className="text-slate-700 hover:text-ocean-600 font-semibold">
                      {siteConfig.phoneTCI}
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-700 hover:text-ocean-600 break-all">
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
                    "Send an inquiry or call us",
                    "We confirm availability and discuss your trip",
                    "Submit $175 deposit to confirm",
                    "Balance due in cash on the day",
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
                  If you have confirmed availability and would like to make a deposit,
                  call us and we&apos;ll send payment details.
                </p>
                <p className="text-slate-500 text-sm">
                  We&apos;re happy to discuss your trip before you commit — no pressure,
                  just honest advice on the best way to fish our water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
