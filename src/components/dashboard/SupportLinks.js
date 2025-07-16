import Link from 'next/link';

export default function SupportLinks() {
  const supportLinks = [
    { label: '📖 New Player Guide', href: '#' },
    { label: '🛠️ Bug Report', href: '#' },
    { label: '💬 Contact Staff', href: '#' },
    { label: '📋 Server Rules', href: '#' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-gray-900 dark:text-white font-bold mb-4">Need Help?</h3>
      <div className="space-y-3">
        {supportLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
} 