import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import DashboardContent from './DashboardContent';
import DefaultContent from './DefaultContent';
import UsersPage from './UserPage';
import AgentsPage from './AgentPage';
import AllOwners from './AllOwner';
import Approval from './Approval';
import Order from './Order';
import StoreSetting from './StoreSettings';
import OrderHistory from './OrderHistory';

const SaraDashboardPage = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const renderContent = () => {
    switch(activeMenu) {
      case 'dashboard':
        return <DashboardContent />;
      case 'users':
        return <UsersPage/>;
      case 'agents':
        return <AgentsPage />;
      case 'all-shop-owner':
        return <AllOwners />;
      case 'approval':
        return <Approval />;
      case 'orders':
        return <Order/>;
      case 'order-history':
        return <OrderHistory/>;
      case 'settings':
        return <StoreSetting />;
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

export default SaraDashboardPage;