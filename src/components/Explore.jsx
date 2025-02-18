import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Explore = () => {
  const locations = [
    {
      title: "Varanasi",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f2ef",
      description: "Experience the spiritual heart of India"
    },
    {
      title: "Mumbai",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7",
      description: "The city that never sleeps"
    },
    {
      title: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      description: "Discover the capital's charm"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          EXPLORE <span className="text-gray-500">LOCATIONS</span>
        </h2>
        
        <Slider {...settings}>
          {locations.map((location, index) => (
            <div key={index} className="px-4">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{location.title}</h3>
                    <p className="text-lg mb-4">{location.description}</p>
                    <button className="bg-white text-primary px-6 py-2 rounded-md">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Explore;