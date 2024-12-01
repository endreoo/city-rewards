import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About CityHotels.com</h3>
            <p className="text-gray-400 mb-4">
              Experience stays at over 500+ hotels, apartments, and guesthouses worldwide with our exclusive rewards program.
            </p>
            <Link 
              to="/partners" 
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
            >
              <Building2 className="h-4 w-4 mr-2" />
              Register Your Property
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Travelers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/hotels" className="hover:text-orange-500 transition-colors">
                  Find a Hotel
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-orange-500 transition-colors">
                  Rewards Program
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-orange-500 transition-colors">
                  Member Benefits
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-orange-500 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>24/7 Member Support</li>
              <li>WhatsApp Concierge</li>
              <li>support@cityhotels.com</li>
              <li>
                <Link to="/partners" className="hover:text-orange-500 transition-colors">
                  Partner Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CityHotels.com. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}