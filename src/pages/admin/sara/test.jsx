import { 
  Users,
  UserCheck,
  ShoppingBag,
  ClipboardList,
  Store,
  Settings,
  User,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SaraSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menu, e) => {
    e.preventDefault();
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const returnToAdmin = () => {
    window.location.href = '/admin';
  };

  const menuItems = [
    {
      name: 'Users',
      icon: Users,
      path: '/sara/users'
    },
    {
      name: 'Agents',
      icon: UserCheck,
      path: '/sara/agents'
    },
    {
      name: 'Shop Owner',
      icon: User,
      path: '/sara/shop-owners',
      submenus: [
        { name: 'All Owners', path: '/sara/shop-owners' },
        { name: 'Approvals', path: '/sara/shop-owners/approvals' }
      ]
    },
    {
      name: 'Orders',
      icon: ShoppingBag,
      path: '/sara/orders',
      submenus: [
        { name: 'Current Orders', path: '/sara/orders/current' },
        { name: 'Processing', path: '/sara/orders/processing' },
        { name: 'Completed', path: '/sara/orders/completed' }
      ]
    },
    {
      name: 'Order History',
      icon: ClipboardList,
      path: '/sara/order-history'
    },
    {
      name: 'Store Settings',
      icon: Store,
      path: '/sara/store-settings'
    },
    {
      name: 'Profile',
      icon: Settings,
      path: '/sara/profile'
    }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-md text-gray-600 hover:text-gray-900 bg-white shadow-md"
      >
        <Menu size={20} />
      </button>

      {/* Main sidebar container with your desired classes */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen fixed">
        {/* Actual sidebar content with transform animations */}
        <div className={`h-full transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sara Admin
            </h1>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        
          <nav className="mt-4 px-2">
            <button
              onClick={returnToAdmin}
              className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 mb-4"
            >
              <ArrowLeft size={20} className="mr-3" />
              Return to Admin
            </button>
            
            {menuItems.map((item) => (
              <div key={item.name} className="mb-1">
              {item.submenus ? (
                <>
                  <div
                    onClick={(e) => toggleMenu(item.name, e)}
                    className={`flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                      expandedMenus[item.name] 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon size={18} className="mr-3" />
                      {item.name}
                    </div>
                    {expandedMenus[item.name] ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                    }
                  </div>

                  {expandedMenus[item.name] && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.submenus.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          end
                          className={({ isActive }) => 
                            `block px-3 py-2 text-sm rounded-lg ${
                              isActive 
                                ? 'bg-blue-50 text-blue-700' 
                                : 'text-gray-600 hover:bg-gray-50'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) => 
                    `flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-r-2 border-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                >
                  <div className="flex items-center">
                    <item.icon size={18} className="mr-3" />
                    {item.name}
                  </div>
                </NavLink>
              )}
            </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay - only visible on mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default SaraSidebar;