const Events = () => {
  const events = [
    {
      type: "Celebrations",
      image: "https://images.unsplash.com/photo-1511795409834-432f7b1728d2",
      description: "Make your special moments unforgettable"
    },
    {
      type: "Weddings",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      description: "Your dream wedding destination"
    },
    {
      type: "Corporate",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
      description: "Perfect venue for business events"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          EVENTS <span className="text-gray-500">AT SUBA</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={event.image}
                alt={event.type}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.type}</h3>
                  <p className="text-sm">{event.description}</p>
                  <button className="mt-4 bg-white text-primary px-4 py-2 rounded-md">
                    Learn More
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

export default Events;