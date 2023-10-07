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

    const navigate = useNavigate();

    const handleChange =(e)=>{
        const value = e.target.value;
        setRecruiter({...recruiter, [e.target.name]: value})
    }

    const submitRecruiter = (e)=>{
        e.preventDefault();
        RecruiterService.submitRecruiter(recruiter).then((response) => {
            navigate("/recruiterList")
        }).catch((error)=>{
            console.log(error);
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
        })
    }

    return (
        <div className="flex max-w-2xl shadow border-b mx-auto">
            <form className="px-5 py-5" >
                <div className="font-bold text-2xl tracking-wider ">
                    <h1 className="">Add Recruiter</h1>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Id</label>
                    <input 
                        type="text" 
                        name="id" 
                        value={recruiter.id} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">First Name</label>
                    <input 
                        type="text" 
                        name="first_name" 
                        value={recruiter.first_name} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Last Name</label>
                    <input 
                        type="text" 
                        name="last_name" 
                        value={recruiter.last_name} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Company Name</label>
                    <input 
                        type="text" 
                        name="company_name" 
                        value={recruiter.company_name} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Address1</label>
                    <input 
                        type="text" 
                        name="address1" 
                        value={recruiter.address1}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Address2</label>
                    <input 
                        type="text" 
                        name="address2" 
                        value={recruiter.address2}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">City</label>
                    <input 
                        type="text" 
                        name="city" 
                        value={recruiter.city} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">State</label>
                    <input 
                        type="text" 
                        name="state" 
                        value={recruiter.state} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Zip Code</label>
                    <input 
                        type="text" 
                        name="zip" 
                        value={recruiter.zip} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Mobile</label>
                    <input 
                        type="text" 
                        name="mobile" 
                        value={recruiter.mobile} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Email</label>
                    <input 
                        type="email" 
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