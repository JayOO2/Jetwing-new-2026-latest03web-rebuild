import Link from "next/link";

const offers = [
  {
    title: "Maldives Special Offer",
    discount: "Save up to 15%",
    price: "Starting from $5550",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/03/Maldives-offer.jpg",
    description: "Escape to a luxury 5-star private island resort in the Maldives."
  },
  {
    title: "Ayurveda Wellness",
    discount: "Save up to 15%",
    price: "Starting from $1180",
    image: "https://jetwingtravels.com/wp-content/uploads/2023/03/Untitled-2-05-scaled.jpg",
    description: "Immerse in the ultimate Ayurveda Wellness experience in Sri Lanka."
  },
];

export default function OffersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://jetwingtravels.com/wp-content/uploads/2023/12/ss-1.jpg"
          alt="Special Offers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl">More reasons to say yes</p>
        </div>
      </section>

      {/* Offers */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {offers.map((offer, index) => (
              <div key={index} className="bg-light rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-8">
                    <span className="bg-gold text-white px-3 py-1 text-sm rounded">{offer.discount}</span>
                    <h3 className="text-2xl font-bold text-primary mt-4 mb-2">{offer.title}</h3>
                    <p className="text-gold font-bold mb-4">{offer.price}</p>
                    <p className="text-gray-600 mb-6">{offer.description}</p>
                    <Link href="/contact" className="btn-primary">
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
