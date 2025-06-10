import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Edit2,
  Save,
  X,
  ChevronLeft,
  Globe,
  Calendar,
  Shield,
  CreditCard,
  LogOut
} from 'lucide-react';

const AdminProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [adminData, setAdminData] = useState({
    name: 'Super Admin',
    email: 'superadmin@example.com',
    phone: '+91 9876543210',
    joinDate: '15 Jan 2022',
    role: 'Super Administrator',
    permissions: 'Full Access',
    lastLogin: 'Today at 2:45 PM',
    securityLevel: 'High'
  });

  const [tempData, setTempData] = useState({...adminData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setAdminData({...tempData});
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempData({...adminData});
    setEditMode(false);
  };

  const ProfileField = ({ label, value, name, editable = true }) => (
    <div className="py-4 border-b border-gray-200">
      <label className="block text-sm font-medium text-gray-500 mb-1">{label}</label>
      {editMode && editable ? (
        <input
          type="text"
          name={name}
          value={tempData[name]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <p className="text-gray-900 font-medium">{value}</p>
      )}
    </div>
  );

  const ProfileCard = ({ title, icon: Icon, children }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
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
                <h1 className="text-2xl font-bold text-gray-900">Admin Profile</h1>
                <p className="text-sm text-gray-500">Manage your account settings and preferences</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {editMode ? (
                <>
                  <button 
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setEditMode(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Edit2 size={16} className="mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information Card */}
              <ProfileCard title="Personal Information" icon={User}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-4xl font-bold">SA</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{adminData.name}</h2>
                    <p className="text-gray-500">{adminData.role}</p>
                  </div>
                  <div>
                    <ProfileField label="Full Name" value={adminData.name} name="name" />
                    <ProfileField label="Email Address" value={adminData.email} name="email" />
                    <ProfileField label="Phone Number" value={adminData.phone} name="phone" />
                  </div>
                </div>
              </ProfileCard>

              {/* Account Information Card */}
              <ProfileCard title="Account Information" icon={Shield}>
                <ProfileField label="Role" value={adminData.role} editable={false} />
                <ProfileField label="Permissions" value={adminData.permissions} editable={false} />
                <ProfileField label="Security Level" value={adminData.securityLevel} editable={false} />
                <ProfileField label="Last Login" value={adminData.lastLogin} editable={false} />
                <div className="py-4">
                  <label className="block text-sm font-medium text-gray-500 mb-1">Joined Date</label>
                  <p className="text-gray-900 font-medium flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    {adminData.joinDate}
                  </p>
                </div>
              </ProfileCard>
            </div>

            {/* Right Column - Actions and Security */}
            <div className="space-y-6">
              {/* Security Card */}
              <ProfileCard title="Security" icon={Lock}>
                <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg mb-3">
                  <div className="flex items-center">
                    <Lock size={16} className="mr-3 text-gray-600" />
                    <span className="font-medium">Change Password</span>
                  </div>
                  <ChevronLeft size={16} className="text-gray-400 transform rotate-180" />
                </button>
                <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg mb-3">
                  <div className="flex items-center">
                    <Shield size={16} className="mr-3 text-gray-600" />
                    <span className="font-medium">Two-Factor Authentication</span>
                  </div>
                  <ChevronLeft size={16} className="text-gray-400 transform rotate-180" />
                </button>
                <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <CreditCard size={16} className="mr-3 text-gray-600" />
                    <span className="font-medium">Connected Devices</span>
                  </div>
                  <ChevronLeft size={16} className="text-gray-400 transform rotate-180" />
                </button>
              </ProfileCard>

              {/* Danger Zone Card */}
              <ProfileCard title="Danger Zone" icon={Globe}>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between py-3 px-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg">
                    <div className="flex items-center">
                      <LogOut size={16} className="mr-3" />
                      <span className="font-medium">Logout All Sessions</span>
                    </div>
                    <ChevronLeft size={16} className="text-red-400 transform rotate-180" />
                  </button>
                  <button className="w-full flex items-center justify-between py-3 px-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg">
                    <div className="flex items-center">
                      <X size={16} className="mr-3" />
                      <span className="font-medium">Delete Account</span>
                    </div>
                    <ChevronLeft size={16} className="text-red-400 transform rotate-180" />
                  </button>
                </div>
              </ProfileCard>

              {/* System Information */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 text-gray-600 mr-4">
                    <Globe size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">System Information</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">App Version</span>
                    <span className="font-medium">v2.5.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Updated</span>
                    <span className="font-medium">15 May 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Database</span>
                    <span className="font-medium">PostgreSQL 14.2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Server</span>
                    <span className="font-medium">AWS EC2 t3.xlarge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProfilePage;