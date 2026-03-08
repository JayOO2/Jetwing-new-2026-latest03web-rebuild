import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "Hotels", href: "/hotels" },
  { name: "Contact Us", href: "/contact" },
];

const tourLinks = [
  { name: "Authentic Ceylon", href: "/tours/authentic-ceylon" },
  { name: "Adventurous Spirit", href: "/tours/adventurous-spirit" },
  { name: "Barefoot Luxury", href: "/tours/barefoot-luxury" },
  { name: "Following The Wild", href: "/tours/following-the-wild" },
  { name: "Romantic Serendipity", href: "/tours/romantic-serendipity" },
];

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/jetwing" },
  { name: "Twitter", url: "https://twitter.com/JetwingTravels" },
  { name: "YouTube", url: "https://www.youtube.com/@JetwingTravels" },
  { name: "Instagram", url: "https://www.instagram.com/jetwingtravels/" },
  { name: "LinkedIn", url: "https://lk.linkedin.com/company/jetwing-travels" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://jetwingtravels.com/wp-content/uploads/2023/03/main-logo.png" 
              alt="Jetwing Travels" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm">
              The leading Destination Management Company in Sri Lanka with over 50 years of experience in tourism.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gold">Tours</h3>
            <ul className="space-y-2">
              {tourLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gold">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📍 Jetwing Travels (Private) Ltd</p>
              <p>46/26, Navam Mawatha,</p>
              <p>Colombo 02, SRI LANKA</p>
              <p>📞 +94 77 726 5746 (24/7)</p>
              <p>✉️ info@jetwingtravels.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jetwing Travels. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
