"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface AnketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnketModal({ isOpen, onClose }: AnketModalProps) {
  const [adsoyad, setAdsoyad] = useState("");
  const [puan, setPuan] = useState("5");
  const [yorum, setYorum] = useState("");
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [mesaj, setMesaj] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGonderiliyor(true);
    setMesaj("");
    try {
      await addDoc(collection(db, "anketler"), {
        adsoyad: adsoyad.trim() || "Anonim",
        puan: parseInt(puan),
        yorum: yorum.trim(),
        tarih: serverTimestamp(),
      });
      setMesaj("Teşekkürler! Anketiniz kaydedildi.");
      setTimeout(() => {
        onClose();
        setAdsoyad("");
        setPuan("5");
        setYorum("");
        setMesaj("");
      }, 1500);
    } catch (error) {
      console.error("Hata:", error);
      setMesaj("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setGonderiliyor(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          ✕
        </button>
        <h2 className="text-xl font-semibold text-navy-800 mb-4">Müşteri Memnuniyet Anketi</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Ad Soyad (opsiyonel)</label>
            <input type="text" value={adsoyad} onChange={(e) => setAdsoyad(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Değerlendirme</label>
            <select value={puan} onChange={(e) => setPuan(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2">
              <option value="5">Çok iyi</option><option value="4">İyi</option><option value="3">Orta</option>
              <option value="2">Kötü</option><option value="1">Çok kötü</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Görüşleriniz</label>
            <textarea rows={3} value={yorum} onChange={(e) => setYorum(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          {mesaj && <p className="text-sm text-green-600">{mesaj}</p>}
          <button type="submit" disabled={gonderiliyor} className="w-full bg-gold-500 text-white py-2 rounded-md hover:bg-gold-600 disabled:opacity-50">
            {gonderiliyor ? "Gönderiliyor..." : "Gönder"}
          </button>
        </form>
      </div>
    </div>
  );
}
