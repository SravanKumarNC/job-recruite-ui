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

  const[validationErrors, setValidationErrors] = useState({});

  const handleChange =(e)=>{
    const {value, name} = e.target;
    setProfile((prevProfile)=>({...prevProfile, [name]: value}));
    setValidationErrors((prevError) => ({...prevError, [name]:""}));
  }
  const submitProfile = (e)=>{
    e.preventDefault();
    ProfileService.submitProfile(profile).then((response) => {
        navigate("/profile")
    }).catch((error)=>{
      if(error.response && error.response.status === 400){
        const responseData = error.response.data;
        console.log(responseData);
        console.error('Validation Errors:', responseData);
        
        setValidationErrors(responseData);
      }else{
        console.error('Error:', error);
      }
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
    setValidationErrors({});
  }

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <form className='px-5 py-5'>
        <div className='font-bold text-2xl tracking-wider'>
          <h1 className=''>Add Profile</h1>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Id</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.id}</label>}
          </div>
          <input 
            type="text" 
            name="id" 
            value={profile.id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Profile Details Id</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.profile_detail_id}</label>}
          </div>
          <input 
            type="text" 
            name="profile_detail_id" 
            value={profile.profile_detail_id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Document</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.document}</label>}
          </div>
          <input 
            type="text" 
            name="document" 
            value={profile.document} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Status</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.status}</label>}
          </div>
          <input 
            type="text" 
            name="status" 
            value={profile.status} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12      w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Uploaded )n</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.uploaded_on}</label>}
          </div>
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