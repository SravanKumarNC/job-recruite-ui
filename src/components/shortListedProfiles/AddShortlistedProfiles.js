import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShortlistedProfilesService from '../../services/ShortlistedProfilesService';

const AddShortlistedProfiles = () => {

  const [shortlistedProfile, setShortlistedProfile] = useState({
    id:"",
    recruiter_id:"",
    profile_id:"",
    company_name:"",
    status:"",
    last_interviewed_on:""
  })
  
  const[validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value, name}= e.target;
    setShortlistedProfile((prevShortlisted)=>({...prevShortlisted, [name]: value}));
    setValidationErrors((prevErrors) => ({...prevErrors, [name]: ""}));
  }

  const submitShortlistedProfile = (e) =>{
    e.preventDefault();
    ShortlistedProfilesService.submitShortlistedProfiles(shortlistedProfile)
    .then((response) => { navigate("/shortlistedprofile")})
    .catch((error) => {
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
    setShortlistedProfile({
      id:"",
      recruiter_id:"",
      profile_id:"",
      company_name:"",
      status:"",
      last_interviewed_on:""
    });
    setValidationErrors({});
  }

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <form className='px-5 py-5'>
        <div className='font-bold text-2xl tracking-wider'>
          <h1>Add Shortlisted Profile</h1>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Id</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.id}</label>}
          </div>
          
          <input 
            type="text" 
            name="id" 
            value={shortlistedProfile.id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Recruiter Id</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.recruiter_id}</label>}
          </div>
          <input 
            type="text" 
            name="recruiter_id" 
            value={shortlistedProfile.recruiter_id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Profile Id</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.profile_id}</label>}
          </div>
          <input 
            type="text" 
            name="profile_id" 
            value={shortlistedProfile.profile_id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Company Name</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.company_name}</label>}
          </div>
          <input 
            type="text" 
            name="company_name" 
            value={shortlistedProfile.company_name} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Status</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.status}</label>}
          </div>
          <input 
            type="text" 
            name="status" 
            value={shortlistedProfile.status} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <div className='flex'>
            <label className="inline-block mr-4">Last Interviewed on</label>
            {validationErrors && <label className='block text-red-600'>{validationErrors.last_interviewed_on}</label>}
          </div>
          <input 
            type="text" 
            name="last_interviewed_on" 
            value={shortlistedProfile.last_interviewed_on} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button onClick={submitShortlistedProfile} className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">Submit</button>
                    <button
                        onClick={reset} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Clear</button>
                </div>
      </form>
    </div>
  )
}

export default AddShortlistedProfiles