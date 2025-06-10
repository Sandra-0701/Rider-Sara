import { useState } from 'react';
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
  Home,
  Bell,
  Search,
  Menu,
  X,
  Plus,
  BarChart2,
  Package,
  CreditCard,
  Shield
} from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const SaraDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: Home,
      path: '/sara'
    },
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
      name: 'Shop Owners',
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
      name: 'Products',
      icon: Package,
      path: '/sara/products'
    },
    {
      name: 'Payments',
      icon: CreditCard,
      path: '/sara/payments'
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
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
        
        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-1">
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
                onClick={() => {
                  if (item.submenus) toggleMenu(item.name);
                }}
              >
                <div className="flex items-center">
                  <item.icon size={18} className="mr-3" />
                  {item.name}
                </div>
                {item.submenus && (
                  expandedMenus[item.name] ? 
                    <ChevronDown size={16} /> : 
                    <ChevronRight size={16} />
                )}
              </NavLink>

              {item.submenus && expandedMenus[item.name] && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenus.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
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
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
              >
                <Menu size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sara Dashboard</h1>
                <p className="text-sm text-gray-500">Manage your e-commerce platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">SA</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-50">
          {/* This Outlet will render the matched child route */}
          <Outlet />
          
          {/* Default content when no child route is matched */}
          {!window.location.pathname.split('/').filter(Boolean).length > 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">1,245</p>
                      <p className="text-sm text-green-600 mt-2 flex items-center">
                        <BarChart2 size={14} className="mr-1" />
                        +12% from last month
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                      <ShoppingBag size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Products</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">568</p>
                      <p className="text-sm text-green-600 mt-2 flex items-center">
                        <BarChart2 size={14} className="mr-1" />
                        +8% from last month
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
                      <Package size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">₹2,45,680</p>
                      <p className="text-sm text-green-600 mt-2 flex items-center">
                        <BarChart2 size={14} className="mr-1" />
                        +18% from last month
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                      <CreditCard size={28} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                    <Plus size={16} className="mr-2" />
                    New Order
                  </button>
                </div>
                {/* Order table would go here */}
                <div className="text-center py-8 text-gray-500">
                  <ShoppingBag size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>Recent orders will appear here</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SaraDashboard;