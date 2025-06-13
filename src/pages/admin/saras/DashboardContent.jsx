import { Bike, Users, IndianRupee } from 'lucide-react';
import StatCard from './StatCard';
import SimpleChart from './SimpleChart';
import RecentActivity from './RecentActivity';

const DashboardContent = () => {
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

  return (
    <div className="space-y-8">
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
          icon={IndianRupee} 
          color="bg-gradient-to-r from-purple-500 to-purple-600"
          trend={15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SimpleChart data={sampleRides} type="rides" />
        <SimpleChart data={sampleRides} type="revenue" />
      </div>

      <RecentActivity />
    </div>
  );
};

export default DashboardContent;