import { ArrowRight } from 'lucide-react';

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

export default QuickAccessCard;