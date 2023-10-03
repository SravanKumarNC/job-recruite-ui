import React from 'react'

function FilterShortlistedProfilesById() {
  return (
    <div className='flex shadow border-b mt-2 mr-4'>
      <table className='min-w-full'>
          <thead className='bg-gray-100'>
              <tr>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Recruiter Id</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Profile Id</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Company Name</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Status</th>
                  <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>LastIterviewed on </th>
              </tr>
          </thead>
      </table>

    </div> 
  )
}

export default FilterShortlistedProfilesById