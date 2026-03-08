import Link from "next/link";

const destinations = [
  { 
    name: "Anuradhapura", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/07/Jetavanaramaya-800-x-550.jpg",
    description: "The epicentre of Sinhalese civilization dating back to 4th century BC"
  },
  { 
    name: "Arugam Bay", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/surf-board.jpg",
    description: "Unspoilt beaches and magnificent waves for surfers"
  },
  { 
    name: "Bentota", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/1-02-14.jpg",
    description: "Beautiful beaches, watersports and buzzing streets"
  },
  { 
    name: "Colombo", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/National-museum-800x550-1.jpg",
    description: "Hotspot with diverse attractions from upscale shopping to culture"
  },
  { 
    name: "Dambulla", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Dambulla-Cave-Temple-800x550-1.jpg",
    description: "Famous for the sacred cave temple complex"
  },
  { 
    name: "Ella", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Demodara-Bridge-800x550-1.jpg",
    description: "Majestic waterfalls, hidden caves, breathtaking mountain views"
  },
  { 
    name: "Galle", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Fort-Lighthouse.jpg",
    description: "Southern capital where natural and cultural diversity thrives"
  },
  { 
    name: "Habarana", 
    image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Habarana-800x550-2.jpg",
    description: "Gateway to cultural triangle and wildlife adventures"
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://jetwingtravels.com/wp-content/uploads/2023/11/Jetwing-Travel-slider2-1920x1080-1.jpg"
          alt="Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Diverse Destinations</h1>
          <p className="text-xl">Your 'Must-See' Places in Sri Lanka</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto">
              With myriad places to visit, Sri Lanka is a little paradise isle full of surprising variety. 
              You can swap the chaos of a city for a tranquil beach in an hour or less, or switch from 
              tropical heat to cool heights and cloud forests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Link 
                key={index}
                href={`/destination/${dest.name.toLowerCase()}`}
                className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{dest.name}</h3>
                  <p className="text-gray-600 text-sm">{dest.description}</p>
                  <span className="inline-block mt-4 text-gold font-medium group-hover:text-primary transition-colors">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
