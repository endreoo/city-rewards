import { useState } from 'react';
import { ArrowRight, Building2, Gift, Plane, Info, X } from 'lucide-react';

export function JoinRewards() {
  const [step, setStep] = useState(1);
  const [showWhatsAppInfo, setShowWhatsAppInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsappEnabled: false,
    address: '',
    city: '',
    country: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    marketingConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* WhatsApp Info Modal */}
      {showWhatsAppInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative">
            <button
              onClick={() => setShowWhatsAppInfo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-semibold mb-4">24/7 WhatsApp Concierge Service</h3>
            <p className="text-gray-600 mb-4">
              Enable WhatsApp communications to enjoy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Instant booking confirmations</li>
              <li>24/7 travel support and assistance</li>
              <li>Exclusive offers and promotions</li>
              <li>Real-time updates about your stays</li>
              <li>Direct communication with our concierge team</li>
            </ul>
            <p className="text-sm text-gray-500">
              You can opt-out of WhatsApp communications at any time through your account settings.
            </p>
            <button
              onClick={() => setShowWhatsAppInfo(false)}
              className="mt-6 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Building2 className="h-12 w-12 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Join CityHotels Rewards</h1>
        <p className="mt-4 text-lg text-gray-600">
          Start earning rewards at over 500+ hotels, apartments, and guesthouses worldwide
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex items-center ${num < 3 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= num ? 'bg-orange-600 text-white' : 'bg-gray-200'
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step > num ? 'bg-orange-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="whatsappEnabled"
                    id="whatsappEnabled"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    checked={formData.whatsappEnabled}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="whatsappEnabled" className="ml-2 text-sm text-gray-600">
                    Enable WhatsApp communications for 24/7 concierge service
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowWhatsAppInfo(true)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <Info className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Rest of the form steps remain the same */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Create Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Must be at least 8 characters long
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I accept the <a href="#" className="text-orange-600 hover:text-orange-700">terms and conditions</a>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I would like to receive exclusive offers and updates from CityHotels.com
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center"
            >
              {step === 3 ? 'Complete Registration' : 'Continue'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Gift className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Start at Urban Explorer</h3>
          <p className="mt-2 text-gray-600">
            Begin earning 3% back in points immediately on stays
          </p>
        </div>
        <div className="text-center">
          <Building2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">500+ Properties</h3>
          <p className="mt-2 text-gray-600">
            Access our diverse network of accommodations worldwide
          </p>
        </div>
        <div className="text-center">
          <Plane className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Flexible Rewards</h3>
          <p className="mt-2 text-gray-600">
            Convert points to miles or use for stays
          </p>
        </div>
      </div>
    </div>
  );
}