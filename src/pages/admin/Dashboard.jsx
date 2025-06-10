import { useState } from 'react';
import { 
  Users, 
  Bike, 
  DollarSign, 
  TrendingUp, 
  ArrowRight,
  Menu,
  X,
  Home,
  Settings,
  Bell,
  Search,
  Store,
  UserCheck,
  BarChart3,
  ShoppingCart,
  Activity,
  Globe
} from 'lucide-react';

const AdminMainDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('overview');

  // Sample data for the main admin dashboard
  const mainStats = {
    riderCount: 245,
    userCount: 1250,
    vendorCount: 89,
    agentCount: 156,
    totalRevenue: 125680,
    totalSales: 3450,
    totalRides: 1890
  };

  const salesData = [
    { month: 'Jan', sales: 320, rides: 120, revenue: 15200 },
    { month: 'Feb', sales: 450, rides: 150, revenue: 18800 },
    { month: 'Mar', sales: 380, rides: 180, revenue: 22200 },
    { month: 'Apr', sales: 520, rides: 140, revenue: 19100 },
    { month: 'May', sales: 680, rides: 200, revenue: 28900 },
    { month: 'Jun', sales: 750, rides: 220, revenue: 32400 }
  ];

  // Dashboard navigation handler
  const navigateToDashboard = (dashboard) => {
    if (dashboard === 'Rider') {
      window.location.href = '/admin/rider';
    } else if (dashboard === 'Sara') {
      window.location.href = '/admin/sara';
    }
    // Alternative for React Router:
    // navigate('/admin/rider') or navigate('/admin/sara')
  };

  const StatCard = ({ title, value, icon: Icon, color, trend, onClick }) => (
    <div 
      className={`bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ${onClick ? 'cursor-pointer transform hover:scale-105' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp size={14} className="mr-1" />
              +{trend}% from last month
            </p>
          )}
        </div>
        <div className={`p-4 rounded-xl ${color}`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
      {onClick && (
        <div className="mt-4 flex items-center text-blue-600 font-medium">
          <span className="text-sm">View Dashboard</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      )}
    </div>
  );

  const QuickAccessCard = ({ title, description, icon: Icon, color, onClick }) => (
    <div 
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={onClick}
    >
      <div className={`w-14 h-14 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4`}>
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 font-medium">
        <span className="text-sm">Access Dashboard</span>
        <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  );

  const ChartComponent = ({ data, title, type }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">{type}</span>
        </div>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => {
          const maxValue = Math.max(...data.map(d => d[type.toLowerCase()]));
          const width = (item[type.toLowerCase()] / maxValue) * 100;
          
          return (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 w-12">{item.month}</span>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm font-bold text-gray-900 min-w-[80px] text-right">
                {type === 'Revenue' ? `₹${item.revenue.toLocaleString()}` : item[type.toLowerCase()]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Super Admin
        </h1>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="mt-6 px-4">
        <div className="space-y-2">
          <NavItem 
            icon={Home} 
            label="Overview" 
            active={activeView === 'overview'}
            onClick={() => setActiveView('overview')}
          />
          <NavItem 
            icon={Bike} 
            label="Rider Dashboard" 
            onClick={() => navigateToDashboard('Rider')}
          />
          <NavItem 
            icon={ShoppingCart} 
            label="Sara Dashboard" 
            onClick={() => navigateToDashboard('Sara')}
          />
          <NavItem 
            icon={Store} 
            label="Vendor Management" 
            onClick={() => setActiveView('vendors')}
          />
          <NavItem 
            icon={UserCheck} 
            label="Agent Management" 
            onClick={() => setActiveView('agents')}
          />
          <NavItem 
            icon={BarChart3} 
            label="Analytics" 
            onClick={() => setActiveView('analytics')}
          />
          <NavItem 
            icon={Settings} 
            label="Settings" 
            onClick={() => setActiveView('settings')}
          />
        </div>
      </nav>
    </div>
  );

  const NavItem = ({ icon: Icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-r-2 border-blue-700' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon size={20} className="mr-3" />
      {label}
    </button>
  );

  const RecentActivityItem = ({ activity, user, time, type, icon: Icon }) => (
    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        type === 'success' ? 'bg-green-100 text-green-600' : 
        type === 'info' ? 'bg-blue-100 text-blue-600' : 
        'bg-orange-100 text-orange-600'
      }`}>
        <Icon size={16} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{activity}</p>
        <p className="text-xs text-gray-500">{user}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
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
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
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

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="space-y-8">
            {/* Quick Access Cards for Dashboard Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <QuickAccessCard
                title="Rider Dashboard"
                description="Manage riders, track deliveries, monitor performance and handle rider-related operations"
                icon={Bike}
                color="from-blue-500 to-blue-600"
                onClick={() => navigateToDashboard('Rider')}
              />
              <QuickAccessCard
                title="Sara Dashboard"
                description="Manage e-commerce operations, products, orders and customer experience"
                icon={ShoppingCart}
                color="from-purple-500 to-purple-600"
                onClick={() => navigateToDashboard('Sara')}
              />
            </div>

            {/* Main Stats - 5 Card Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <StatCard 
                title="Total Riders" 
                value={mainStats.riderCount} 
                icon={Bike} 
                color="bg-gradient-to-r from-blue-500 to-blue-600"
                trend={12}
              />
              <StatCard 
                title="Total Users" 
                value={mainStats.userCount.toLocaleString()} 
                icon={Users} 
                color="bg-gradient-to-r from-green-500 to-green-600"
                trend={8}
              />
              <StatCard 
                title="Total Vendors" 
                value={mainStats.vendorCount} 
                icon={Store} 
                color="bg-gradient-to-r from-orange-500 to-orange-600"
                trend={15}
              />
              <StatCard 
                title="Total Agents" 
                value={mainStats.agentCount} 
                icon={UserCheck} 
                color="bg-gradient-to-r from-teal-500 to-teal-600"
                trend={22}
              />
              <StatCard 
                title="Total Revenue" 
                value={`₹${mainStats.totalRevenue.toLocaleString()}`} 
                icon={DollarSign} 
                color="bg-gradient-to-r from-purple-500 to-purple-600"
                trend={18}
              />
            </div>

            {/* Charts Section - Sales, Rides, Revenue */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ChartComponent data={salesData} title="Sales Overview" type="Sales" />
              <ChartComponent data={salesData} title="Rides Overview" type="Rides" />
              <ChartComponent data={salesData} title="Revenue Overview" type="Revenue" />
            </div>

            {/* Recent Activity and System Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="space-y-2">
                  <RecentActivityItem
                    activity="New rider registered in Kerala"
                    user="John Doe"
                    time="2 mins ago"
                    type="success"
                    icon={Bike}
                  />
                  <RecentActivityItem
                    activity="Large order placed on Sara"
                    user="SuperMart Store"
                    time="5 mins ago"
                    type="info"
                    icon={ShoppingCart}
                  />
                  <RecentActivityItem
                    activity="New vendor application"
                    user="Fresh Foods Ltd"
                    time="10 mins ago"
                    type="warning"
                    icon={Store}
                  />
                  <RecentActivityItem
                    activity="Payment processed successfully"
                    user="Multiple transactions"
                    time="15 mins ago"
                    type="success"
                    icon={DollarSign}
                  />
                  <RecentActivityItem
                    activity="New agent onboarded"
                    user="Sarah Johnson"
                    time="20 mins ago"
                    type="info"
                    icon={UserCheck}
                  />
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">System Status</h3>
                <div className="space-y-4">
                  {[
                    { service: 'Rider App', status: 'Online', uptime: '99.9%', color: 'green' },
                    { service: 'Sara Platform', status: 'Online', uptime: '99.8%', color: 'green' },
                    { service: 'Payment Gateway', status: 'Online', uptime: '99.7%', color: 'green' },
                    { service: 'Notification Service', status: 'Maintenance', uptime: '95.2%', color: 'yellow' },
                    { service: 'Analytics Engine', status: 'Online', uptime: '99.5%', color: 'green' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          service.color === 'green' ? 'bg-green-500' : 
                          service.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-medium text-gray-900">{service.service}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-700">{service.status}</div>
                        <div className="text-xs text-gray-500">{service.uptime} uptime</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Activity size={32} className="mx-auto text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">98.5%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <TrendingUp size={32} className="mx-auto text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">+24%</div>
                  <div className="text-sm text-gray-600">Growth Rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <Users size={32} className="mx-auto text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <Globe size={32} className="mx-auto text-orange-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Active Regions</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminMainDashboard;