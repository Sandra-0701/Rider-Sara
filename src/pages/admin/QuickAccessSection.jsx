import { Bike, ShoppingCart, ArrowRight } from 'lucide-react';
import QuickAccessCard from './QuickAccessCard';

const QuickAccessSection = () => {
  const navigateToDashboard = (dashboard) => {
    if (dashboard === 'Rider') window.location.href = '/admin/rider';
    if (dashboard === 'Sara') window.location.href = '/admin/saras';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <QuickAccessCard
        title="Rider Dashboard"
        description="Manage riders, track deliveries, monitor performance"
        icon={Bike}
        color="from-blue-500 to-blue-600"
        onClick={() => navigateToDashboard('Rider')}
      />
      <QuickAccessCard
        title="Sara Dashboard"
        description="Manage e-commerce operations, products, orders"
        icon={ShoppingCart}
        color="from-purple-500 to-purple-600"
        onClick={() => navigateToDashboard('Sara')}
      />
    </div>
  );
};

export default QuickAccessSection;