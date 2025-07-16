'use client';

import { useRouter } from 'next/navigation';
import { Layout } from '../../components/layout';

export default function CharactersPage() {
  const router = useRouter();

  // Mock character data
  const characters = [
    {
      id: 1,
      name: 'John_Doe',
      level: 42,
      job: 'Police Officer',
      bankBalance: '$125,430',
      playtime: '127h',
      lastSeen: '2 hours ago',
      avatar: '👮‍♂️',
      status: 'active',
      clothes: {
        top: 'Police Uniform',
        pants: 'Black Tactical Pants',
        shoes: 'Combat Boots',
        accessories: ['Badge', 'Radio', 'Handcuffs']
      },
      stats: {
        strength: 75,
        agility: 60,
        intelligence: 80,
        charisma: 70
      }
    },
    {
      id: 2,
      name: 'Sarah_Smith',
      level: 28,
      job: 'Mechanic',
      bankBalance: '$45,230',
      playtime: '89h',
      lastSeen: '1 day ago',
      avatar: '🔧',
      status: 'inactive',
      clothes: {
        top: 'Work Shirt',
        pants: 'Blue Jeans',
        shoes: 'Steel Toe Boots',
        accessories: ['Tool Belt', 'Safety Glasses']
      },
      stats: {
        strength: 85,
        agility: 50,
        intelligence: 65,
        charisma: 55
      }
    },
    {
      id: 3,
      name: 'Mike_Johnson',
      level: 15,
      job: 'Unemployed',
      bankBalance: '$2,450',
      playtime: '23h',
      lastSeen: '3 days ago',
      avatar: '👤',
      status: 'inactive',
      clothes: {
        top: 'T-Shirt',
        pants: 'Jeans',
        shoes: 'Sneakers',
        accessories: ['Watch']
      },
      stats: {
        strength: 40,
        agility: 45,
        intelligence: 50,
        charisma: 60
      }
    },
    {
      id: 4,
      name: 'Emma_Wilson',
      level: 33,
      job: 'Artist',
      bankBalance: '$18,750',
      playtime: '156h',
      lastSeen: '5 hours ago',
      avatar: '🎨',
      status: 'active',
      clothes: {
        top: 'Paint-Splattered Shirt',
        pants: 'Colorful Jeans',
        shoes: 'Canvas Sneakers',
        accessories: ['Paint Brushes', 'Beret']
      },
      stats: {
        strength: 35,
        agility: 70,
        intelligence: 85,
        charisma: 90
      }
    }
  ];

  const openCharacterDetail = (character) => {
    router.push(`/characters/${character.id}`);
  };

  const getVisualizationLabel = (character) => {
    return '3D Model';
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'text-green-500' : 'text-gray-500';
  };

  const getStatusIcon = (status) => {
    return status === 'active' ? '🟢' : '⚪';
  };

  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Characters</h1>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
              Create New Character
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <div 
                key={character.id}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openCharacterDetail(character)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{character.avatar}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{character.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{character.job}</p>
                      <span className="inline-block text-xs px-2 py-1 rounded-full mt-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                        {getVisualizationLabel(character)} View
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`text-sm ${getStatusColor(character.status)}`}>
                      {getStatusIcon(character.status)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Level:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{character.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Bank:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{character.bankBalance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Playtime:</span>
                    <span className="text-gray-900 dark:text-white">{character.playtime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Last Seen:</span>
                    <span className="text-gray-500 dark:text-gray-400">{character.lastSeen}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openCharacterDetail(character);
                    }}
                    className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-lg transition-colors text-sm"
                  >
                    View Details
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