import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ShortlistedProfilesData from './ShortlistedProfilesData';
import ShortlistedProfilesService from '../../services/ShortlistedProfilesService';

function ShortlistedProfilesList() {
    const navigate = useNavigate();
    const [shortlistedProfiles, setShortlistedProfiles] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await ShortlistedProfilesService.getShortlistedProfiles()
                setShortlistedProfiles(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    },[])

    const deleteShortlistedProfiles = (e, id) => {
        e.preventDefault();
        ShortlistedProfilesService.deleteShortlistedProfiles(id)
        .then((res)=>{
            if(shortlistedProfiles){
                setShortlistedProfiles((prev) => {
                    return prev.filter((shortlisted) => shortlisted.id !== id);
                })
            }
        })
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
    <div className='container mx-2 my-2'>
        
        <div className='flex justify-between'>
            <button 
                onClick={() => navigate("/addshortlistedprofile")}
                className='rounded bg-slate-300 hover:bg-slate-300 text-black px-4 py-3 font-semibold'>
                Add Shortlisted Profile
            </button>
            <div>
                <input type='text' placeholder='Search By Id' className='rounded px-4 py-2 w-90 mr-4 border-2' onChange={handleChange}></input>
                <button 
                    onClick={() => navigate(`/filtershortlistedprofile/${search}`)}
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
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Recruiter Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Profile Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Company Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Status</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Last Interviewes on</th>
                        <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Edit/Delete</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='bg-white'>
                        {shortlistedProfiles.map((shortlistedProfile) => (
                            <ShortlistedProfilesData shortlistedProfile = {shortlistedProfile} deleteShortlistedProfiles ={deleteShortlistedProfiles} key={shortlistedProfile.id}/>
                        ))}
                    </tbody>
                )}
            </table>

        </div>
        
    </div>
  )
}

export default ShortlistedProfilesList