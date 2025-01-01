
import React from 'react';
import { Component } from '../../types';
import { useBuildContext } from '../../context/BuildContext';

interface ComponentCardProps {
  component: Component;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const { selectComponent, selectedComponents } = useBuildContext();
  const isSelected = selectedComponents[component.category]?.id === component.id;

  return (
    <div className={`
      p-4 rounded-lg border transition-all
      ${isSelected 
        ? 'border-cyan-500 bg-cyan-50' 
        : 'border-gray-200 bg-white hover:border-cyan-300'
      }
    `}>
      <div className="flex items-start gap-4">
        <img 
          src={component.imageUrl} 
          alt={component.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{component.name}</h3>
          <p className="text-sm text-gray-600">{component.brand}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="font-bold text-cyan-600">${component.price}</span>
            <button
              onClick={() => selectComponent(component)}
              className={`
                px-3 py-1 rounded text-sm font-medium transition-all
                ${isSelected
                  ? 'bg-cyan-600 text-white'
                  : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                }
              `}
            >
              {isSelected ? 'Selected' : 'Select'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;