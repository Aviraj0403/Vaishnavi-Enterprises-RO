import { Shield, Clock, Award, Leaf } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Comprehensive warranty on all installations"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service"
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Expert installation and maintenance"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable water solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Choose Vaishnavi Enterprises RO?</h2>
            <p className="text-xl text-slate-600 mb-8">
              With over 10 years of experience in water purification, we bring you the latest Vaishnavi Enterprises RO technology 
              combined with unmatched service quality.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 water-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Water treatment facility" 
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 glass-morphism">
              <div className="text-3xl font-bold text-blue-600">4,756+</div>
              <div className="text-slate-600">Happy Customers</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 glass-morphism">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-slate-600">Purification Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
