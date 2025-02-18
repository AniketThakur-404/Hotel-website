const Stats = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary">60+</div>
            <div className="mt-2 text-gray-600">Locations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">100+</div>
            <div className="mt-2 text-gray-600">Hotels</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">5000+</div>
            <div className="mt-2 text-gray-600">Keys & Counting</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Elegant Stay. Luxurious Accommodations. Affordable Prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;