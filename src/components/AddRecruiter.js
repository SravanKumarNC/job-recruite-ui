import React, { useState } from "react";
import RecruiterService from "../services/RecruiterService";
import { useNavigate } from "react-router-dom";


const AddRecruiter = () => {

    

    const [recruiter, setRecruiter] = useState({
        id: "",
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
    });

    const[validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setRecruiter((prevRecruiter) => ({...prevRecruiter, [name]: value}));
        setValidationErrors((prevErrors)=>({...prevErrors, [name]:""}));
    }

    const submitRecruiter = (e)=>{
        e.preventDefault();
        RecruiterService.submitRecruiter(recruiter)
        .then((response) => {
            navigate("/recruiterList")
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
    const reset = (e)=>{
        e.preventDefault();
        setRecruiter({
            id: "",
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
        });
        setValidationErrors({});
    };

    return (
        <div className="flex max-w-2xl shadow border-b mx-auto">
            <form className="px-5 py-5" >
                <div className="font-bold text-2xl tracking-wider ">
                    <h1 className="">Add Recruiter</h1>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.id}</label>}
                    <input 
                        placeholder="Id"
                        type="text" 
                        id="id"
                        name="id" 
                        value={recruiter.id} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.id}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.first_name}</label>}
                    <input 
                        type="text"
                        placeholder="First Name" 
                        id="first_name"
                        name="first_name" 
                        value={recruiter.first_name} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.first_name}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.last_name}</label>}
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        id="last_name" 
                        name="last_name" 
                        value={recruiter.last_name} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.last_name}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.company_name}</label>}
                    <input 
                        type="text" 
                        placeholder="Company Name"
                        id ="company_name"
                        name="company_name" 
                        value={recruiter.company_name} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.company_name}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.address1}</label>}
                    <input 
                        type="text"
                        placeholder="Address" 
                        id="address1"
                        name="address1" 
                        value={recruiter.address1}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.address1}</div> */}
                </div>
                {/* <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block">{validationErrors.first_name}</label>}
                    <input 
                        type="text" 
                        id="address2" 
                        name="address2" 
                        value={recruiter.address2}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    <div className="error-message">{validationErrors.address2}</div>
                </div> */}
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.city}</label>}
                    <input 
                        type="text" 
                        placeholder="City"
                        id="city"
                        name="city" 
                        value={recruiter.city} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.city}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.state}</label>}
                    <input 
                        type="text"
                        placeholder="State" 
                        id="state"
                        name="state" 
                        value={recruiter.state} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.state}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.zip}</label>}
                    <input 
                        type="text" 
                        placeholder="Zip"
                        id ="zip" 
                        name="zip" 
                        value={recruiter.zip} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.zip}</div> */}
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    {validationErrors && <label className="block  text-red-600">{validationErrors.mobile}</label>}
                    <input 
                        type="text"
                        placeholder="Mobile" 
                        id="mobile" 
                        name="mobile" 
                        value={recruiter.mobile} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                    {/* <div className="error-message">{validationErrors.mobile}</div> */}
                </div>
                <div className="items-center justify-between h-12 w-full my-4">
                    {validationErrors && <label className="block text-red-600">{validationErrors.email}</label>}
                    <input 
                        type="email"
                        placeholder="Email" 
                        id="email"
                        name="email" 
                        value={recruiter.email} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button onClick={submitRecruiter} className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">Submit</button>
                    <button
                        onClick={reset} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Clear</button>
                </div>
            </form>
        </div>
    )
}
export default AddRecruiter;