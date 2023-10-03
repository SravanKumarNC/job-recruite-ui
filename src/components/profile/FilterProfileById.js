import React from 'react'

function FilterProfileById() {
  return (
    <div className='flex shadow border-b mt-2 mr-4'>
        <table className='min-w-full'>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Profile Details Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Document</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>status</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>updated on</th>
                </tr>
            </thead>
        </table>

    </div>
  )
}

export default FilterProfileById