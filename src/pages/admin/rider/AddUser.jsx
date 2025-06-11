import { User, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const AddUser = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New User</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div>
            <div className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <User size={16} className="mr-2" />
              Full Name
            </div>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Enter user's full name" 
            />
          </div>
          
          <div>
            <div className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Mail size={16} className="mr-2" />
              Email Address
            </div>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Enter email address" 
            />
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Phone size={16} className="mr-2" />
              Phone Number
            </div>
            <input 
              type="tel" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Enter phone number" 
            />
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MapPin size={16} className="mr-2" />
              Location
            </div>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                <option>Select State</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400" />
            </div>
          </div>

          {/* Account Information */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">User Role</div>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                    <option>Standard User</option>
                    <option>Administrator</option>
                    <option>Shop Owner</option>
                    <option>Rider</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400" />
                </div>
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Account Status</div>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Suspended</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
            Create User
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;