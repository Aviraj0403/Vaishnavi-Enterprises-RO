"use client";
export default function Products() {
  // Static product data (no need for `Product` import or API call)
  const products = [
    {
      id: 1,
      name: "KENT Supreme",
      description: "Advanced RO+UV+UF water purifier with high storage capacity.",
      price: "₹18,500",
      image: "https://example.com/product1.jpg",
      features: [
        "RO + UV + UF filtration",
        "High storage capacity",
        "Advanced digital display",
        "Purifies water with 100% safety",
      ],
    },
    {
      id: 2,
      name: "KENT Ace",
      description: "Compact and affordable RO water purifier for small households.",
      price: "₹12,000",
      image: "https://example.com/product2.jpg",
      features: [
        "RO filtration",
        "Energy-efficient",
        "High purification capacity",
        "Space-saving design",
      ],
    },
    {
      id: 3,
      name: "KENT Grand Plus",
      description: "A premium water purifier with multiple purification stages.",
      price: "₹22,000",
      image: "https://example.com/product3.jpg",
      features: [
        "RO + UV + UF filtration",
        "Zero water wastage technology",
        "Child lock feature",
        "Elegant design",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Vaishnavi Enterprises RO Systems</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Premium water purification technology for every need</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white shadow-xl overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <ul className="text-sm text-slate-600 space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button
                    onClick={() => window.location.href = `/products/${product.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
