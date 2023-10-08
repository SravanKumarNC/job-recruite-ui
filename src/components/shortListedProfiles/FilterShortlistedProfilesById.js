import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShortlistedProfilesService from '../../services/ShortlistedProfilesService';

function FilterShortlistedProfilesById() {

  const navigate = useNavigate();
  const {search} = useParams();

  const[shortlistedProfile, setShortlistedProfile] = useState({
    id:search,
    recruiter_id:"",
    profile_id:"",
    company_name:"",
    status:"",
    last_interviewed_on:""
  })

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await ShortlistedProfilesService.getShortlistedProfileById(shortlistedProfile.id);
        setShortlistedProfile(response.data);
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, [shortlistedProfile.id])

  const handleChange = (e) => {
    navigate("/shortlistedprofile");
  }

  return (
    <div>
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
            <tbody>
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
                <td className='text-center px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{shortlistedProfile.last_interviewed_on}</div>
                </td>
              </tr>
            </tbody>
        </table>
      </div> 
      <div className='rounded bg-green-300 hover:bg-green-200 flex justify-center'>
        <button className='w-10' onClick={handleChange}>Back</button>
      </div>
    </div>
  )
}

export default FilterShortlistedProfilesById