import { useState } from 'react';

interface HotelFiltersProps {
  filters: any;
  onFilterChange: (filters: any) => void;
}

export function HotelFilters({ filters, onFilterChange }: HotelFiltersProps) {
  const propertyTypes = [
    'Luxury Hotel',
    'Boutique Hotel',
    'Resort',
    'Serviced Apartment',
    'Guesthouse',
  ];

  const amenities = [
    'Free WiFi',
    'Pool',
    'Spa',
    'Fitness Center',
    'Restaurant',
    'Room Service',
    'Business Center',
    'Airport Shuttle',
    'Kitchen',
    'Parking',
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Property Type</h3>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  checked={filters.propertyTypes?.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...(filters.propertyTypes || []), type]
                      : (filters.propertyTypes || []).filter((t: string) => t !== type);
                    onFilterChange({ ...filters, propertyTypes: newTypes });
                  }}
                />
                <span className="ml-2 text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Price Range</h3>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [0, Number(e.target.value)]
              })}
              className="w-full"
            />
            <span className="text-gray-600">
              Up to ${filters.priceRange[1]}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Amenities</h3>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  checked={filters.amenities?.includes(amenity)}
                  onChange={(e) => {
                    const newAmenities = e.target.checked
                      ? [...(filters.amenities || []), amenity]
                      : (filters.amenities || []).filter((a: string) => a !== amenity);
                    onFilterChange({ ...filters, amenities: newAmenities });
                  }}
                />
                <span className="ml-2 text-gray-600">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}