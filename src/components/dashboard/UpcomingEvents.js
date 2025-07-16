export default function UpcomingEvents() {
  const events = [
    {
      title: 'Police Academy',
      time: 'Tomorrow at 8:00 PM',
      borderColor: 'border-blue-500'
    },
    {
      title: 'Car Show',
      time: 'Saturday at 2:00 PM',
      borderColor: 'border-purple-500'
    },
    {
      title: 'Fishing Tournament',
      time: 'Sunday at 10:00 AM',
      borderColor: 'border-green-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-gray-900 dark:text-white font-bold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className={`border-l-4 ${event.borderColor} pl-4`}>
            <p className="text-gray-900 dark:text-white font-medium">{event.title}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 