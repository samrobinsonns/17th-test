export default function ServerInfo() {
  const serverInfo = [
    { label: 'Server IP:', value: 'connect.17thstreetrp.com', isCode: true },
    { label: 'Port:', value: '30120' },
    { label: 'Max Players:', value: '128' },
    { label: 'Uptime:', value: '99.9%', color: 'text-green-400' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-gray-900 dark:text-white font-bold mb-4">Server Information</h3>
      <div className="space-y-3 text-sm">
        {serverInfo.map((info, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">{info.label}</span>
            <span className={`${info.color || 'text-gray-900 dark:text-white'} ${info.isCode ? 'font-mono' : ''}`}>
              {info.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 