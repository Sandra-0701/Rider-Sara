const RecentActivity = () => {
  const activities = [
    { action: 'New rider registered', user: 'John Doe', time: '2 mins ago', type: 'success' },
    { action: 'Order completed', user: 'Sarah Smith', time: '5 mins ago', type: 'info' },
    { action: 'Payment received', user: 'Mike Johnson', time: '10 mins ago', type: 'success' },
    { action: 'New user signup', user: 'Emma Wilson', time: '15 mins ago', type: 'info' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
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
  );
};

export default RecentActivity;