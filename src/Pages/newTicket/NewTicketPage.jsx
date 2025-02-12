import React from 'react';

export const NewTicketPage = () => {
  return (
    <div className="">
      <div className="">
      <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
        <div className="max-w-7xl m-auto text-xl font-bold">New Ticket</div>
      </div>

        <div className='mx-4'>
        <div className='bg-gradient-to-r max-w-7xl my-11  m-auto rounded-xl from-[#020124] via-[#1a1c80] to-[#01001f] text-white p-5 w-full'>
          <h3 className='font-semibold text-xl'>New Ticket</h3>
          <h3 className='text-5xl pt-3 pb-20'>Ticket Submission</h3>
        <form className="space-y-6 ">
          {/* Company Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-200 pb-3">Company Name</label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                placeholder="Type Company Name"
                className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 pb-3">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type Email"
                className="w-full p-3 bg-transparent  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Priority and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-200 pb-3">Priority</label>
              <select
                id="priority"
                name="priority"
                className="w-full p-3 bg-transparent border   border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option className='text-black border-b'>Select Priority</option>
                <option className='text-black border-b'>High</option>
                <option className='text-black border-b'>Medium</option>
                <option className='text-black border-b'>Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-200 pb-3">Category</label>
              <select
                id="category"
                name="category"
                className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option className='text-black border-b'>Select Category</option>
                <option className='text-black border-b'>Structure Cabling(Copper And Fiver)</option>
                <option className='text-black border-b'>Break/Fix Services</option>
                <option className='text-black border-b'>Rack And Device Installation</option>
                <option className='text-black border-b'>Network Migrations And Cutovers</option>
                <option className='text-black border-b'>Site Surveys</option>
                <option className='text-black border-b'>Consultations On Cutting-Edge Technologies</option>
                <option className='text-black border-b'>Deployment Of New Network Devices</option>
                <option className='text-black border-b'>Services Bundles And Maintenace</option>
                <option className='text-black border-b'>Pricing Strategy And Transparency</option>
                <option className='text-black border-b'>Others</option>
              </select>
            </div>
          </div>

          {/* Issue Summary */}
          <div>
            <label htmlFor="issue-summary" className="block text-sm font-medium text-gray-200 pb-3">Issue Summary</label>
            <textarea
              id="issue-summary"
              name="issue-summary"
              placeholder="Type Here..."
              rows="4"
              className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Details Description */}
          <div>
            <label htmlFor="details-description" className="block text-sm font-medium text-gray-200 pb-3">Details Description</label>
            <textarea
              id="details-description"
              name="details-description"
              placeholder="Type Here..."
              rows="4"
              className="w-full bg-transparent p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload */}
          <div>
          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 pb-3">Upload File</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Link Upload"
                className="w-full p-3 bg-transparent  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="px-6 bg-transparent p-3 border border-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 bg-transparent p-3 border bg-white text-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Ticket
            </button>
          </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  );
};
