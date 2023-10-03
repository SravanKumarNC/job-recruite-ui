import React from 'react'

function FilterProfileDetailsById() {
  return (
    <div className='flex shadow border-b mt-2 mr-4'>
      <table className='min-w-full'>
          <thead className='bg-gray-100'>
              <tr>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>First Name</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Last Name</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Mobile</th>
                  <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Email</th>
              </tr>
          </thead>
      </table>

    </div> 
  )
}

export default FilterProfileDetailsById