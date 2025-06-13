
import { Package } from 'lucide-react';

const DefaultContent = ({ activeMenu }) => (
  <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
    <Package size={48} className="mx-auto text-gray-400 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeMenu.replace('-', ' ').toUpperCase()}</h3>
    <p className="text-gray-600">This section is under development.</p>
  </div>
);

export default DefaultContent;