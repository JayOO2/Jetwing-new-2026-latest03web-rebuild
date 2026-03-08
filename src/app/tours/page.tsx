import Link from "next/link";

const tours = [
  { 
    name: "Authentic Ceylon", 
    duration: "7 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/d-01.jpg",
    description: "Classic Sri Lanka experience visiting all major attractions",
    highlights: ["Sigiriya", "Polonnaruwa", "Kandy", "Nuwara Eliya", "Colombo"]
  },
  { 
    name: "Adventurous Spirit", 
    duration: "8 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/adventure-01.jpg",
    description: "For thrill seekers - hiking, climbing, and adventure sports",
    highlights: ["Ella Rock", "Adam's Peak", "White Water Rafting", "Sinharaja", "Knuckles"]
  },
  { 
    name: "Barefoot Luxury", 
    duration: "10 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/12/foodjg.jpg",
    description: "Luxury beach retreat with wellness and relaxation",
    highlights: ["South Coast Beaches", "Ayuveda", "Fine Dining", "Luxury Villas"]
  },
  { 
    name: "Following The Wild", 
    duration: "6 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/12/wildcat-01.jpg",
    description: "Wildlife safari - leopards, elephants, and exotic birds",
    highlights: ["Yala", "Wilpattu", "Udawalawe", "Minneriya", "Kandy"]
  },
  { 
    name: "Romantic Serendipity", 
    duration: "8 days",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/d-01-1.jpg",
    description: "Honeymoon special - romantic destinations and experiences",
    highlights: ["Sigiriya", "Kandy", "Tea Gardens", "Beach Resort"]
  },
  { 
    name: "Join a Group", 
    duration: "Various",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/11/Untitled-1-01-3.jpg",
    description: "Join our scheduled group tours with fixed dates",
    highlights: ["Fixed Dates", "Group Discounts", "Expert Guide", "All Inclusive"]
  },
];

export default function ToursPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://jetwingtravels.com/wp-content/uploads/2024/01/home-desctop.jpg"
          alt="Tours"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Sri Lanka</h1>
          <p className="text-xl">Your journey: your plan</p>
        </div>
      </section>

      {/* Tours */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg"
              >
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-gold text-white px-3 py-1 text-sm rounded">
                    {tour.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{tour.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Highlights:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {tour.highlights.slice(0, 3).map((h, i) => (
                        <span key={i} className="bg-light text-gray-600 px-2 py-1 text-xs rounded">
                          {h}
                        </span>
                      ))}
                      {tour.highlights.length > 3 && (
                        <span className="text-xs text-gold">+{tour.highlights.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/tour/${tour.name.toLowerCase().replace(/ /g, '-')}`} className="flex-1 btn-primary text-center text-sm">
                      View Details
                    </Link>
                    <Link href="/contact" className="flex-1 btn-gold text-center text-sm">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
