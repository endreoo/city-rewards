import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80"
          alt="Modern luxury hotel exterior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevate Your <span className="text-orange-500">Travel Experience</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Join CityHotels Rewards and unlock a world of exclusive benefits across our network of 500+ accommodations worldwide.
          </p>
          <div className="mt-10 flex items-center space-x-6">
            <Link
              to="/rewards"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="#learn-more" className="text-white hover:text-orange-400 transition-colors">
              Learn about our tiers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}