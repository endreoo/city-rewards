import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    type: string;
    location: string;
    rating: number;
    price: number;
    image: string;
    description: string;
  };
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link to={`/hotels/${hotel.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex">
          <div className="w-1/3">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-2/3 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                <span className="inline-block px-2 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full mt-1">
                  {hotel.type}
                </span>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 font-semibold">{hotel.rating}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 line-clamp-2">{hotel.description}</p>
            <div className="mt-4 flex justify-between items-end">
              <div className="flex items-center text-orange-600">
                <span className="text-2xl font-bold">${hotel.price}</span>
                <span className="text-gray-600 text-sm ml-1">per night</span>
              </div>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}