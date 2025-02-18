const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3"
          alt="Luxury Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 uppercase tracking-wide">
          Experience Luxury & Comfort
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Discover the finest stays with premium hospitality at our exclusive hotels.
        </p>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Check In"
            />
            <input
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Check Out"
            />
            <button className="bg-primary text-white p-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300">
              Search Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;