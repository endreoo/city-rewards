import { useState } from 'react';
import { JoinRewards } from '../components/rewards/JoinRewards';
import { TierList } from '../components/home/TierList';
import { Building2, Gift, Plane, CreditCard } from 'lucide-react';

export function RewardsPage() {
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">CityHotels.com Rewards Program</h1>
          <p className="mt-4 text-xl text-gray-600">
            Join our rewards program and unlock exclusive benefits at over 500+ properties worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Gift className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Points as Currency</h3>
            <p className="text-gray-600">
              Earn up to 7% back in points on every stay. Use points like cash for future bookings.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building2 className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Exclusive Discounts</h3>
            <p className="text-gray-600">
              Enjoy up to 10% off stays and dining at all participating properties.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Plane className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Miles Conversion</h3>
            <p className="text-gray-600">
              Convert your points to airline miles with our partner carriers worldwide.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CreditCard className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Flexible Redemption</h3>
            <p className="text-gray-600">
              Use points for room upgrades, dining, and exclusive experiences.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Join for Free</h3>
              <p className="text-gray-600">
                Sign up and start at Urban Explorer tier with immediate benefits
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Earn Points</h3>
              <p className="text-gray-600">
                Earn points on stays, dining, and experiences
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Enjoy Benefits</h3>
              <p className="text-gray-600">
                Redeem points and unlock more benefits as you progress
              </p>
            </div>
          </div>
        </div>

        <TierList />
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => {}} 
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
          >
            Join Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Rewards</h1>
        <p className="mt-2 text-gray-600">Track your progress and redeem rewards</p>
      </div>
      
      <TierList />
    </div>
  );
}