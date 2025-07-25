const AddRiderContent = () => (
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

export default AddRiderContent; 