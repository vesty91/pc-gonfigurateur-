import React from 'react';
import { useBuildContext } from '../../context/BuildContext';
import { categoryIcons } from '../../utils/icons';
import { ComponentCategory } from '../../types';

const SelectedComponents: React.FC = () => {
  const { selectedComponents, removeComponent } = useBuildContext();
  const categories = Object.values(ComponentCategory);

  return (
    <div className="space-y-3">
      {categories.map(category => {
        const component = selectedComponents[category];
        const Icon = categoryIcons[category];

        return (
          <div key={category} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
            <Icon className="w-5 h-5 text-gray-500" />
            <div className="flex-1">
              {component ? (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{component.name}</p>
                    <p className="text-sm text-gray-500">${component.price}</p>
                  </div>
                  <button
                    onClick={() => removeComponent(category)}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <p className="text-gray-400">No {category} selected</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedComponents;