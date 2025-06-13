import { Download, FileText, FileDown } from 'lucide-react';

const ReportsContent = () => {
  // Sample report data
  const reports = [
    { id: 1, name: 'Rider Performance', type: 'Riders', lastGenerated: '2023-06-15', size: '2.4 MB' },
    { id: 2, name: 'User Activity', type: 'Users', lastGenerated: '2023-06-10', size: '1.8 MB' },
    { id: 3, name: 'Revenue Analysis', type: 'Financial', lastGenerated: '2023-06-05', size: '3.2 MB' },
    { id: 4, name: 'Customer Feedback', type: 'Reviews', lastGenerated: '2023-05-28', size: '1.5 MB' },
    { id: 5, name: 'Order History', type: 'Transactions', lastGenerated: '2023-05-20', size: '4.7 MB' },
  ];

  const handleDownload = (format, reportId) => {
    // In a real app, this would trigger an API call or file download
    console.log(`Downloading report ${reportId} in ${format} format`);
    // Example implementation:
    // window.open(`/api/reports/${reportId}/download?format=${format}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <FileText className="mr-2" size={20} />
          Reports
        </h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center">
            <Download size={16} className="mr-2" />
            Generate New Report
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Generated
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {report.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {report.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {report.lastGenerated}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {report.size}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button 
                      onClick={() => handleDownload('excel', report.id)}
                      className="text-blue-600 hover:text-blue-900 flex items-center"
                      title="Download Excel"
                    >
                      <FileDown size={16} className="mr-1" />
                      <span className="sr-only">Excel</span>
                    </button>
                    <button 
                      onClick={() => handleDownload('pdf', report.id)}
                      className="text-red-600 hover:text-red-900 flex items-center"
                      title="Download PDF"
                    >
                      <FileText size={16} className="mr-1" />
                      <span className="sr-only">PDF</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination would go here */}
      <div className="flex items-center justify-between mt-4 px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{reports.length}</span> of{' '}
              <span className="font-medium">{reports.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                disabled
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                &larr;
              </button>
              <button
                aria-current="page"
                className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </button>
              <button
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </button>
              <button
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsContent;