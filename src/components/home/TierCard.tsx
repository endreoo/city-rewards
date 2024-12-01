interface TierCardProps {
  title: string;
  description: string;
  benefits: string[];
  color: string;
  spendThreshold: string;
}

export function TierCard({ title, description, benefits, color, spendThreshold }: TierCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${color} transform transition-transform hover:scale-105`}>
      <div className="px-6 py-8">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-orange-600 font-medium">
          {spendThreshold === '0' ? 'Starting Tier' : `$${spendThreshold} annual spend`}
        </p>
        <p className="mt-4 text-gray-600">{description}</p>
        <ul className="mt-6 space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-orange-600">✓</span>
              <span className="ml-3 text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}