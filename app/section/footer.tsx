import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const services = [
    "RO Installation",
    "Maintenance", 
    "Water Testing",
    "Emergency Repair"
  ];

  const products = [
    "KENT Grand Plus",
    "KENT Pride Plus", 
    "KENT Maxx",
    "Commercial RO"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 water-gradient rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2C5.95 2 3 5.5 3 9.5c0 4.5 7 10.5 7 10.5s7-6 7-10.5C17 5.5 14.05 2 10 2zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold">AquaPure RO</span>
            </div>
            <p className="text-slate-400 mb-4">Providing premium water purification solutions for healthier living.</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-slate-400">
              {products.map((product, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@aquapurero.com
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                123 Water Street, Pure City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 AquaPure RO. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
