import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProfileData from './ProfileData';
import ProfileService from '../../services/ProfileService';

const ProfileList = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [profiles, setProfiles] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const response = await ProfileService.getProfiles();
                setProfiles(response.data);
                console.log(profiles);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    const deleteProfile = (e,id) => {
        e.preventDefault();
        ProfileService.deleteProfile(id).then((res)=>{
            if(profiles){
                setProfiles((prevProfiles) => {
                    return prevProfiles.filter((profile) => profile.id !== id);
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
                onClick={() => navigate("/addprofile")}
                className='rounded bg-slate-300 hover:bg-slate-300 text-black px-4 py-3 font-semibold'>
                Add Profile
            </button>
            <div>
                <input type='text' placeholder='Search By Id' className='rounded px-4 py-2 w-90 mr-4 border-2' onChange={handleChange}></input>
                <button 
                    onClick={() => navigate(`/filterprofile/${search}`)}
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
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Profile Details Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Document</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>status</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>updated on</th>
                        <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Edit/Delete</th>
                    </tr>
                </thead>
                    {!loading && (
                        <tbody className='bg-white'>
                            {profiles?.map((profile) => (
                                <ProfileData profile ={profile} deleteProfile = {deleteProfile} key={profile.id}/>
                            ))}
                        </tbody>
                    )}
            </table>

        </div>
        
    </div>
  )
}

export default ProfileList