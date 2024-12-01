import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/hotels" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Our Hotels
            </Link>
            <Link to="/rewards" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium">
              Rewards
            </Link>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}