import React from 'react';

export const OngoingTicketPage = () => {
  // Array of ticket objects
  const tickets = [
    {
      id: 'T-20231207-01',
      name: 'John Doe',
      email: 'Georgia@Example.Com',
      priority: 'High',
      category: 'Structured Cabling (Copper And Fiber)',
      issueSummary: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content',
      detailsDescription: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content',
      fileLink: 'Link_to_file1.PDF',
      status: 'In Progress',
      notes: 'Investing Network Outage',
    },
    {
      id: 'T-20231207-02',
      name: 'Jane Smith',
      email: 'jane@example.com',
      priority: 'Medium',
      category: 'Network Upgrade',
      issueSummary: 'Network upgrade causing intermittent issues',
      detailsDescription: 'Network upgrade causing intermittent issues that need immediate fixing',
      fileLink: 'Link_to_file2.PDF',
      status: 'Pending',
      notes: 'Awaiting parts',
    },
    {
      id: 'T-20231207-03',
      name: 'Alice Brown',
      email: 'alice@sample.com',
      priority: 'Low',
      category: 'Software Update',
      issueSummary: 'Software update causing system lag',
      detailsDescription: 'Software update causing system lag after recent installation',
      fileLink: 'Link_to_file3.PDF',
      status: 'Completed',
      notes: 'Issue resolved with patch',
    },
    {
      id: 'T-20231207-03',
      name: 'Alice Brown',
      email: 'alice@sample.com',
      priority: 'Low',
      category: 'Software Update',
      issueSummary: 'Software update causing system lag',
      detailsDescription: 'Software update causing system lag after recent installation',
      fileLink: 'Link_to_file3.PDF',
      status: 'Completed',
      notes: 'Issue resolved with patch',
    },
    {
      id: 'T-20231207-03',
      name: 'Alice Brown',
      email: 'alice@sample.com',
      priority: 'Low',
      category: 'Software Update',
      issueSummary: 'Software update causing system lag',
      detailsDescription: 'Software update causing system lag after recent installation',
      fileLink: 'Link_to_file3.PDF',
      status: 'Completed',
      notes: 'Issue resolved with patch',
    },
    {
      id: 'T-20231207-03',
      name: 'Alice Brown',
      email: 'alice@sample.com',
      priority: 'Low',
      category: 'Software Update',
      issueSummary: 'Software update causing system lag',
      detailsDescription: 'Software update causing system lag after recent installation',
      fileLink: 'Link_to_file3.PDF',
      status: 'Completed',
      notes: 'Issue resolved with patch',
    },
    {
      id: 'T-20231207-03',
      name: 'Alice Brown',
      email: 'alice@sample.com',
      priority: 'Low',
      category: 'Software Update',
      issueSummary: 'Software update causing system lag',
      detailsDescription: 'Software update causing system lag after recent installation',
      fileLink: 'Link_to_file3.PDF',
      status: 'Completed',
      notes: 'Issue resolved with patch',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
          <div className="max-w-7xl m-auto text-xl font-bold">Ongoing Ticket</div>
        </div>

        {/* Table Wrapper with Horizontal Scroll */}
        <div className="overflow-x-auto px-4 py-2">
          <table className="min-w-full table-auto">
            <thead className="bg-[#2E4CB9] text-white">
              <tr>
                <th className="px-4 py-2 text-left">S. No</th>
                <th className="px-4 py-2 text-left">Ticket ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Priority</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Issue Summary</th>
                <th className="px-4 py-2 text-left">Details Description</th>
                <th className="px-4 py-2 text-left">File Link</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200">
              {tickets.map((ticket, index) => (
                <tr key={ticket.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{ticket.id}</td>
                  <td className="px-4 py-2">{ticket.name}</td>
                  <td className="px-4 py-2">{ticket.email}</td>
                  <td className="px-4 py-2">{ticket.priority}</td>
                  <td className="px-4 py-2">{ticket.category}</td>
                  <td className="px-4 py-2">{ticket.issueSummary}</td>
                  <td className="px-4 py-2">{ticket.detailsDescription}</td>
                  <td className="px-4 py-2">
                    <a href="#" className="text-blue-500">
                      {ticket.fileLink}
                    </a>
                  </td>
                  <td className="px-4 py-2">{ticket.status}</td>
                  <td className="px-4 py-2">{ticket.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
