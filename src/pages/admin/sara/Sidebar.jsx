import { 
  Users,
  UserCheck,
  ShoppingBag,
  ClipboardList,
  Store,
  Settings,
  User,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SaraSidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menu, e) => {
    e.preventDefault(); // Prevent navigation when clicking to expand/collapse
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
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
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen fixed">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sara Dashboard
        </h1>
      </div>
      
      <nav className="mt-4 px-2">
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
                        end  // Add this to ensure exact matching
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
                end  // Add this to ensure exact matching
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
  );
};

export default SaraSidebar;