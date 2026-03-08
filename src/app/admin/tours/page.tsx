"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Tour {
  id: number;
  name: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  price?: string;
}

const defaultTours: Tour[] = [
  { 
    id: 1, name: "Authentic Ceylon", duration: "7 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/d-01.jpg",
    description: "Classic Sri Lanka experience visiting all major attractions",
    highlights: ["Sigiriya", "Polonnaruwa", "Kandy", "Nuwara Eliya", "Colombo"]
  },
  { 
    id: 2, name: "Adventurous Spirit", duration: "8 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/adventure-01.jpg",
    description: "For thrill seekers - hiking, climbing, and adventure sports",
    highlights: ["Ella Rock", "Adam's Peak", "White Water Rafting", "Sinharaja"]
  },
  { 
    id: 3, name: "Barefoot Luxury", duration: "10 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/12/foodjg.jpg",
    description: "Luxury beach retreat with wellness and relaxation",
    highlights: ["South Coast Beaches", "Ayuveda", "Fine Dining", "Luxury Villas"]
  },
  { 
    id: 4, name: "Following The Wild", duration: "6 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/12/wildcat-01.jpg",
    description: "Wildlife safari - leopards, elephants, and exotic birds",
    highlights: ["Yala", "Wilpattu", "Udawalawe", "Minneriya"]
  },
  { 
    id: 5, name: "Romantic Serendipity", duration: "8 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/d-01-1.jpg",
    description: "Honeymoon special - romantic destinations and experiences",
    highlights: ["Sigiriya", "Kandy", "Tea Gardens", "Beach Resort"]
  },
  { 
    id: 6, name: "Join a Group", duration: "Various",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/Untitled-1-01-3.jpg",
    description: "Join our scheduled group tours with fixed dates",
    highlights: ["Fixed Dates", "Group Discounts", "Expert Guide"]
  },
];

export default function AdminTours() {
  const router = useRouter();
  const [tours, setTours] = useState<Tour[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("jetwingCurrentUser");
    if (!user) {
      router.push("/auth/login");
      return;
    }
    const saved = localStorage.getItem("jetwingTours");
    if (saved) setTours(JSON.parse(saved));
    else setTours(defaultTours);
    setLoading(false);
  }, [router]);

  const saveTours = (newTours: Tour[]) => {
    setTours(newTours);
    localStorage.setItem("jetwingTours", JSON.stringify(newTours));
  };

  const deleteTour = (id: number) => {
    if (confirm("Delete this tour?")) {
      saveTours(tours.filter(t => t.id !== id));
    }
  };

  const saveTour = (tour: Tour) => {
    let newTours: Tour[];
    if (editingTour) {
      newTours = tours.map(t => t.id === tour.id ? tour : t);
    } else {
      tour.id = Date.now();
      newTours = [...tours, tour];
    }
    saveTours(newTours);
    setShowForm(false);
    setEditingTour(null);
  };

  if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Manage Tours</h1>
          <div className="flex gap-4">
            <a href="/admin/dashboard" className="text-blue-400">← Dashboard</a>
            <a href="/" className="text-blue-400">View Site</a>
          </div>
        </div>

        <button onClick={() => { setEditingTour(null); setShowForm(true); }}
          className="mb-6 px-6 py-3 bg-green-600 text-white font-bold rounded-lg">+ Add Tour</button>

        {showForm && <TourForm tour={editingTour} onSave={saveTour} onCancel={() => { setShowForm(false); setEditingTour(null); }} />}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map(tour => (
            <div key={tour.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={tour.image} alt={tour.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-bold">{tour.name}</h3>
                <p className="text-gray-400 text-sm">{tour.duration}</p>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => { setEditingTour(tour); setShowForm(true); }}
                    className="flex-1 py-2 bg-yellow-600 text-white rounded">Edit</button>
                  <button onClick={() => deleteTour(tour.id)}
                    className="flex-1 py-2 bg-red-600 text-white rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TourForm({ tour, onSave, onCancel }: { tour: Tour | null; onSave: (t: Tour) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Tour>(tour || { id: 0, name: "", duration: "", image: "", description: "", highlights: [] });

  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input type="text" placeholder="Tour Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
        <input type="text" placeholder="Duration (e.g., 7 days)" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      </div>
      <input type="text" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" rows={3} />
      <input type="text" placeholder="Highlights (comma separated)" value={form.highlights.join(", ")} onChange={e => setForm({ ...form, highlights: e.target.value.split(", ") })}
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white" />
      <div className="flex gap-4">
        <button onClick={() => onSave(form)} className="px-6 py-2 bg-green-600 text-white font-bold rounded">Save</button>
        <button onClick={onCancel} className="px-6 py-2 bg-gray-600 text-white font-bold rounded">Cancel</button>
      </div>
    </div>
  );
}
