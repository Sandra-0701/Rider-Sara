import { TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
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
  </div>
);

export default StatCard;