import React from 'react';
import { useBuildContext } from '../../context/BuildContext';
import ComponentList from './ComponentList';
import SelectedComponents from './SelectedComponents';

const BuilderWorkspace = () => {
  const { getTotalPrice } = useBuildContext();

  return (
    <div className="flex-1 p-6">
      <div className="bg-gradient-to-br from-white to-cyan-50 rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Custom PC Builder</h1>
          <p className="text-gray-600">Select components to build your dream PC</p>
        </div>

        <ComponentList />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Selected Components</h2>
            <SelectedComponents />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Build Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Compatibility:</span>
                <span className="text-cyan-600">✓ Compatible</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderWorkspace;
