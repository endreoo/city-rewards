import { User, CreditCard, Bell, Shield, History } from 'lucide-react';

export function AccountPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        <p className="mt-2 text-gray-600">Manage your profile and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                <History className="h-5 w-5 mr-3 text-gray-400" />
                Booking History
              </button>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                <Bell className="h-5 w-5 mr-3 text-gray-400" />
                Notifications
              </button>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                <Shield className="h-5 w-5 mr-3 text-gray-400" />
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}