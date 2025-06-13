import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Lock, Edit, Check, X } from 'lucide-react';
import SaraSidebar from './Sidebar';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    password: 'passord'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (field) => {
    setActiveField(null);
    // Add your save logic here
  };

  const profileFields = [
    {
      name: 'name',
      label: 'Full Name',
      icon: User,
      value: profile.name
    },
    {
      name: 'email',
      label: 'Email Address',
      icon: Mail,
      value: profile.email
    },
    {
      name: 'phone',
      label: 'Phone Number',
      icon: Phone,
      value: profile.phone
    },
    {
      name: 'address',
      label: 'Address',
      icon: MapPin,
      value: profile.address
    },

    {
      name: 'Change Password',
      label: 'Change Password',
      icon: Lock,
      value: profile.password
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <SaraSidebar />
      
      <div className="flex-1 overflow-y-auto p-6 ml-64">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
            >
              {isEditing ? (
                <>
                  <X size={16} className="mr-2" />
                  Cancel Editing
                </>
              ) : (
                <>
                  <Edit size={16} className="mr-2" />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 space-y-6">
              {profileFields.map((field) => (
                <div key={field.name} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${activeField === field.name ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}>
                        <field.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">{field.label}</h3>
                        {activeField === field.name ? (
                          <input
                            type="text"
                            name={field.name}
                            value={field.value}
                            onChange={handleInputChange}
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            autoFocus
                          />
                        ) : (
                          <p className="mt-1 text-gray-900">{field.value}</p>
                        )}
                      </div>
                    </div>
                    {isEditing && (
                      activeField === field.name ? (
                        <button
                          onClick={() => handleSave(field.name)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                        >
                          <Check size={18} />
                        </button>
                      ) : (
                        <button
                          onClick={() => setActiveField(field.name)}
                          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full"
                        >
                          <Edit size={16} />
                        </button>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;