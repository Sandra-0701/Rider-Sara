import { useState } from 'react';
import {
  Store,
  Settings,
  Image,
  DollarSign,
  Truck,
  CreditCard,
  Mail,
  Globe,
  MapPin,
  Phone,
  Clock,
  Calendar,
  Lock,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ChevronLeft
} from 'lucide-react';

const StoreSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [storeData, setStoreData] = useState({
    name: 'Sara Supermart',
    logo: '',
    description: 'Your one-stop shop for all daily needs',
    currency: 'INR (₹)',
    timezone: 'IST (UTC+5:30)',
    address: '123 Retail Park, MG Road, Bangalore, Karnataka 560001',
    contactEmail: 'support@sarasupermart.com',
    contactPhone: '+91 80 1234 5678',
    openingHours: '9:00 AM - 10:00 PM (Mon-Sun)',
    shippingMethods: [
      { id: 1, name: 'Standard Delivery', price: '₹50', deliveryTime: '2-3 days', active: true },
      { id: 2, name: 'Express Delivery', price: '₹120', deliveryTime: '1 day', active: true },
      { id: 3, name: 'Same Day Delivery', price: '₹200', deliveryTime: '4 hours', active: false }
    ],
    paymentMethods: ['Credit/Debit Card', 'UPI', 'Net Banking', 'Cash on Delivery'],
    taxRate: 18,
    minOrderValue: 100,
    maintenanceMode: false
  });

  const [formData, setFormData] = useState({...storeData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleShippingToggle = (id) => {
    setFormData(prev => ({
      ...prev,
      shippingMethods: prev.shippingMethods.map(method => 
        method.id === id ? { ...method, active: !method.active } : method
      )
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreData({...formData});
    // Here you would typically send data to your backend
    alert('Settings saved successfully!');
  };

  const SettingSection = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );

  const TabButton = ({ tab, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === tab ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
    >
      <Icon size={18} className="mr-3" />
      {label}
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-md text-gray-400 hover:text-gray-600"
                onClick={() => window.history.back()}
              >
                <ChevronLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>
                <p className="text-sm text-gray-500">Configure your store preferences and operations</p>
              </div>
            </div>
            <button 
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <CheckCircle2 size={16} className="mr-2" />
              Save Settings
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Column - Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 sticky top-6">
                <nav className="space-y-1">
                  <TabButton tab="general" icon={Settings} label="General" />
                  <TabButton tab="shipping" icon={Truck} label="Shipping" />
                  <TabButton tab="payments" icon={CreditCard} label="Payments" />
                  <TabButton tab="contact" icon={Mail} label="Contact" />
                  <TabButton tab="advanced" icon={Lock} label="Advanced" />
                </nav>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-4">
              {activeTab === 'general' && (
                <>
                  <SettingSection icon={Store} title="Store Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Store Logo</label>
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mr-4">
                            {formData.logo ? (
                              <img src={formData.logo} alt="Store Logo" className="w-full h-full object-cover" />
                            ) : (
                              <Image size={24} className="text-gray-400" />
                            )}
                          </div>
                          <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm">
                            Upload Image
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Store Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </SettingSection>

                  <SettingSection icon={DollarSign} title="Currency & Timezone">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                        <select
                          name="currency"
                          value={formData.currency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option>INR (₹)</option>
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                        <select
                          name="timezone"
                          value={formData.timezone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option>IST (UTC+5:30)</option>
                          <option>GMT (UTC+0:00)</option>
                          <option>EST (UTC-5:00)</option>
                          <option>PST (UTC-8:00)</option>
                        </select>
                      </div>
                    </div>
                  </SettingSection>

                  <SettingSection icon={Calendar} title="Business Hours">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Opening Hours</label>
                      <input
                        type="text"
                        name="openingHours"
                        value={formData.openingHours}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </SettingSection>
                </>
              )}

              {activeTab === 'shipping' && (
                <>
                  <SettingSection icon={Truck} title="Shipping Methods">
                    <div className="space-y-4">
                      {formData.shippingMethods.map(method => (
                        <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{method.name}</h4>
                            <p className="text-sm text-gray-600">
                              {method.price} • {method.deliveryTime}
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={method.active}
                              onChange={() => handleShippingToggle(method.id)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm">
                      + Add New Shipping Method
                    </button>
                  </SettingSection>

                  <SettingSection icon={AlertCircle} title="Order Restrictions">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Value</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                            ₹
                          </div>
                          <input
                            type="number"
                            name="minOrderValue"
                            value={formData.minOrderValue}
                            onChange={handleInputChange}
                            className="w-full pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </SettingSection>
                </>
              )}

              {activeTab === 'payments' && (
                <>
                  <SettingSection icon={CreditCard} title="Payment Methods">
                    <div className="space-y-3">
                      {formData.paymentMethods.map((method, index) => (
                        <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg">
                          <input
                            type="checkbox"
                            id={`payment-${index}`}
                            checked={true}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`payment-${index}`} className="ml-3 block text-sm font-medium text-gray-700">
                            {method}
                          </label>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm">
                      + Add New Payment Method
                    </button>
                  </SettingSection>

                  <SettingSection icon={DollarSign} title="Tax Settings">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
                      <input
                        type="number"
                        name="taxRate"
                        value={formData.taxRate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </SettingSection>
                </>
              )}

              {activeTab === 'contact' && (
                <>
                  <SettingSection icon={MapPin} title="Store Address">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </SettingSection>

                  <SettingSection icon={Mail} title="Contact Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                        <input
                          type="email"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                        <input
                          type="tel"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </SettingSection>
                </>
              )}

              {activeTab === 'advanced' && (
                <>
                  <SettingSection icon={Lock} title="Maintenance Mode">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Enable Maintenance Mode</h4>
                        <p className="text-sm text-gray-600">
                          Temporarily take your store offline while you make changes
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.maintenanceMode}
                          onChange={() => setFormData(prev => ({...prev, maintenanceMode: !prev.maintenanceMode}))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </SettingSection>

                  <SettingSection icon={AlertCircle} title="Danger Zone">
                    <div className="space-y-4">
                      <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                        <h4 className="font-medium text-red-800 mb-2">Reset All Settings</h4>
                        <p className="text-sm text-red-600 mb-3">
                          This will restore all settings to their default values. This action cannot be undone.
                        </p>
                        <button className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm">
                          Reset Settings
                        </button>
                      </div>
                    </div>
                  </SettingSection>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreSettingsPage;