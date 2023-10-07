import React from "react";
import { useNavigate } from "react-router-dom";

const  ShortlistedProfilesData = ({shortlistedProfile,deleteShortlistedProfiles}) => {

    const navigate = useNavigate();

    const editShortlistedProfiles = (e, id) => {
        e.preventDefault();
        navigate(`/editshortlistedprofiles/${id}`);
    }

    return (
        <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{shortlistedProfile.id}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{shortlistedProfile.recruiter_id}</div>
        </td>                        
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{shortlistedProfile.profile_id}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{shortlistedProfile.company_name}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{shortlistedProfile.status}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{shortlistedProfile.last_interviewed_on}</div>
        </td>
        
        <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editShortlistedProfiles(e,shortlistedProfile.id)}
                className='text-blue-800 hover:text-blue-500 px-4'>
                Edit
            </a>
            <a 
                href="/"
                onClick={(e, id) => deleteShortlistedProfiles(e, shortlistedProfile.id)}
                className='text-red-600 hover:text-red-400 px-4'>
                Delete
            </a>
        </td>
    </tr>
    )
}
export default ShortlistedProfilesData;