import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import ProfileDetailsService from '../../services/ProfileDetailsService';

function EditProfileDetails() {

    console.log(1);
    const {id} = useParams();
    const navigate = useNavigate();


    const [profileDetail, setProfileDetail] = useState({
        id:id,
        first_name:"",
        last_name:"",
        mobile:"",
        email:""
    })

    const[validationErrors, setValidationErrors] = useState({});

    const handleChange =(e) => {
        const {value, name} = e.target;
        setProfileDetail((prevProfileDetails)=>({...prevProfileDetails, [e.target.name]:value}))
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await ProfileDetailsService.getProfileDetailsById(profileDetail.id)
                setProfileDetail(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[profileDetail.id]);

    const updateProfileDetails = (e) => {
        e.preventDefault();
        ProfileDetailsService.updateProfileDetails(profileDetail, id).then((response) => {navigate("/profiledetails")})
        .catch((error) => {
            if(error.response && error.response.status === 400){
                const responseData = error.response.data;
                console.log(responseData);
                console.error('Validation Errors:', responseData);
                
                setValidationErrors(responseData);
            }else{
                console.error('Error:', error);
            }
        });
    }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
            <div className="px-5 py-5">
                <div className="font-bold text-2xl tracking-wider ">
                    <h1 className="">Add Profile Details</h1>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className=' inline-block mr-4'>Id</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.id}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="id" 
                        value={profileDetail.id} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className=' inline-block mr-4'>First Name</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.first_name}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="first_name" 
                        value={profileDetail.first_name} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className=' inline-block mr-4'>Last Name</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.last_name}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="last_name" 
                        value={profileDetail.last_name} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className=' inline-block mr-4'>Mobile</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.mobile}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="mobile" 
                        value={profileDetail.mobile} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className=' inline-block mr-4'>Email</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.email}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="email" 
                        value={profileDetail.email}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button 
                        onClick={updateProfileDetails} 
                        className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">
                        Update
                    </button>
                    <button
                        onClick={() => navigate("/profiledetails")} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Cancle</button>
                </div>
            </div>
        </div>
  )
}

export default EditProfileDetails