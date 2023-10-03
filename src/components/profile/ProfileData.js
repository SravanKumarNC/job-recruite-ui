import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProfileData() {

    const navigate = useNavigate()

    const editProfile = (e, id) => {
        e.preventDefault();
        navigate("/editprofile");
    }

  return (
    <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>1</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>25</div>
        </td>                        
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>pdf</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>y</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>29-9-23</div>
        </td>
        
        
        <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editProfile(e,1)}
                className='text-blue-800 hover:text-blue-500 px-4'>
                Edit
            </a>
            <a 
                href="/"
                // onClick={(e, id) => deleteRecruiter(e, recruiter.id)}
                className='text-red-600 hover:text-red-400 px-4'>
                Delete
            </a>
        </td>
    </tr>
  )
}

export default ProfileData