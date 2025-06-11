import { MapPin, Search, Filter, ChevronDown, ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';

const CurrentNetwork = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedState, setExpandedState] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample data - replace with your actual data
  const locationsByState = {
    'Kerala': [
      { id: 1, name: 'Kochi', riders: 45, shops: 28, status: 'active' },
      { id: 2, name: 'Thiruvananthapuram', riders: 32, shops: 19, status: 'active' },
      { id: 3, name: 'Kozhikode', riders: 28, shops: 15, status: 'active' },
      { id: 4, name: 'Kannur', riders: 18, shops: 10, status: 'limited' },
    ],
    'Tamil Nadu': [
      { id: 5, name: 'Chennai', riders: 68, shops: 42, status: 'active' },
      { id: 6, name: 'Coimbatore', riders: 35, shops: 22, status: 'active' },
      { id: 7, name: 'Madurai', riders: 25, shops: 15, status: 'limited' },
    ],
    'Karnataka': [
      { id: 8, name: 'Bangalore', riders: 72, shops: 50, status: 'active' },
      { id: 9, name: 'Mysore', riders: 30, shops: 18, status: 'active' },
      { id: 10, name: 'Mangalore', riders: 22, shops: 12, status: 'limited' },
    ]
  };

  const toggleState = (state) => {
    setExpandedState(expandedState === state ? null : state);
  };

  const filteredLocations = Object.entries(locationsByState).reduce((acc, [state, locations]) => {
    const filtered = locations.filter(location => {
      const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || location.status === activeFilter;
      return matchesSearch && matchesFilter;
    });
    if (filtered.length > 0) {
      acc[state] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <MapPin className="mr-2" size={20} />
          Current Networks
        </h2>
        
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center">
            <Plus size={16} className="mr-2" />
            Add Location
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search locations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-sm font-medium text-gray-700">
            <Filter className="mr-2" size={16} />
            Filter:
          </div>
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="limited">Limited</option>
          </select>
        </div>
      </div>

      {/* Locations List */}
      <div className="space-y-4">
        {Object.entries(filteredLocations).map(([state, locations]) => (
          <div key={state} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleState(state)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">{state}</span>
                <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                  {locations.length} locations
                </span>
              </div>
              {expandedState === state ? (
                <ChevronDown size={18} className="text-gray-500" />
              ) : (
                <ChevronRight size={18} className="text-gray-500" />
              )}
            </button>

            {expandedState === state && (
              <div className="divide-y divide-gray-200">
                {locations.map((location) => (
                  <div key={location.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 hover:bg-gray-50">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-blue-500 mr-2" />
                      <span className="font-medium text-gray-900">{location.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Riders:</span> {location.riders}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Shops:</span> {location.shops}
                    </div>
                    <div className="flex justify-end">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        location.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {location.status === 'active' ? 'Active' : 'Limited'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {Object.keys(filteredLocations).length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No locations found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentNetwork;