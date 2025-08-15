import { Wrench, Microscope, Settings, Check } from "lucide-react";

const services = [
  {
    id: 1,
    title: "RO Installation",
    description:
      "Professional installation of reverse osmosis (RO) systems for home and office use. Ensuring optimal performance and longevity.",
    icon: "wrench",
    features: [
      "Expert installation",
      "Certified technicians",
      "Quick and hassle-free",
      "Long-lasting systems",
    ],
  },
  {
    id: 2,
    title: "RO Maintenance",
    description:
      "Comprehensive maintenance services to keep your RO system running efficiently. Periodic checks and filter replacements.",
    icon: "microscope",
    features: [
      "Filter replacement",
      "Performance checks",
      "Annual servicing",
      "Affordable rates",
    ],
  },
  {
    id: 3,
    title: "RO Repair",
    description:
      "Fast and reliable RO repair services. Get your water purifier back in working condition with our expert team.",
    icon: "tools",
    features: [
      "Emergency repairs",
      "Genuine parts",
      "Affordable solutions",
      "Satisfaction guaranteed",
    ],
  },
];

const iconMap = {
  tools: Wrench,
  wrench: Wrench,
  microscope: Microscope,
  settings: Settings,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Premium Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive water purification solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;

            return (
              <div
                key={service.id}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 rounded-lg overflow-hidden transform hover:scale-105"
              >
                <div className="p-8">
                  <div className="w-16 h-16 water-gradient rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-all duration-300 transform hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 transition-all duration-300">{service.description}</p>
                  <ul className="text-slate-600 space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center hover:text-blue-600 transition-all duration-300"
                      >
                        <Check className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
