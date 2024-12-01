import { TierCard } from './TierCard';
import { ProgressIndicator } from './ProgressIndicator';

export function TierList() {
  const tiers = [
    {
      title: 'Urban Explorer',
      description: 'Your starting tier - Begin earning rewards immediately',
      spendThreshold: '0',
      color: 'border-gray-400',
      benefits: [
        '5% off stays and dining',
        'Earn 3% back in points',
        '24/7 WhatsApp concierge',
        'Miles conversion with airline partners',
        'Early check-in and late check-out',
      ],
    },
    {
      title: 'Metropolitan Voyager',
      description: 'Unlock at $5,000 annual spend',
      spendThreshold: '5,000',
      color: 'border-orange-400',
      benefits: [
        '7% off stays and dining',
        'Earn 5% back in points',
        'Enhanced WhatsApp concierge',
        'Flexible point-to-mile transfers',
        'Room upgrades upon availability',
      ],
    },
    {
      title: 'CityHotels Elite',
      description: 'Unlock at $15,000 annual spend',
      spendThreshold: '15,000',
      color: 'border-orange-600',
      benefits: [
        '10% off stays and experiences',
        'Earn 7% back in points',
        'VIP concierge service',
        'Best point-to-mile transfer rates',
        'Guaranteed room upgrades',
      ],
    },
  ];

  // Example current user progress
  const currentSpend = 3500;
  const currentTier = 'Urban Explorer';
  const nextTier = 'Metropolitan Voyager';
  const nextTierThreshold = 5000;

  return (
    <div className="bg-gray-50 py-16" id="learn-more">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Membership Tiers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Progress through our tiers automatically as you enjoy stays at our properties
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <ProgressIndicator 
            currentSpend={currentSpend}
            nextTierThreshold={nextTierThreshold}
            currentTier={currentTier}
            nextTier={nextTier}
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.title} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
}