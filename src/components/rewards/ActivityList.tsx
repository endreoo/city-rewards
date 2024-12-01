import { format } from 'date-fns';

const activities = [
  {
    id: 1,
    type: 'stay',
    hotel: 'Grand Plaza Hotel',
    date: new Date('2024-02-15'),
    points: 500,
    amount: 250,
  },
  {
    id: 2,
    type: 'dining',
    hotel: 'Marina Bay Resort',
    date: new Date('2024-02-01'),
    points: 100,
    amount: 50,
  },
  {
    id: 3,
    type: 'redemption',
    hotel: 'The Ritz London',
    date: new Date('2024-01-15'),
    points: -1000,
    amount: null,
  },
];

export function ActivityList() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {format(activity.date, 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                  {activity.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {activity.hotel}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                  activity.points > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.points > 0 ? '+' : ''}{activity.points}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                  {activity.amount ? `$${activity.amount}` : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}