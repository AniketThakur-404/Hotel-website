const Brands = () => {
  const brands = [
    {
      name: "Suba Hotels",
      description: "Our luxury hotels redefine comfort with world-class amenities and impeccable service.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      name: "Click Hotels",
      description: "Modern business hotels designed for the contemporary traveler.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd"
    }
  ];

  return (
    <div className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          OUR <span className="text-gray-400">BRANDS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="relative group">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                <p className="text-gray-400">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;