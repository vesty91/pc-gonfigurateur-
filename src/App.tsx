import React from 'react';
import Navbar from './components/layout/Navbar';
import BuilderSidebar from './components/builder/BuilderSidebar';
import BuilderWorkspace from './components/builder/BuilderWorkspace';
import { BuildProvider } from './context/BuildContext';

function App() {
  return (
    <BuildProvider>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <Navbar />
        <div className="flex h-[calc(100vh-4rem)]">
          <BuilderSidebar />
          <BuilderWorkspace />
        </div>
      </div>
    </BuildProvider>
  );
}

export default App;