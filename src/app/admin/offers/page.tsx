"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Offer {
  id: number;
  title: string;
  discount: string;
  price: string;
  image: string;
  description: string;
}

const defaultOffers: Offer[] = [
  { id: 1, title: "Maldives Special Offer", discount: "Save up to 15%", price: "Starting from $5550", image: "https://jetwingtravels.com/wp-content/uploads/2023/03/Maldives-offer.jpg", description: "Luxury private island resort" },
  { id: 2, title: "Ayurveda Wellness", discount: "Save up to 15%", price: "Starting from $1180", image: "https://jetwingtravels.com/wp-content/uploads/2023/03/Untitled-2-05-scaled.jpg", description: "Wellness experience in Sri Lanka" },
];

export default function AdminOffers() {
  const router = useRouter();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editOffer, setEditOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("jetwingCurrentUser");
    if (!user) { router.push("/auth/login"); return; }
    const saved = localStorage.getItem("jetwingOffers");
    if (saved) setOffers(JSON.parse(saved));
    else setOffers(defaultOffers);
    setLoading(false);
  }, [router]);

  const save = (newOffers: Offer[]) => { setOffers(newOffers); localStorage.setItem("jetwingOffers", JSON.stringify(newOffers)); };
  const del = (id: number) => { if(confirm("Delete?")) save(offers.filter(o => o.id !== id)); };

  const saveOffer = (o: Offer) => {
    let newO: Offer[] = editOffer ? offers.map(x => x.id === o.id ? o : x) : [...offers, { ...o, id: Date.now() }];
    save(newO); setShowForm(false); setEditOffer(null);
  };

  if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Offers</h1>
          <div className="flex gap-4"><a href="/admin/dashboard" className="text-blue-400">← Dashboard</a><a href="/" className="text-blue-400">View Site</a></div>
        </div>
        <button onClick={() => { setEditOffer(null); setShowForm(true); }} className="mb-6 px-6 py-3 bg-green-600 text-white font-bold rounded">+ Add Offer</button>
        {showForm && <OfferForm offer={editOffer} onSave={saveOffer} onCancel={() => { setShowForm(false); setEditOffer(null); }} />}
        <div className="space-y-4">
          {offers.map(offer => (
            <div key={offer.id} className="bg-gray-800 rounded-lg p-4 flex gap-4">
              <img src={offer.image} alt={offer.title} className="w-32 h-24 object-cover rounded" />
              <div className="flex-1">
                <span className="bg-gold text-white px-2 py-1 text-xs rounded">{offer.discount}</span>
                <h3 className="text-white font-bold mt-2">{offer.title}</h3>
                <p className="text-gold text-sm">{offer.price}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => { setEditOffer(offer); setShowForm(true); }} className="px-4 py-2 bg-yellow-600 text-white rounded text-sm">Edit</button>
                <button onClick={() => del(offer.id)} className="px-4 py-2 bg-red-600 text-white rounded text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OfferForm({ offer, onSave, onCancel }: { offer: Offer | null; onSave: (o: Offer) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Offer>(offer || { id: 0, title: "", discount: "", price: "", image: "", description: "" });
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6 space-y-4">
      <input type="text" placeholder="Offer Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Discount" value={form.discount} onChange={e => setForm({ ...form, discount: e.target.value })}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
        <input type="text" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      </div>
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
