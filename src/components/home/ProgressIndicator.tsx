interface ProgressIndicatorProps {
  currentSpend: number;
  nextTierThreshold: number;
  currentTier: string;
  nextTier: string;
}

export function ProgressIndicator({ 
  currentSpend, 
  nextTierThreshold, 
  currentTier, 
  nextTier 
}: ProgressIndicatorProps) {
  const progress = (currentSpend / nextTierThreshold) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600">{currentTier}</span>
        <span className="text-sm font-medium text-gray-600">{nextTier}</span>
      </div>
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-orange-600 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        ${currentSpend.toLocaleString()} / ${nextTierThreshold.toLocaleString()} spent
      </div>
    </div>
  );
}