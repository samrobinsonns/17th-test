export default function StatsCards() {
  const stats = [
    {
      label: 'Server Status',
      value: 'Online',
      icon: '🟢',
      color: 'text-green-400',
      bgColor: 'bg-green-400'
    },
    {
      label: 'Online Players',
      value: '1,247',
      icon: '👥',
      color: 'text-white',
      bgColor: 'bg-white'
    },
    {
      label: 'Your Playtime',
      value: '127h',
      icon: '⏱️',
      color: 'text-white',
      bgColor: 'bg-white'
    },
    {
      label: 'Server Uptime',
      value: '99.9%',
      icon: '🛡️',
      color: 'text-white',
      bgColor: 'bg-white'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              <p className={`${stat.color === 'text-white' ? 'text-gray-900 dark:text-white' : stat.color} font-bold text-2xl`}>{stat.value}</p>
            </div>
            <div className="text-2xl">{stat.icon}</div>
          </div>
          {stat.label === 'Server Status' && (
            <div className={`w-3 h-3 ${stat.bgColor} rounded-full animate-pulse mt-2`}></div>
          )}
        </div>
      ))}
    </div>
  );
} 