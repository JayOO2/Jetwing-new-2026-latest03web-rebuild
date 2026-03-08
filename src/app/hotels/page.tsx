import Link from "next/link";

const hotels = [
  { 
    name: "Jetwing Blue", 
    location: "Negombo",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/03/jetwing-blue-900x760-1.jpg",
    description: "Beachfront hotel with stunning ocean views"
  },
  { 
    name: "Jetwing Colombo Seven", 
    location: "Colombo",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/10/Jetwing-Colombo-Seven-Featured-Image.jpg",
    description: "Modern luxury in the heart of Colombo"
  },
  { 
    name: "Jetwing Saman Villas", 
    location: "Bentota",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/10/featured-02.jpg",
    description: "Award-winning beachfront boutique hotel"
  },
  { 
    name: "Jetwing Vil Uyana", 
    location: "Sigiriya",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/10/head-02.jpg",
    description: "Luxury eco-lodge near Sigiriya Rock"
  },
  { 
    name: "Jetwing Lake", 
    location: "Dambulla",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/03/jetwing-blue-900x760-1.jpg",
    description: "Serene lakeside retreat"
  },
  { 
    name: "Jetwing Yala", 
    location: "Yala",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/10/featured-02.jpg",
    description: "Luxury safari lodge near Yala National Park"
  },
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://jetwingtravels.com/wp-content/uploads/2023/12/ss-1.jpg"
          alt="Hotels"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxurious Stays</h1>
          <p className="text-xl">Where restful pleasures await</p>
        </div>
      </section>

      {/* Hotels */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg"
              >
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{hotel.name}</h3>
                  <p className="text-gold text-sm mb-3">{hotel.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
                  <div className="flex gap-2">
                    <Link href={`/hotel/${hotel.name.toLowerCase().replace(/ /g, '-')}`} className="flex-1 btn-primary text-center text-sm">
                      View Details
                    </Link>
                    <Link href="/contact" className="flex-1 btn-gold text-center text-sm">
                      Book Now
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
