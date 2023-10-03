import React from 'react'
import { useNavigate } from 'react-router-dom';

function RecruiterData({recruiter, deleteRecruiter}) {
    const navigate = useNavigate(); 
    const editRecruiter = (e, id) => {
        e.preventDefault();
        navigate(`/editRecruiter/${id}`);
    }

  return (
    <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.id}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.first_name}</div>
        </td>                        
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.last_name}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.company_name}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.address1}</div>
        </td>
        {/* <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.address2}</div>
        </td> */}
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.city}</div>
        </td>
       <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.state}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.zip}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.mobile}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{recruiter.email}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editRecruiter(e,recruiter.id)}
                className='text-blue-800 hover:text-blue-500 px-4'>
                Edit
            </a>
            <a 
                href="/"
                onClick={(e, id) => deleteRecruiter(e, recruiter.id)}
                className='text-red-600 hover:text-red-400 px-4'>
                Delete
            </a>
        </td>
    </tr>
  )
}

export default RecruiterData