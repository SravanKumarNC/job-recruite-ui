import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import ProfileService from '../../services/ProfileService';

function FilterProfileById() {

  const navigate = useNavigate();
  const {search} = useParams();

  const [profile, setProfile] = useState({
    id: search,
    profile_detail_id: "",
    document: "",
    status:"",
    uploaded_on:"",
  });

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await ProfileService.getProfileById(profile.id);
        setProfile(response.data);
      }catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[profile.id])

  const handleChange = () => {
    navigate("/profile");
  }

  return (
    <div>
      <div className='flex shadow border-b mt-2 mr-4'>
        <table className='min-w-full'>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Profile Details Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Document</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>status</th>
                    <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>updated on</th>
                </tr>
            </thead>
            <tbody>
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
                  <td className='text-center px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-600'>{profile.uploaded_on}</div>
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

export default FilterProfileById