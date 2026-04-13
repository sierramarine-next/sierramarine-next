"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactEnPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await addDoc(collection(db, "iletisim"), {
        ...form,
        tarih: serverTimestamp(),
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Message could not be sent:", error);
      alert("An error occurred, please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/hero-ship.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-900/70 z-1"></div>
        <div className="relative z-2 mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-sm uppercase tracking-wider text-gold-400 mb-2">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-200 max-w-xl mx-auto mt-4">For quotations, technical information or any questions, please get in touch with us.</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-navy-800 mb-4">Contact Details</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Phone:</strong> +90 (216) 395 06 68</p>
              <p><strong>Address:</strong> EVLIYA ÇELEBI MAH. ŞAHAN SOKAK NO:2/A TUZLA / ISTANBUL – TURKEY</p>
              <p><strong>Email:</strong> <a href="mailto:info@sierramarine.com.tr" className="text-gold-600 hover:underline">info@sierramarine.com.tr</a></p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-navy-800 mb-4">Send a Message</h2>
            {sent ? (
              <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
                Your message has been sent. We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full border rounded-md p-2 focus:ring-2 focus:ring-gold-500" />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border rounded-md p-2 focus:ring-2 focus:ring-gold-500" />
                <textarea name="message" rows={4} placeholder="Your Message" value={form.message} onChange={handleChange} required className="w-full border rounded-md p-2 focus:ring-2 focus:ring-gold-500" />
                <button type="submit" disabled={sending} className="btn-primary w-full">{sending ? "Sending..." : "Send"}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
