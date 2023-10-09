import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RecruiterService from '../services/RecruiterService';

function EditRecruiter() {

    const {id} = useParams();
    const navigate = useNavigate();

    const[recruiter, setRecruiter] = useState({
        id: id,
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
    const[validationErrors, setValidationErrors] = useState({});

    const handleChange =(e)=>{
        const {value, name} = e.target;
        setRecruiter((prevRecruiter)=>({...prevRecruiter, [name]: value}));
        setValidationErrors((prevErrors)=>({...prevErrors, [name]: ""}));
    }



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

    const updateRecruiter = (e) => {
        e.preventDefault();
        console.log(recruiter);
        RecruiterService.updateRecruiter(recruiter, id)
          .then((response) => {
            navigate("/recruiterList");
          })
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
      };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
            <div className="px-5 py-5">
                <div className="font-bold text-2xl tracking-wider ">
                    <h1 className="">Edit Recruiter</h1>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className=' inline-block mr-4'>Id</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.id}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='Id'
                        name="id" 
                        value={recruiter.id} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>First Name</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.first_name}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='First Name'
                        name="first_name" 
                        value={recruiter.first_name} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>Last Name</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.last_name}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='Last Name'
                        name="last_name" 
                        value={recruiter.last_name} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>Company Name</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.company_name}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='Company Name'
                        name="company_name" 
                        value={recruiter.company_name} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>Address</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.address1}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='Address'
                        name="address1" 
                        value={recruiter.address1}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                {/* <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Address2</label>
                    <input 
                        type="text" 
                        name="address2" 
                        value={recruiter.address2}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div> */}
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>city</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.city}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='City'
                        name="city" 
                        value={recruiter.city} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>State</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.state}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='State'
                        name="state" 
                        value={recruiter.state} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>Zip</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.zip}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='Zip'
                        name="zip" 
                        value={recruiter.zip} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>Mobile</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.mobile}</label>}
                    </div>
                    <input 
                        type="text" 
                        placeholder='Mobile'
                        name="mobile" 
                        value={recruiter.mobile} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                        <label className='inline-block mr-4'>Email</label>
                        {validationErrors && <label className="block text-red-600">{validationErrors.email}</label>}
                    </div>
                    <input 
                        type="email" 
                        placeholder='Email'
                        name="email" 
                        value={recruiter.email} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button onClick={updateRecruiter} className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">Update</button>
                    <button
                        onClick={() => {
                            navigate("/recruiterList")
                            setValidationErrors({});
                        }} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Cancle</button>
                </div>
            </div>
        </div>
  )
}

export default EditRecruiter