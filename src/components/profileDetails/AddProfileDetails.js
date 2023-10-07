import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileDetailsService from '../../services/ProfileDetailsService';

const AddProfileDetails = () => {

  const navigate = useNavigate();
  const[profileDetail, setProfileDetail] = useState({
    id:"",
    first_name:"",
    last_name:"",
    mobile:"",
    email:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProfileDetail({...profileDetail, [e.target.name]: value});
  }

  const submitProfileDetails = (e) => {
    e.preventDefault();
    ProfileDetailsService.submitProfileDetails(profileDetail).then((response) => {
      navigate("/profiledetails")
    }).catch((error) => {
      console.log(error);
    })
  }

  const reset = (e) => {
    e.preventDefault();
    setProfileDetail({
      id:"",
      first_name:"",
      last_name:"",
      mobile:"",
      email:""
    })
  }

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <form className='px-5 py-5'>
        <div className='font-bold text-2xl tracking-wider'>
          <h1>Add Profile Details</h1>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Id</label>
          <input 
            type="text" 
            name="id" 
            value={profileDetail.id} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">First Name</label>
          <input 
            type="text" 
            name="first_name" 
            value={profileDetail.first_name} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Last Name</label>
          <input 
            type="text" 
            name="last_name" 
            value={profileDetail.last_name} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Mobile</label>
          <input 
            type="text" 
            name="mobile" 
            value={profileDetail.mobile} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full my-4">
          <label className="block">Email</label>
          <input 
            type="text" 
            name="email" 
            value={profileDetail.email} 
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
        <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button onClick={submitProfileDetails} className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">Submit</button>
                    <button
                        onClick={reset} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Clear</button>
                </div>
      </form>
    </div>
  )
}

export default AddProfileDetails;