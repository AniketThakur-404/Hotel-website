const Dining = () => {
  const restaurants = [
    {
      name: "Cinnamon",
      description: "Experience fine dining with a blend of traditional and contemporary cuisine.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    },
    {
      name: "Spice Garden",
      description: "Authentic Indian flavors in a modern setting.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          DINING <span className="text-gray-500">EXPERIENCE</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                  <p className="text-sm">{restaurant.description}</p>
                  <button className="mt-4 bg-white text-primary px-4 py-2 rounded-md">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dining;