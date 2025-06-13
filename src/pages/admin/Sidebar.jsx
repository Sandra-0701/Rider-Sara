import { 
  Home, Bike, ShoppingCart, Store, 
  UserCheck, FileText, Settings, X
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigateToDashboard = (dashboard) => {
    // Convert to lowercase for consistency
    const path = dashboard.toLowerCase();
    window.location.href = `/admin/${path}`;
  };
  
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Super Admin
        </h1>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="mt-6 px-4">
        <div className="space-y-2">
          <NavItem icon={Home} label="Overview" active />
          <NavItem 
            icon={Bike} 
            label="Rider Dashboard" 
            onClick={() => navigateToDashboard('rider')} 
          />
          <NavItem 
            icon={ShoppingCart} 
            label="Sara Dashboard" 
            onClick={() => navigateToDashboard('saras')} 
          />
          <NavItem icon={Store} label="Vendor Management" />
          <NavItem icon={UserCheck} label="Agent Management" />
          <NavItem icon={FileText} label="Reports" />
          <NavItem icon={Settings} label="Settings" />
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
      active 
        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-r-2 border-blue-700' 
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    <Icon size={20} className="mr-3" />
    {label}
  </button>
);

export default Sidebar;