'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '../../../components/layout';
import { CharacterPortrait, Character3DViewer, CharacterSilhouette, CharacterSprite } from '../../../components/characters/CharacterVisualizations';

export default function CharacterDetailPage({ params }) {
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock character data - in real app this would come from API
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

  useEffect(() => {
    const characterId = parseInt(params.id);
    const foundCharacter = characters.find(c => c.id === characterId);
    
    if (foundCharacter) {
      setCharacter(foundCharacter);
    }
    setLoading(false);
  }, [params.id]);

  const getVisualizationComponent = (character) => {
    return <Character3DViewer character={character} />;
  };

  const getVisualizationLabel = (character) => {
    return '3D Model';
  };

  const getVisualizationColor = (character) => {
    return 'purple';
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
        </div>
      </Layout>
    );
  }

  if (!character) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Character Not Found</h1>
            <button 
              onClick={() => router.push('/characters')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Back to Characters
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const colorClass = getVisualizationColor(character);
  const colorStyles = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
  };

  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => router.push('/characters')}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ←
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{character.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">{character.job}</p>
              </div>
            </div>
            <span className={`inline-block ${colorStyles[colorClass]} text-xs px-3 py-1 rounded-full`}>
              {getVisualizationLabel(character)} View
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 3D Model Viewer */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 h-full">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Character Model</h2>
                <div className="flex justify-center h-[600px]">
                  {getVisualizationComponent(character)}
                </div>
              </div>
            </div>

            {/* Character Stats & Info */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 h-full">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Character Stats</h2>
                
                {/* Basic Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Level:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{character.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bank Balance:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{character.bankBalance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Playtime:</span>
                    <span className="text-gray-900 dark:text-white">{character.playtime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Last Seen:</span>
                    <span className="text-gray-500 dark:text-gray-400">{character.lastSeen}</span>
                  </div>
                </div>

                {/* Stats Bars */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Attributes</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Strength</span>
                        <span className="text-gray-900 dark:text-white">{character.stats.strength}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: `${character.stats.strength}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Agility</span>
                        <span className="text-gray-900 dark:text-white">{character.stats.agility}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${character.stats.agility}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Intelligence</span>
                        <span className="text-gray-900 dark:text-white">{character.stats.intelligence}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: `${character.stats.intelligence}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Charisma</span>
                        <span className="text-gray-900 dark:text-white">{character.stats.charisma}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div className="bg-purple-500 h-3 rounded-full" style={{ width: `${character.stats.charisma}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Character Outfit */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Character Outfit</h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Clothing</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Top:</span>
                            <span className="text-gray-900 dark:text-white">{character.clothes.top}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Pants:</span>
                            <span className="text-gray-900 dark:text-white">{character.clothes.pants}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Shoes:</span>
                            <span className="text-gray-900 dark:text-white">{character.clothes.shoes}</span>
                          </div>
                        </div>
                      </div>
                      {character.clothes.accessories && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Accessories</h4>
                          <div className="flex flex-wrap gap-2">
                            {character.clothes.accessories.map((accessory, index) => (
                              <span key={index} className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs border">
                                {accessory}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium">
                    Edit Character
                  </button>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 rounded-lg transition-colors font-medium">
                    Change Outfit
                  </button>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 rounded-lg transition-colors font-medium">
                    Transfer Money
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 