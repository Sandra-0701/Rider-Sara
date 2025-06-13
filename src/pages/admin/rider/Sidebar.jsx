import { 
  Home,
  Bike,
  UserPlus,
  Globe,
  MapPin,
  FileText,
  X,
  ArrowLeft
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, activeMenu, setActiveMenu }) => {
  const returnToAdmin = () => {
    window.location.href = '/';
  };

  const NavItem = ({ icon: Icon, label, menuKey }) => (
    <button
      onClick={() => setActiveMenu(menuKey)}
      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
        activeMenu === menuKey
          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon size={20} className="mr-3" />
      {label}
    </button>
  );

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Rider Dashboard</h1>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="mt-6 px-4">
        <div className="space-y-2">
          <button
            onClick={returnToAdmin}
            className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 mb-4"
          >
            <ArrowLeft size={20} className="mr-3" />
            Return to Admin
          </button>
          <NavItem icon={Home} label="Dashboard" menuKey="dashboard" />
          <NavItem icon={Bike} label="Add Rider" menuKey="add-rider" />
          <NavItem icon={UserPlus} label="Add Users" menuKey="add-user" />
          <NavItem icon={Globe} label="Current Networks" menuKey="networks" />
          <NavItem icon={MapPin} label="Add Locations" menuKey="location" />
          <NavItem icon={FileText} label="Reports" menuKey="reports" />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;