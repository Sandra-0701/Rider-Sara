import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import DashboardContent from './DashboardContent';
import AddRiderContent from './AddRiderContent';
import ReportsContent from './ReportsContent';
import DefaultContent from './DefaultContent';
import AddUser from './AddUser';
import CurrentNetwork from './CurrentNetwork';
import AddLocation from './AddLocation';

const DashboardPage = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const renderContent = () => {
    switch(activeMenu) {
      case 'dashboard':
        return <DashboardContent />;
      case 'add-rider':
        return <AddRiderContent />;
      case 'add-user':
        return <AddUser />;
      case 'networks':
        return <CurrentNetwork />;
      case 'location':
        return <AddLocation />;
      case 'reports':
        return <ReportsContent />;
      default:
        return <DefaultContent activeMenu={activeMenu} />;
    }
  };

  return (
    <DashboardLayout 
      activeMenu={activeMenu} 
      setActiveMenu={setActiveMenu}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default DashboardPage;