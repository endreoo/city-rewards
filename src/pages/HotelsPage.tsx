import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { HotelCard } from '../components/hotels/HotelCard';
import { HotelFilters } from '../components/hotels/HotelFilters';
import { SearchBar } from '../components/hotels/SearchBar';
import { useHotels } from '../hooks/useHotels';

export function HotelsPage() {
  const [filters, setFilters] = useState({
    location: '',
    dates: { startDate: null, endDate: null },
    guests: 2,
    priceRange: [0, 1000],
    amenities: [],
  });

  const { data: hotels, isLoading } = useHotels(filters);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <SearchBar filters={filters} onFilterChange={setFilters} />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <HotelFilters filters={filters} onFilterChange={setFilters} />
        </div>

        <div className="col-span-9">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-white h-64 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {hotels?.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}