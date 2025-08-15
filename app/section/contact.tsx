"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";  // Change this line
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Send } from "lucide-react"; // Using icons from lucide-react

export default function Contact() {
  const router = useRouter();

  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showROIcon, setShowROIcon] = useState(false);

  const onSubmit = (data: any) => {
    // Redirect to WhatsApp with the form data prefilled
    const message = `*New Inquiry*%0AName: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AService: ${data.service}%0AMessage: ${data.message}`;
    const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    router.push(whatsappLink); // Using the correct router hook for navigation

    // Display RO icon after submission
    setShowROIcon(true);

    // Reset the form (optional)
    // setTimeout(() => setShowROIcon(false), 5000); // Optionally hide the icon after a few seconds
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@aquapurero.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Water Street, Pure City"
    }
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-200 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-600">Ready to experience pure water? Contact us for a free consultation.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 duration-300">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-slate-800 font-medium">Name *</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your Name"
                      className="px-4 py-2 mt-1 border rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {typeof errors.name?.message === "string" && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-slate-800 font-medium">Phone *</label>
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="Your Phone"
                      className="px-4 py-2 mt-1 border rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {typeof errors.phone?.message === "string" && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-slate-800 font-medium">Email *</label>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: "Invalid email address" } })}
                    type="email"
                    placeholder="your@email.com"
                    className="px-4 py-2 mt-1 border rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {typeof errors.email?.message === "string" && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-slate-800 font-medium">Service Required</label>
                  <select
                    {...register("service")}
                    className="px-4 py-2 mt-1 border rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">New Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="repair">Repair Service</option>
                    <option value="consultation">Consultation</option>
                  </select>
                  {typeof errors.service?.message === "string" ? (
                    <span className="text-red-500 text-sm">{errors.service.message}</span>
                  ) : null}
                </div>

                <div className="flex flex-col">
                  <label className="text-slate-800 font-medium">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="px-4 py-2 mt-1 border rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {typeof errors.message?.message === "string" && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center space-x-4">
                    <info.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-slate-800 font-semibold">{info.title}</h3>
                      <p className="text-blue-600">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-6 shadow-lg transition-transform hover:scale-105 duration-300">
                <h3 className="text-slate-800 font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-blue-600">
                  {businessHours.map((hour, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{hour.day}</span>
                      <span>{hour.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show RO Icon after submission */}
      {showROIcon && (
        <div className="fixed bottom-8 right-8 bg-white p-4 rounded-full shadow-lg animate-pulse">
          <img src="/ro-icon.svg" alt="RO Icon" className="w-16 h-16" />
        </div>
      )}
    </section>
  );
}
