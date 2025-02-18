const Offers = () => {
  const offers = [
    {
      title: "Last Minute Offer - 15% Off",
      description: "Book your stay within 24 hours of check-in and save 15% on your stay.",
      image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
    },
    {
      title: "Early Bird Special",
      description: "Book 30 days in advance and save 20% on your stay.",
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          OFFERS <span className="text-gray-500">AS PER YOUR NEEDS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm">{offer.description}</p>
                  <button className="mt-4 bg-white text-primary px-4 py-2 rounded-md">
                    Book Now
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

export default Offers;