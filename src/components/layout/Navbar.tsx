import React from 'react';
import { ShoppingCart, User, Cpu, Home, Settings, HeartHandshake, Package } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { label: 'Home', icon: <Home className="w-5 h-5" /> },
    { label: 'Build PC', icon: <Cpu className="w-5 h-5" /> },
    { label: 'Components', icon: <Package className="w-5 h-5" /> },
    { label: 'Prebuilt', icon: <Settings className="w-5 h-5" /> },
    { label: 'Support', icon: <HeartHandshake className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-white" />
            <span className="font-bold text-xl text-white">PC Builder Pro</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="text-white/80 hover:text-white">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;