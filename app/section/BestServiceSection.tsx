import Image from 'next/image';

export default function BestServiceSection() {
  return (
    <section
      id="best-ro-service"
      className="py-20 bg-gradient-to-b from-blue-200 to-white bg-cover bg-center min-h-screen relative"
    >
      {/* Background Image for Desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/images/RO.png"
          alt="RO Purifier"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Background Image for Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/images/RO.png"
          alt="RO Purifier"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          sizes="(max-width: 640px) 100vw, 100vw"
        />
      </div>

      {/* Overlay to enhance readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-white mb-6 shadow-md">
            Best RO Water Purifiers in Muzaffarpur
          </h2>
          {/* Description */}
          <p className="text-xl sm:text-lg text-white mb-8 opacity-90">
            Discover the best water purification solutions in Muzaffarpur with Kent RO systems.
            Pure water is essential for health, and we ensure your water is free from impurities.
          </p>
        </div>
      </div>
    </section>
  );
}
