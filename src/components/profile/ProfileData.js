import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProfileData({profile, deleteProfile}) {

    const navigate = useNavigate()

    const editProfile = (e, id) => {
        e.preventDefault();
        navigate(`/editprofile/${id}`);
    }

  return (
    <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profile.id}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profile.profile_detail_id}</div>
        </td>                        
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profile.document}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profile.status}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profile.uploaded_on}</div>
        </td>
        
        
        <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editProfile(e,profile.id)}
                className='text-blue-800 hover:text-blue-500 px-4'>
                Edit
            </a>
            <a 
                href="/"
                onClick={(e, id) => deleteProfile(e, profile.id)}
                className='text-red-600 hover:text-red-400 px-4'>
                Delete
            </a>
        </td>
    </tr>
  )
}

export default ProfileData