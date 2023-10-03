import React from "react";
import { useNavigate } from "react-router-dom";

const  ShortlistedProfilesData = () => {

    const navigate = useNavigate();

    const editShortlistedProfiles = (e, id) => {
        e.preventDefault();
        navigate(`/editshortlistedprofiles/${id}`);
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
            <div className='text-sm text-gray-600'>26-9-2023</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>hard</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>y</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>java developer</div>
        </td>
        
        <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editShortlistedProfiles(e,1)}
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
export default ShortlistedProfilesData;