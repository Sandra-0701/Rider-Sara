import { Bike, Users, DollarSign, FileText } from 'lucide-react';

const ReportsContent = () => (
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

export default ReportsContent;