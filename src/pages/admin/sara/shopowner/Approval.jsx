import React, { useState } from 'react';
import { User, Search, Check, X, Clock, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import SaraSidebar from '../Sidebar';

const Approval = () => {
  // Sample pending approval data
  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, name: 'David Kim', email: 'david@example.com', shop: 'Sports Gear', requestDate: '2023-05-12', documents: 'Submitted' },
    { id: 2, name: 'Lisa Wong', email: 'lisa@example.com', shop: 'Book Haven', requestDate: '2023-05-15', documents: 'Pending' },
    { id: 3, name: 'Robert Taylor', email: 'robert@example.com', shop: 'Pet Paradise', requestDate: '2023-05-18', documents: 'Submitted' },
    { id: 4, name: 'Jessica Lee', email: 'jessica@example.com', shop: 'Beauty Spot', requestDate: '2023-05-20', documents: 'Submitted' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter approvals based on search term
  const filteredApprovals = pendingApprovals.filter(approval =>
    approval.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    approval.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    approval.shop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (id) => {
    // In a real app, you would send an API request here
    setPendingApprovals(pendingApprovals.filter(approval => approval.id !== id));
  };

  const handleReject = (id) => {
    // In a real app, you would send an API request here
    setPendingApprovals(pendingApprovals.filter(approval => approval.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SaraSidebar />
      <div className="flex-1 overflow-y-auto p-6 ml-64">
        <div className="flex items-center mb-6">
          <Clock className="mr-2" size={24} />
          <h1 className="text-2xl font-bold">Pending Approvals</h1>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search approvals..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Approvals Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shop
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Documents
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApprovals.map((approval) => (
                  <tr key={approval.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {approval.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{approval.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {approval.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {approval.shop}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        approval.documents === 'Submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {approval.documents}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {approval.requestDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <button 
                        onClick={() => handleApprove(approval.id)}
                        className="text-green-600 hover:text-green-900 p-1 rounded-md hover:bg-green-50"
                        title="Approve"
                      >
                        <Check className="inline" size={18} />
                      </button>
                      <button 
                        onClick={() => handleReject(approval.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50"
                        title="Reject"
                      >
                        <X className="inline" size={18} />
                      </button>
                      <button 
                        className="text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50"
                        title="View Details"
                      >
                        <ChevronDown className="inline" size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredApprovals.length}</span> of{' '}
                  <span className="font-medium">{pendingApprovals.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </button>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;