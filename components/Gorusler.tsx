"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

type Gorus = { id: string; adsoyad: string; puan: number; yorum: string; tarih?: { toDate: () => Date } };

export default function Gorusler() {
  const [gorusler, setGorusler] = useState<Gorus[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    const fetchGorusler = async () => {
      try {
        const q = query(collection(db, "anketler"), orderBy("tarih", "desc"), limit(10));
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Gorus[];
        setGorusler(list);
      } catch (error) {
        console.error("Görüşler alınamadı:", error);
      } finally {
        setYukleniyor(false);
      }
    };
    fetchGorusler();
  }, []);

  if (yukleniyor) return <p className="text-center text-sm text-gray-500">Yorumlar yükleniyor...</p>;
  if (gorusler.length === 0) return <p className="text-center text-sm text-gray-500">Henüz yorum yapılmamış.</p>;

  return (
    <div className="space-y-4">
      {gorusler.map((g) => (
        <div key={g.id} className="bg-white rounded-xl border p-4 shadow-sm">
          <div className="flex justify-between items-start">
            <h4 className="font-semibold text-navy-800">{g.adsoyad}</h4>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Puan: {g.puan}/5</span>
          </div>
          <p className="text-sm text-gray-700 mt-2">{g.yorum}</p>
          <p className="text-xs text-gray-400 mt-1">{g.tarih ? g.tarih.toDate().toLocaleDateString("tr-TR") : ""}</p>
        </div>
      ))}
    </div>
  );
}
