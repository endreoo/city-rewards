import { Search, MapPin, Calendar, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface SearchBarProps {
  filters: any;
  onFilterChange: (filters: any) => void;
}

export function SearchBar({ filters, onFilterChange }: SearchBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Where are you going?"
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <DatePicker
            selectsRange
            startDate={filters.dates.startDate}
            endDate={filters.dates.endDate}
            onChange={(dates) => onFilterChange({
              ...filters,
              dates: { startDate: dates[0], endDate: dates[1] }
            })}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            placeholderText="Check-in - Check-out"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            value={filters.guests}
            onChange={(e) => onFilterChange({ ...filters, guests: Number(e.target.value) })}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </div>

        <button className="bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center">
          <Search className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
}