'use client';

import ThreeJSViewer from './ThreeJSViewer';

// 3D Character Viewer with Three.js
export function Character3DViewer({ character }) {
  return (
    <div className="w-full h-full">
      <ThreeJSViewer character={character} />
    </div>
  );
} 