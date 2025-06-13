import AdminLayout from './AdminLayout';
import QuickAccessSection from './QuickAccessSection';
import StatsSection from './StatsSection';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
        <div className="space-y-8">
          <QuickAccessSection />
          <StatsSection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          </div>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminDashboard;