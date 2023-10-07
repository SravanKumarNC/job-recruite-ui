import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProfileDetailsData({profileDetail, deleteProfileDetails}) {

    const navigate = useNavigate();

    const editProfileDetails = (e, id) => {
        e.preventDefault();
        navigate(`/editprofiledetails/${id}`);
    }
  return (
    <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profileDetail.id}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profileDetail.first_name}</div>
        </td>                        
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profileDetail.last_name}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profileDetail.mobile}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{profileDetail.email}</div>
        </td>
        
        <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editProfileDetails(e,profileDetail.id)}
                className='text-blue-800 hover:text-blue-500 px-4'>
                Edit
            </a>
            <a 
                href="/"
                onClick={(e, id) => deleteProfileDetails(e, profileDetail.id)}
                className='text-red-600 hover:text-red-400 px-4'>
                Delete
            </a>
        </td>
    </tr>
  )
}

export default ProfileDetailsData