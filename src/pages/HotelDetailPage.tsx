import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Wifi, Utensils, Car, Coffee, Dumbbell } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function HotelDetailPage() {
  const { id } = useParams();
  const [dates, setDates] = useState<{ startDate: Date | null; endDate: Date | null }>({ 
    startDate: null, 
    endDate: null 
  });
  const [guests, setGuests] = useState(2);

  // Mock hotel data - in a real app, this would come from an API
  const hotel = {
    id,
    name: 'Grand Plaza Hotel',
    location: 'New York City, USA',
    rating: 4.8,
    price: 299,
    description: 'Experience luxury in the heart of Manhattan with stunning city views and world-class amenities.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Coffee, name: 'Room Service' },
      { icon: Utensils, name: 'Restaurant' },
      { icon: Car, name: 'Parking' },
      { icon: Dumbbell, name: 'Fitness Center' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {hotel.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${hotel.name} - Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600">{hotel.location}</span>
              <div className="ml-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 font-semibold">{hotel.rating}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{hotel.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {hotel.amenities.map((amenity) => (
                <div key={amenity.name} className="flex items-center">
                  <amenity.icon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
            <span className="text-gray-600 ml-2">per night</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-in - Check-out
              </label>
              <DatePicker
                selectsRange
                startDate={dates.startDate}
                endDate={dates.endDate}
                onChange={(update: [Date | null, Date | null]) => {
                  setDates({ startDate: update[0], endDate: update[1] });
                }}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholderText="Select dates"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}