import React from 'react'

function FilterInterviewById() {
  return (
    <div className='flex shadow border-b mt-2 mr-4'>
      <table className='min-w-full'>
          <thead className='bg-gray-100'>
              <tr>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Shortlist Id</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Schedule DateTime</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Interview Level</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>status</th>
                  <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Interviewer Details</th>
              </tr>
          </thead>
      </table>

    </div>  
  )
}

export default FilterInterviewById