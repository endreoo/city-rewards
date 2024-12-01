import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Building2 className="h-8 w-8 text-orange-600" />
        <Building2 className="h-8 w-8 text-blue-600 absolute top-0.5 left-0.5 opacity-50" />
      </div>
      <div className="font-sans">
        <span className="text-xl font-bold text-gray-900">City</span>
        <span className="text-xl font-light text-orange-600">Hotels</span>
        <span className="text-xl font-bold text-gray-900">.com</span>
      </div>
    </div>
  );
}