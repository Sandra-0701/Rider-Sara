import { MapPin, ChevronDown, X, Check } from 'lucide-react';
import { useState } from 'react';

const AddLocation = () => {
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    city: '',
    postalCode: '',
    status: 'active',
    coverageRadius: 5,
    coordinates: { lat: '', lng: '' }
  });

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [previewLocation, setPreviewLocation] = useState(null);

  const states = ['Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi'];
  const cities = {
    'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Kannur'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Trichy'],
    'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
    'Delhi': ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCoordinateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      coordinates: {
        ...prev.coordinates,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Location added:', formData);

    setFormData({
      name: '',
      state: '',
      city: '',
      postalCode: '',
      status: 'active',
      coverageRadius: 5,
      coordinates: { lat: '', lng: '' }
    });
    setPreviewLocation(null);
  };

  const handleMapSelection = () => {
   
    const mockCoordinates = {
      lat: (Math.random() * 10).toFixed(6),
      lng: (Math.random() * 10).toFixed(6)
    };
    setFormData(prev => ({
      ...prev,
      coordinates: mockCoordinates
    }));
    setPreviewLocation({
      name: formData.name || 'New Location',
      coordinates: mockCoordinates
    });
    setIsMapOpen(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <MapPin className="mr-2" size={20} />
          Add New Location
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. Downtown Hub"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State *
            </label>
            <div className="relative">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                required
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400" />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                required
                disabled={!formData.state}
              >
                <option value="">Select City</option>
                {formData.state && cities[formData.state].map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400" />
            </div>
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. 682001"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status *
            </label>
            <div className="relative">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                required
              >
                <option value="active">Active</option>
                <option value="limited">Limited</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-4 text-gray-400" />
            </div>
          </div>

          {/* Coverage Radius */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Coverage Radius (km) *
            </label>
            <input
              type="range"
              name="coverageRadius"
              min="1"
              max="20"
              value={formData.coverageRadius}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center mt-2 text-gray-700">
              {formData.coverageRadius} km
            </div>
          </div>
        </div>

        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Location Coordinates *
            </label>
            <button
              type="button"
              onClick={() => setIsMapOpen(true)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Select on Map
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Latitude</label>
              <input
                type="text"
                name="lat"
                value={formData.coordinates.lat}
                onChange={handleCoordinateChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g. 9.9312"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Longitude</label>
              <input
                type="text"
                name="lng"
                value={formData.coordinates.lng}
                onChange={handleCoordinateChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g. 76.2673"
                required
              />
            </div>
          </div>

          {previewLocation && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <MapPin size={16} className="text-blue-500" />
                <span>
                  {previewLocation.name} - {previewLocation.coordinates.lat}, {previewLocation.coordinates.lng}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Map Modal */}
        {isMapOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900">Select Location on Map</h3>
                <button
                  onClick={() => setIsMapOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Map would be displayed here</p>
                    <button
                      onClick={handleMapSelection}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center mx-auto"
                    >
                      <Check size={16} className="mr-2" />
                      Select This Location
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium"
          >
            Add Location
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLocation;