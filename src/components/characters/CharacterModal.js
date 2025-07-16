'use client';

import { useState } from 'react';
import { CharacterVisualizationSelector } from './CharacterVisualizations';

export default function CharacterModal({ character, isOpen, onClose }) {
  const [selectedVisualization, setSelectedVisualization] = useState(1);
  
  if (!isOpen || !character) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">{character.avatar}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{character.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{character.job}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Character Visualization */}
            <div className="xl:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Character Appearance</h3>
              <div className="flex justify-center mb-4">
                <CharacterVisualizationSelector 
                  character={character} 
                  selectedOption={selectedVisualization}
                />
              </div>
              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3, 4].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedVisualization(option)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      selectedVisualization === option
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {option === 1 && 'Portrait'}
                    {option === 2 && '3D View'}
                    {option === 3 && 'Silhouette'}
                    {option === 4 && 'Sprite'}
                  </button>
                ))}
              </div>
            </div>

            {/* Character Stats */}
            <div className="xl:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Character Stats</h3>
              <div className="space-y-3">
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
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Attributes</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Strength</span>
                      <span className="text-gray-900 dark:text-white">{character.stats.strength}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${character.stats.strength}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Agility</span>
                      <span className="text-gray-900 dark:text-white">{character.stats.agility}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${character.stats.agility}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Intelligence</span>
                      <span className="text-gray-900 dark:text-white">{character.stats.intelligence}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${character.stats.intelligence}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Charisma</span>
                      <span className="text-gray-900 dark:text-white">{character.stats.charisma}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${character.stats.charisma}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Character Clothes */}
            <div className="xl:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Character Outfit</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Clothing</h4>
                    <div className="space-y-2">
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
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
                  Edit Character
                </button>
                <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-lg transition-colors">
                  Change Outfit
                </button>
                <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-lg transition-colors">
                  Transfer Money
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 