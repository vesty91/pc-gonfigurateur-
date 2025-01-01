import React from 'react';
import { useBuildContext } from '../../context/BuildContext';
import { mockComponents } from '../../data/mockComponents';
import ComponentCard from './ComponentCard';

const ComponentList: React.FC = () => {
  const { activeCategory } = useBuildContext();

  if (!activeCategory) {
    return (
      <div className="text-center text-gray-500 mt-8">
        Select a category to view components
      </div>
    );
  }

  const components = mockComponents.filter(c => c.category === activeCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {components.map(component => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  );
};

export default ComponentList;