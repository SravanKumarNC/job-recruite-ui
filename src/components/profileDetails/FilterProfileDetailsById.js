import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileDetailsService from '../../services/ProfileDetailsService';

function FilterProfileDetailsById() {

  const navigate = useNavigate();
  const {search} = useParams();

  const[profileDetail, setProfileDetail] = useState({
    id: search,
    first_name: "",
    last_name: "",
    mobile: "",
    email: ""
  })

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response =await ProfileDetailsService.getProfileDetailsById(profileDetail.id)
        setProfileDetail( response.data)
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[profileDetail.id])

  const handleChange = () => {
    navigate("/profiledetails");
  }

  return (
    <div>
      <div className='flex shadow border-b mt-2 mr-4'>
        <table className='min-w-full'>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>First Name</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Last Name</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Mobile</th>
                    <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Email</th>
                </tr>
            </thead>
            <tbody>
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
                <td className='text-center px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{profileDetail.email}</div>
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

export default FilterProfileDetailsById