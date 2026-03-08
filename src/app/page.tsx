import Link from "next/link";

const destinations = [
  { name: "Sigiriya", image: "https://jetwingtravels.com/wp-content/uploads/2024/01/home-desctop.jpg", description: "Ancient rock fortress" },
  { name: "Colombo", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Untitled-1.jpg", description: "Capital city" },
  { name: "Ella", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Demodara-Bridge-1240x710-1.jpg", description: "Mountain retreat" },
  { name: "Galle", image: "https://jetwingtravels.com/wp-content/uploads/2023/08/Fort-Lighthouse-1240x710-1.jpg", description: "Historic fort" },
];

const tours = [
  { name: "Authentic Ceylon", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/d-01.jpg", desc: "Classic Sri Lanka experience" },
  { name: "Adventurous Spirit", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/adventure-01.jpg", desc: "For thrill seekers" },
  { name: "Barefoot Luxury", image: "https://jetwingtravels.com/wp-content/uploads/2023/12/foodjg.jpg", desc: "Luxury beach retreat" },
  { name: "Following The Wild", image: "https://jetwingtravels.com/wp-content/uploads/2023/12/wildcat-01.jpg", desc: "Wildlife safari" },
  { name: "Romantic Serendipity", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/d-01-1.jpg", desc: "Honeymoon special" },
  { name: "Join a Group", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/Untitled-1-01-3.jpg", desc: "Group tours" },
];

const hotels = [
  { name: "Jetwing Blue", location: "Negombo", image: "https://jetwingtravels.com/wp-content/uploads/2023/03/jetwing-blue-900x760-1.jpg" },
  { name: "Jetwing Colombo Seven", location: "Colombo", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/Jetwing-Colombo-Seven-Featured-Image.jpg" },
  { name: "Jetwing Saman Villas", location: "Bentota", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/featured-02.jpg" },
  { name: "Jetwing Vil Uyana", location: "Sigiriya", image: "https://jetwingtravels.com/wp-content/uploads/2023/10/head-02.jpg" },
];

const experiences = [
  { name: "Popular Beaches", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-03.jpg" },
  { name: "History & Culture", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-02.jpg" },
  { name: "Wildlife & Nature", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-01.jpg" },
  { name: "Lesser Travelled", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-05.jpg" },
  { name: "Adventure", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-04.jpg" },
  { name: "Gastronomy", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-06.jpg" },
];

const stats = [
  { number: "50+", label: "Years In Business" },
  { number: "20+", label: "Hotels Across The Island" },
  { number: "100+", label: "Specialist Teams" },
  { number: "500+", label: "Best Guides" },
];

const testimonials = [
  { name: "Charlotte", country: "United Kingdom", text: "Had a magical trip to Sri Lanka with over 1,000 photos. Smooth, hassle-free holiday with a perfect guide." },
  { name: "Charles", country: "Italy", text: "We thoroughly enjoyed our time in Sri Lanka, appreciating the country's beauty and the warmth of its people." },
  { name: "Gayathri", country: "India", text: "Grateful for the excellent 2-week itinerary. Special thanks for thoughtful hotel arrangements." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://jetwingtravels.com/wp-content/uploads/2024/01/home-desctop.jpg" 
            alt="Sri Lanka" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Dreams Take Flight</h1>
          <p className="text-xl md:text-2xl mb-8">Your Home, Your Journey, Your Hospitality Haven</p>
          <Link href="/destinations" className="btn-gold text-lg">
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Welcome to Jetwing Travels</h2>
            <h3 className="text-xl text-gold mb-6">The Home of Sri Lankan Hospitality</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Paradise. Where else do you find perfect beaches, ancient history, vibrant culture, exotic cuisine and exciting wilderness in one tiny island? Come, let's explore Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">What's Your Journey?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tours.slice(0, 6).map((tour, index) => (
              <Link 
                key={index} 
                href={`/tours/${tour.name.toLowerCase().replace(/ /g, '-')}`}
                className="group block relative overflow-hidden rounded-lg"
              >
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{tour.name}</h3>
                  <p className="text-sm text-gray-200">{tour.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Discover Sri Lanka</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <Link 
                key={index} 
                href={`/destination/${dest.name.toLowerCase()}`}
                className="group block relative overflow-hidden rounded-lg"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{dest.name}</h3>
                  <p className="text-sm text-gray-200">{dest.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Experiences</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Link 
                key={index} 
                href={`/experiences/${exp.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="group block relative overflow-hidden rounded-lg"
              >
                <img 
                  src={exp.image} 
                  alt={exp.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{exp.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Hotels</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {hotels.map((hotel, index) => (
              <Link 
                key={index} 
                href={`/hotel/${hotel.name.toLowerCase().replace(/ /g, '-')}`}
                className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg"
              >
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-primary">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/hotels" className="btn-primary">
              View All Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">What Our Guests Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-light p-6 rounded-lg">
                <p className="text-gray-600 mb-4 italic">"{test.text}"</p>
                <div className="font-bold text-primary">{test.name}</div>
                <div className="text-sm text-gray-500">{test.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Your Sri Lanka Adventure</h2>
          <p className="text-gray-300 mb-8">Contact us to plan your perfect trip</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <a href="tel:+94777265746" className="bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition-colors">
              📞 +94 77 726 5746
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
