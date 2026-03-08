export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://jetwingtravels.com/wp-content/uploads/2023/12/tea.jpg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">The Home of Sri Lankan Hospitality</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Welcome to Jetwing Travels</h2>
          <p className="text-gray-600 mb-6">
            Jetwing Travels is the leading Destination Management Company in Sri Lanka. 
            With over 50 years of experience, we know our island home - its every nook and corner.
          </p>
          <p className="text-gray-600 mb-6">
            Our service is legendary and our standards are exceptional. We offer authentic 
            Sri Lankan experiences that combine adventure, culture, relaxation, and luxury.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-gold mb-2">20+</div>
              <div className="text-gray-600">Hotels Island-wide</div>
            </div>
            <div className="text-center p-6 bg-light rounded-lg">
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-600">Expert Guides</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
