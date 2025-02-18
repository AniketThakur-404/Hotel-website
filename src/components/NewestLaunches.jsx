import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewestLaunches = () => {
  const launches = [
    {
      title: "Suba Elite",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      description: "Opening soon in the heart of Mumbai"
    },
    {
      title: "Click Hotel Premium",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
      description: "Experience luxury in the capital"
    },
    {
      title: "Suba Grand",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Coming soon to Silicon Valley of India"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          NEWEST <span className="text-gray-500">LAUNCHES</span>
        </h2>
        
        <Slider {...settings}>
          {launches.map((launch, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={launch.image}
                  alt={launch.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{launch.title}</h3>
                  <p className="text-gray-600 mb-2">{launch.location}</p>
                  <p className="text-gray-500 text-sm">{launch.description}</p>
                  <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md w-full">
                    Register Interest
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewestLaunches;