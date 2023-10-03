import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecruiterService from '../services/RecruiterService';

function FilterById() {

  const navigate = useNavigate();
  const {search} = useParams();

  const[recruiter, setRecruiter] = useState({
    id: search,
    first_name: "",
    last_name: "",
    company_name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    mobile: "",
    email: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RecruiterService.getRecruiterById(recruiter.id);
        setRecruiter(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [recruiter.id]);

  const handleChange = () =>{
    navigate("/")
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
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Company Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Address</th>
                        {/* <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Address2</th> */}
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>City</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>State</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Zip</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Mobile</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Email</th>
                    </tr>
                </thead>
                <tbody>
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

export default FilterById