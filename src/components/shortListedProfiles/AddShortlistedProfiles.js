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
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setShortlistedProfile({...shortlistedProfile, [e.target.name]: value});
  }

  const submitShortlistedProfile = (e) =>{
    e.preventDefault();
    ShortlistedProfilesService.submitShortlistedProfiles(shortlistedProfile)
    .then((response) => { navigate("/shortlistedprofile")})
    .catch((error) => {console.log(error)})
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
    })
  }

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <form className='px-5 py-5'>
        <div className='font-bold text-2xl tracking-wider'>
          <h1>Add Shortlisted Profile</h1>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Id</label>
          <input 
            type="text" 
            name="id" 
            value={shortlistedProfile.id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Recruiter Id</label>
          <input 
            type="text" 
            name="recruiter_id" 
            value={shortlistedProfile.recruiter_id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Profile Id</label>
          <input 
            type="text" 
            name="profile_id" 
            value={shortlistedProfile.profile_id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Company Name</label>
          <input 
            type="text" 
            name="company_name" 
            value={shortlistedProfile.company_name} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Status</label>
          <input 
            type="text" 
            name="status" 
            value={shortlistedProfile.status} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Last Interviewed On</label>
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