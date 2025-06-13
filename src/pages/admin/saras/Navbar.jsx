import { Menu } from 'lucide-react';

const Navbar = ({ sidebarOpen, setSidebarOpen, activeMenu }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            {activeMenu === 'dashboard' ? 'Sara Dashboard' : activeMenu.replace('-', ' ').toUpperCase()}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Welcome back, Admin
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;