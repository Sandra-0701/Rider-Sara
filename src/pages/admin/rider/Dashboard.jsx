import { useState } from 'react';
import { 
  Users, 
  Bike, 
  DollarSign, 
  TrendingUp, 
  MapPin, 
  UserPlus, 
  FileText,
  Menu,
  X,
  Home,
  Package,
  Globe,
  ArrowLeft
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Navigation handler for returning to admin
  const returnToAdmin = () => {
    window.location.href = '/admin';
    // Alternative for React Router: navigate('/admin')
  };

  // Sample data
  const stats = {
    riderCount: 245,
    userCount: 1250,
    revenue: 45680,
    totalRides: 890,
    vendorCount: 89,
    agentCount: 156
  };

  const sampleRides = [
    { month: 'Jan', rides: 120, revenue: 5200 },
    { month: 'Feb', rides: 150, revenue: 6800 },
    { month: 'Mar', rides: 180, revenue: 7200 },
    { month: 'Apr', rides: 140, revenue: 6100 },
    { month: 'May', rides: 200, revenue: 8900 }
  ];

  const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp size={14} className="mr-1" />
              +{trend}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
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
          <NavItem 
            icon={Home} 
            label="Dashboard" 
            active={activeMenu === 'dashboard'}
            onClick={() => setActiveMenu('dashboard')}
          />
          <NavItem 
            icon={Bike} 
            label="Add Rider" 
            active={activeMenu === 'add-rider'}
            onClick={() => setActiveMenu('add-rider')}
          />
          <NavItem 
            icon={UserPlus} 
            label="Add Users" 
            active={activeMenu === 'add-users'}
            onClick={() => setActiveMenu('add-users')}
          />
          <NavItem 
            icon={Globe} 
            label="Current Networks" 
            active={activeMenu === 'networks'}
            onClick={() => setActiveMenu('networks')}
          />
          <NavItem 
            icon={MapPin} 
            label="Add Locations" 
            active={activeMenu === 'locations'}
            onClick={() => setActiveMenu('locations')}
          />
          <NavItem 
            icon={FileText} 
            label="Reports" 
            active={activeMenu === 'reports'}
            onClick={() => setActiveMenu('reports')}
          />
        </div>
      </nav>
    </div>
  );

  const NavItem = ({ icon: Icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
        active 
          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <Icon size={20} className="mr-3" />
      {label}
    </button>
  );

  const SimpleChart = ({ data, type = 'rides' }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {type === 'rides' ? 'Rides Overview' : 'Revenue Overview'}
      </h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">{item.month}</span>
            <div className="flex items-center space-x-3">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${type === 'rides' ? (item.rides / 200) * 100 : (item.revenue / 9000) * 100}%` 
                  }}
                ></div>
              </div>
              <span className="text-sm font-bold text-gray-900 min-w-[60px] text-right">
                {type === 'rides' ? item.rides : `₹${item.revenue}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeMenu) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard 
                title="Total Riders" 
                value={stats.riderCount} 
                icon={Bike} 
                color="bg-gradient-to-r from-blue-500 to-blue-600"
                trend={12}
              />
              <StatCard 
                title="Total Users" 
                value={stats.userCount.toLocaleString()} 
                icon={Users} 
                color="bg-gradient-to-r from-green-500 to-green-600"
                trend={8}
              />
              <StatCard 
                title="Revenue" 
                value={`₹${stats.revenue.toLocaleString()}`} 
                icon={DollarSign} 
                color="bg-gradient-to-r from-purple-500 to-purple-600"
                trend={15}
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SimpleChart data={sampleRides} type="rides" />
              <SimpleChart data={sampleRides} type="revenue" />
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'New rider registered', user: 'John Doe', time: '2 mins ago', type: 'success' },
                  { action: 'Order completed', user: 'Sarah Smith', time: '5 mins ago', type: 'info' },
                  { action: 'Payment received', user: 'Mike Johnson', time: '10 mins ago', type: 'success' },
                  { action: 'New user signup', user: 'Emma Wilson', time: '15 mins ago', type: 'info' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                    <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'add-rider':
        return (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Rider</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Full Name</div>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter rider's full name" />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Email</div>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter email address" />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Phone Number</div>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter phone number" />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Motorcycle</option>
                    <option>Bicycle</option>
                    <option>Scooter</option>
                    <option>Car</option>
                  </select>
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">License Number</div>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter license number" />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Location</div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select State</option>
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
                  Add Rider
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Rider Report', desc: 'Detailed rider performance and statistics', icon: Bike, color: 'from-blue-500 to-blue-600' },
                { title: 'User Report', desc: 'User engagement and activity metrics', icon: Users, color: 'from-green-500 to-green-600' },
                { title: 'Revenue Report', desc: 'Financial performance and earnings', icon: DollarSign, color: 'from-purple-500 to-purple-600' },
                { title: 'User Feedback', desc: 'Customer reviews and ratings', icon: FileText, color: 'from-orange-500 to-orange-600' }
              ].map((report, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className={`w-12 h-12 bg-gradient-to-r ${report.color} rounded-lg flex items-center justify-center mb-4`}>
                    <report.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{report.desc}</p>
                  <button className="w-full px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    Generate Report
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
            <Package size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeMenu.replace('-', ' ').toUpperCase()}</h3>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

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
              <h1 className="text-xl font-semibold text-gray-900">
                {activeMenu === 'dashboard' ? 'Rider Dashboard' : activeMenu.replace('-', ' ').toUpperCase()}
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

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;