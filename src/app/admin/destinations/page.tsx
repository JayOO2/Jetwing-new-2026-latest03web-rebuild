"use client";

import { useState, useEffect } from "react";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

const defaultDestinations: Destination[] = [
  { id: 1, name: "Anuradhapura", image: "https://jetwingtravels.com/wp-content/uploads/2023/07/Jetavanaramaya-800-x-550.jpg", description: "The epicentre of Sinhalese civilization dating back to 4th century BC" },
  { id: 2, name: "Arugam Bay", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/surf-board.jpg", description: "Unspoilt beaches and magnificent waves for surfers" },
  { id: 3, name: "Bentota", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/1-02-14.jpg", description: "Beautiful beaches, watersports and buzzing streets" },
  { id: 4, name: "Colombo", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/National-museum-800x550-1.jpg", description: "Hotspot with diverse attractions" },
  { id: 5, name: "Dambulla", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Dambulla-Cave-Temple-800x550-1.jpg", description: "Famous for the sacred cave temple complex" },
  { id: 6, name: "Ella", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Demodara-Bridge-800x550-1.jpg", description: "Majestic waterfalls, hidden caves, breathtaking mountain views" },
  { id: 7, name: "Galle", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Fort-Lighthouse.jpg", description: "Southern capital where natural and cultural diversity thrives" },
  { id: 8, name: "Habarana", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Habarana-800x550-2.jpg", description: "Gateway to cultural triangle and wildlife adventures" },
];

const ADMIN_PASSWORD = "admin123";

export default function AdminDestinations() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("jetwingDestinations");
    if (saved) setDestinations(JSON.parse(saved));
    else setDestinations(defaultDestinations);
  }, []);

  const handleLogin = () => password === ADMIN_PASSWORD ? setIsAuthenticated(true) : alert("Invalid!");

  const saveDestinations = (newDest: Destination[]) => {
    setDestinations(newDest);
    localStorage.setItem("jetwingDestinations", JSON.stringify(newDest));
  };

  const deleteDest = (id: number) => {
    if (confirm("Delete?")) saveDestinations(destinations.filter(d => d.id !== id));
  };

  const saveDest = (dest: Destination) => {
    let newDest: Destination[];
    newDest = editingDest ? destinations.map(d => d.id === dest.id ? dest : d) : [...destinations, { ...dest, id: Date.now() }];
    saveDestinations(newDest);
    setShowForm(false);
    setEditingDest(null);
  };

  if (!isAuthenticated) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Login</h1>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded text-white" />
        <button onClick={handleLogin} className="w-full py-3 bg-blue-600 text-white font-bold rounded">Login</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Destinations</h1>
          <div className="flex gap-4"><a href="/admin" className="text-blue-400">← Back</a><a href="/" className="text-blue-400">View Site</a></div>
        </div>
        <button onClick={() => { setEditingDest(null); setShowForm(true); }} className="mb-6 px-6 py-3 bg-green-600 text-white font-bold rounded">+ Add Destination</button>
        {showForm && <DestForm dest={editingDest} onSave={saveDest} onCancel={() => { setShowForm(false); setEditingDest(null); }} />}
        <div className="grid md:grid-cols-4 gap-6">
          {destinations.map(dest => (
            <div key={dest.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={dest.image} alt={dest.name} className="w-full h-32 object-cover" />
              <div className="p-4"><h3 className="text-white font-bold">{dest.name}</h3>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => { setEditingDest(dest); setShowForm(true); }} className="flex-1 py-2 bg-yellow-600 text-white rounded text-sm">Edit</button>
                  <button onClick={() => deleteDest(dest.id)} className="flex-1 py-2 bg-red-600 text-white rounded text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DestForm({ dest, onSave, onCancel }: { dest: Destination | null; onSave: (d: Destination) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Destination>(dest || { id: 0, name: "", image: "", description: "" });
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6 space-y-4">
      <input type="text" placeholder="Destination Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
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
