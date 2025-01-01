import React from 'react';
import { ComponentCategory } from '../../types';
import CategoryButton from './CategoryButton';

const BuilderSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-white to-cyan-50 shadow-lg h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Components</h2>
        <div className="space-y-2">
          {Object.values(ComponentCategory).map((category) => (
            <CategoryButton key={category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuilderSidebar;