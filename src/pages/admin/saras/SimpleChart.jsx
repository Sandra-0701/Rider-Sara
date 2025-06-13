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

export default SimpleChart;