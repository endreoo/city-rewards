import { CreditCard, Gift, Plane } from 'lucide-react';

export function PointsOverview() {
  const points = 2500;
  const pointsValue = (points * 0.01).toFixed(2); // Each point worth $0.01

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Available Points</h3>
          <p className="mt-2 text-3xl font-bold text-orange-600">{points.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Worth ${pointsValue}</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Points Earning</h3>
          <p className="mt-2 text-3xl font-bold text-orange-600">5%</p>
          <p className="text-sm text-gray-600">On all stays</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Next Tier</h3>
          <p className="mt-2 text-3xl font-bold text-orange-600">2,500</p>
          <p className="text-sm text-gray-600">Points needed</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center px-4 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors">
          <CreditCard className="h-5 w-5 mr-2" />
          Redeem Points
        </button>
        <button className="flex items-center justify-center px-4 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors">
          <Gift className="h-5 w-5 mr-2" />
          Gift Points
        </button>
        <button className="flex items-center justify-center px-4 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors">
          <Plane className="h-5 w-5 mr-2" />
          Transfer to Miles
        </button>
      </div>
    </div>
  );
}