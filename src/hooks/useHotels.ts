import { useQuery } from '@tanstack/react-query';

// Simulated hotel data with diverse property types
const mockHotels = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    type: 'Luxury Hotel',
    location: 'New York City, USA',
    rating: 4.8,
    price: 299,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    description: 'Luxury hotel in the heart of Manhattan with stunning city views.',
  },
  {
    id: '2',
    name: 'Marina Bay Apartments',
    type: 'Serviced Apartment',
    location: 'Singapore',
    rating: 4.6,
    price: 159,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    description: 'Modern serviced apartments with full kitchens and living areas.',
  },
  {
    id: '3',
    name: 'Cozy Garden Guesthouse',
    type: 'Guesthouse',
    location: 'Amsterdam, Netherlands',
    rating: 4.5,
    price: 89,
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80',
    description: 'Charming guesthouse with private garden in historic district.',
  },
  {
    id: '4',
    name: 'Urban Boutique Hotel',
    type: 'Boutique Hotel',
    location: 'Barcelona, Spain',
    rating: 4.7,
    price: 199,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
    description: 'Designer boutique hotel with rooftop pool and bar.',
  },
  {
    id: '5',
    name: 'Mountain View Resort',
    type: 'Resort',
    location: 'Queenstown, New Zealand',
    rating: 4.9,
    price: 399,
    image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&q=80',
    description: 'Luxury mountain resort with spa and adventure activities.',
  },
];

export function useHotels(filters: any) {
  return useQuery({
    queryKey: ['hotels', filters],
    queryFn: async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filter hotels based on criteria
      return mockHotels.filter(hotel => {
        if (filters.location && !hotel.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
        if (filters.priceRange && hotel.price > filters.priceRange[1]) {
          return false;
        }
        return true;
      });
    },
  });
}