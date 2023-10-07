import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProfileDetailsData from './ProfileDetailsData';
import ProfileDetailsService from '../../services/ProfileDetailsService';

const ProfileDetailsList = () => {
    const navigate = useNavigate();
    const[loading, setLoading] = useState(true);
    const[profileDetails, setProfileDetails] = useState(null);
    const[search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await ProfileDetailsService.getProfileDetails();
                setProfileDetails(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[])

    const deleteProfileDetails = (e, id) => {
        e.preventDefault();
        ProfileDetailsService.deleteProfileDetails(id).then((res) => {
            if(profileDetails){
                setProfileDetails((prevProfileDetails) => {
                    return prevProfileDetails.filter((profileDetail) => profileDetail.id !== id);
                })
            }
        })
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    console.log(search);

  return (
    <div className='container mx-2 my-2'>
        
        <div className='flex justify-between'>
            <button 
                onClick={() => navigate("/addprofiledetails")}
                className='rounded bg-slate-300 hover:bg-slate-300 text-black px-4 py-3 font-semibold'>
                Add Profile Details
            </button>
            <div>
                <input type='text' placeholder='Search By Id' className='rounded px-4 py-2 w-90 mr-4 border-2' onChange={handleChange}></input>
                <button 
                    onClick={() => navigate(`/filterprofiledetails/${search}`)}
                    className='rounded bg-green-300 hover:bg-green-300 text-black px-4 py-2 font-semibold mr-4'>
                    search
                </button>
            </div>
        </div>

        <div className='flex shadow border-b mt-2 mr-4'>
            <table className='min-w-full'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Mobile</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Email</th>
                        <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Edit/Delete</th>
                    </tr>
                </thead>
                    {!loading && (
                        <tbody className='bg-white'>
                            {profileDetails.map((profileDetail) => (
                                <ProfileDetailsData profileDetail ={profileDetail} deleteProfileDetails ={deleteProfileDetails} key={profileDetail.id}/>
                            ))}
                        </tbody>
                    )}
            </table>

        </div>
        
    </div>
  )
}

export default ProfileDetailsList