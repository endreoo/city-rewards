import { useState } from 'react';
import { Building2, Users, BarChart3, Headphones, ArrowRight } from 'lucide-react';

export function JoinAsPartner() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    rooms: '',
    address: '',
    city: '',
    country: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Building2 className="h-12 w-12 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Join CityHotels.com as a Partner</h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with 50,000+ members and boost your revenue with our world-class technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">50,000+ Members</h3>
          <p className="mt-2 text-gray-600">
            Access our growing network of loyal travelers
          </p>
        </div>
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">Revenue Management</h3>
          <p className="mt-2 text-gray-600">
            Dedicated revenue manager to optimize your business
          </p>
        </div>
        <div className="text-center">
          <Headphones className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">HotelOnline Support</h3>
          <p className="mt-2 text-gray-600">
            World-class technology and support services
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between mb-8">
          {[1, 2].map((num) => (
            <div
              key={num}
              className={`flex items-center ${num < 2 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= num ? 'bg-orange-600 text-white' : 'bg-gray-200'
                }`}
              >
                {num}
              </div>
              {num < 2 && (
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Name
                </label>
                <input
                  type="text"
                  name="propertyName"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.propertyName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                >
                  <option value="">Select a property type</option>
                  <option value="hotel">Hotel</option>
                  <option value="boutique">Boutique Hotel</option>
                  <option value="resort">Resort</option>
                  <option value="apartment">Serviced Apartment</option>
                  <option value="guesthouse">Guesthouse</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  name="rooms"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.rooms}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    value={formData.contactName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
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

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Website (optional)
                </label>
                <input
                  type="url"
                  name="website"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.website}
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
              {step === 2 ? 'Submit Application' : 'Continue'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Powered by HotelOnline</h3>
        <p className="text-gray-600">
          As a CityHotels.com partner, you'll get access to HotelOnline's world-class technology 
          and support services, including revenue management, channel management, and 24/7 
          technical support.
        </p>
      </div>
    </div>
  );
}