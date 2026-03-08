"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

const defaultHotels: Hotel[] = [
  { id: 1, name: "Jetwing Blue", location: "Negombo", image: "https://jetwingtravels.com/wp-content/uploads/2023/03/jetwing-blue-900x760-1.jpg", description: "Beachfront hotel" },
  { id: 2, name: "Jetwing Colombo Seven", location: "Colombo", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/Jetwing-Colombo-Seven-Featured-Image.jpg", description: "Modern luxury" },
  { id: 3, name: "Jetwing Saman Villas", location: "Bentota", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/featured-02.jpg", description: "Award-winning boutique" },
  { id: 4, name: "Jetwing Vil Uyana", location: "Sigiriya", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/head-02.jpg", description: "Luxury eco-lodge" },
  { id: 5, name: "Jetwing Lake", location: "Dambulla", image: "https://jetwingtravels.com/wp-content/uploads/2023/03/jetwing-blue-900x760-1.jpg", description: "Lakeside retreat" },
  { id: 6, name: "Jetwing Yala", location: "Yala", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/featured-02.jpg", description: "Safari lodge" },
];

export default function AdminHotels() {
  const router = useRouter();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editHotel, setEditHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("jetwingCurrentUser");
    if (!user) { router.push("/auth/login"); return; }
    const saved = localStorage.getItem("jetwingHotels");
    if (saved) setHotels(JSON.parse(saved));
    else setHotels(defaultHotels);
    setLoading(false);
  }, [router]);

  const save = (newHotels: Hotel[]) => { setHotels(newHotels); localStorage.setItem("jetwingHotels", JSON.stringify(newHotels)); };
  const del = (id: number) => { if(confirm("Delete?")) save(hotels.filter(h => h.id !== id)); };

  const saveHotel = (h: Hotel) => {
    let newH: Hotel[] = editHotel ? hotels.map(x => x.id === h.id ? h : x) : [...hotels, { ...h, id: Date.now() }];
    save(newH); setShowForm(false); setEditHotel(null);
  };

  if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Hotels</h1>
          <div className="flex gap-4"><a href="/admin/dashboard" className="text-blue-400">← Dashboard</a><a href="/" className="text-blue-400">View Site</a></div>
        </div>
        <button onClick={() => { setEditHotel(null); setShowForm(true); }} className="mb-6 px-6 py-3 bg-green-600 text-white font-bold rounded">+ Add Hotel</button>
        {showForm && <HotelForm hotel={editHotel} onSave={saveHotel} onCancel={() => { setShowForm(false); setEditHotel(null); }} />}
        <div className="grid md:grid-cols-3 gap-6">
          {hotels.map(hotel => (
            <div key={hotel.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-bold">{hotel.name}</h3>
                <p className="text-gold text-sm">{hotel.location}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => { setEditHotel(hotel); setShowForm(true); }} className="flex-1 py-2 bg-yellow-600 text-white rounded text-sm">Edit</button>
                  <button onClick={() => del(hotel.id)} className="flex-1 py-2 bg-red-600 text-white rounded text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HotelForm({ hotel, onSave, onCancel }: { hotel: Hotel | null; onSave: (h: Hotel) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Hotel>(hotel || { id: 0, name: "", location: "", image: "", description: "" });
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6 space-y-4">
      <input type="text" placeholder="Hotel Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      <input type="text" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      <input type="text" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" rows={3} />
      <div className="flex gap-4">
        <button onClick={() => onSave(form)} className="px-6 py-2 bg-green-600 text-white font-bold rounded">Save</button>
        <button onClick={onCancel} className="px-6 py-2 bg-gray-600 text-white font-bold rounded">Cancel</button>
      </div>
    </div>
  );
}
