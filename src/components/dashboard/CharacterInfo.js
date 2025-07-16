export default function CharacterInfo() {
  const basicInfo = [
    { label: 'Character Name:', value: 'John_Doe' },
    { label: 'Level:', value: '42' },
    { label: 'Job:', value: 'Police Officer' },
    { label: 'Bank Balance:', value: '$125,430', color: 'text-green-400' }
  ];

  const licenses = [
    { label: 'Driving License:', value: '✓', color: 'text-green-400' },
    { label: 'Weapon License:', value: '✓', color: 'text-green-400' },
    { label: 'Pilot License:', value: '✗', color: 'text-red-400' },
    { label: 'Fishing License:', value: '✓', color: 'text-green-400' }
  ];

  const recentActivity = [
    { text: 'Completed police patrol - 2 hours ago', color: 'bg-blue-400' },
    { text: 'Purchased new vehicle - 5 hours ago', color: 'bg-green-400' },
    { text: 'Joined fishing tournament - 1 day ago', color: 'bg-purple-400' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Character Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-gray-900 dark:text-white font-bold mb-4">Basic Info</h3>
          <div className="space-y-3">
            {basicInfo.map((info, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{info.label}</span>
                <span className={info.color || 'text-gray-900 dark:text-white'}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white font-bold mb-4">Skills & Licenses</h3>
          <div className="space-y-3">
            {licenses.map((license, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{license.label}</span>
                <span className={license.color}>{license.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
        <h3 className="text-gray-900 dark:text-white font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 text-sm">
              <div className={`w-2 h-2 ${activity.color} rounded-full`}></div>
              <span className="text-gray-600 dark:text-gray-400">{activity.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 