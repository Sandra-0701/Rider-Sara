import { Bike, Users, Store, UserCheck,IndianRupee } from 'lucide-react';
import StatCard from './StatCard';

const StatsSection = () => {
  const stats = {
    riderCount: 245,
    userCount: 1250,
    vendorCount: 89,
    agentCount: 156,
    totalRevenue: 125680
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <StatCard title="Total Riders" value={stats.riderCount} icon={Bike} color="bg-gradient-to-r from-blue-500 to-blue-600" trend={12} />
      <StatCard title="Total Users" value={stats.userCount.toLocaleString()} icon={Users} color="bg-gradient-to-r from-green-500 to-green-600" trend={8} />
      <StatCard title="Total Vendors" value={stats.vendorCount} icon={Store} color="bg-gradient-to-r from-orange-500 to-orange-600" trend={15} />
      <StatCard title="Total Agents" value={stats.agentCount} icon={UserCheck} color="bg-gradient-to-r from-teal-500 to-teal-600" trend={22} />
      <StatCard title="Total Revenue" value={`₹${stats.totalRevenue.toLocaleString()}`} icon={IndianRupee} color="bg-gradient-to-r from-purple-500 to-purple-600" trend={18} />
    </div>
  );
};

export default StatsSection;