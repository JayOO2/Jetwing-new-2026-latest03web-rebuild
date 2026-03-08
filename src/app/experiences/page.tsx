import Link from "next/link";

const experiences = [
  { name: "Popular Beaches", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-03.jpg", count: 15 },
  { name: "History & Culture", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-02.jpg", count: 12 },
  { name: "Wildlife & Nature", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-01.jpg", count: 10 },
  { name: "Lesser Travelled", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-05.jpg", count: 8 },
  { name: "Adventure", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-04.jpg", count: 14 },
  { name: "Gastronomy", image: "https://jetwingtravels.com/wp-content/uploads/2023/11/expt-06.jpg", count: 6 },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://jetwingtravels.com/wp-content/uploads/2024/01/home-desctop.jpg"
          alt="Experiences"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiences</h1>
          <p className="text-xl">Places, people, pleasures - all yours to discover</p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Link 
                key={index}
                href={`/experiences/${exp.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="group block relative overflow-hidden rounded-lg"
              >
                <img 
                  src={exp.image} 
                  alt={exp.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{exp.name}</h3>
                  <p className="text-sm text-gray-200">{exp.count} experiences</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
