export default function QuickActions() {
  const actions = [
    {
      label: 'Connect to Server',
      primary: true,
      onClick: () => console.log('Connect to server clicked')
    },
    {
      label: 'View Character Stats',
      primary: false,
      onClick: () => console.log('View stats clicked')
    },
    {
      label: 'Manage Properties',
      primary: false,
      onClick: () => console.log('Manage properties clicked')
    },
    {
      label: 'Join Discord',
      primary: false,
      onClick: () => console.log('Join Discord clicked')
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
              action.primary
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600'
            }`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
} 