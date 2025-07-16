'use client';

import { Layout } from '../../components/layout';

export default function BuySPPage() {
  const packages = [
    {
      id: 1,
      sp: '1,000 SP',
      price: '$10.00',
      description: 'Perfect for trying out premium features.',
      bonus: null,
      badge: null
    },
    {
      id: 2,
      sp: '2,500 + 200 Bonus',
      price: '$25.00',
      description: 'Great for occasional users.',
      bonus: '+200 Bonus',
      badge: null
    },
    {
      id: 3,
      sp: '5,000 + 500 Bonus',
      price: '$50.00',
      description: 'Best value for regular users.',
      bonus: '+500 Bonus',
      badge: 'Best Seller'
    },
    {
      id: 4,
      sp: '10,000 + 1500 Bonus',
      price: '$100.00',
      description: 'Ideal for power users.',
      bonus: '+1500 Bonus',
      badge: null
    }
  ];

  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Purchase Street Points (SP)</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Select a coin package to enhance your experience!</p>
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">Note: All purchases are final and non-refundable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 relative hover:shadow-lg transition-shadow">
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      pkg.badge === 'Best Seller' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Bonus Badge */}
                {pkg.bonus && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                      {pkg.bonus}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🪙</div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pkg.sp}</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{pkg.price}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{pkg.description}</p>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 