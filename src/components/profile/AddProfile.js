import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import ProfileService from '../../services/ProfileService';

function AddProfile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    id: "",
    profile_detail_id: "",
    document: "",
    status: "",
    uploaded_on: ""
  })

  const handleChange =(e)=>{
    const value = e.target.value;
    setProfile({...profile, [e.target.name]: value})
  }
  const submitProfile = (e)=>{
    e.preventDefault();
    ProfileService.submitProfile(profile).then((response) => {
        navigate("/profile")
    }).catch((error)=>{
        console.log(error);
    })
  }

  const reset = (e) => {
    e.preventDefault();
    setProfile({
      id: "",
      profile_detail_id: "",
      document: "",
      status: "",
      uploaded_on:""
    })
  }

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <form className='px-5 py-5'>
        <div className='font-bold text-2xl tracking-wider'>
          <h1 className=''>Add Profile</h1>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <label className="block">Id</label>
          <input 
            type="text" 
            name="id" 
            value={profile.id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <label className="block">Profile Details ID</label>
          <input 
            type="text" 
            name="profile_detail_id" 
            value={profile.profile_detail_id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <label className="block">Document</label>
          <input 
            type="text" 
            name="document" 
            value={profile.document} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <label className="block">Status</label>
          <input 
            type="text" 
            name="status" 
            value={profile.status} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <label className="block">Uploaded On </label>
          <input 
            type="text" 
            name="uploaded_on" 
            value={profile.uploaded_on} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button onClick={submitProfile} className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">Submit</button>
                    <button
                        onClick={reset} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Clear</button>
                </div>
      </form>
    </div>
  )
}

export default AddProfile