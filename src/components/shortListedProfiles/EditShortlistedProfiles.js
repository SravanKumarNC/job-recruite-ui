import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditShortlistedProfiles() {
    const navigate = useNavigate();
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
            <div className="px-5 py-5">
                <div className="font-bold text-2xl tracking-wider ">
                    <h1 className="">Edit Shortlisted Profiles</h1>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Id</label>
                    <input 
                        type="text" 
                        name="id" 
                        // value={recruiter.id} 
                        // onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Recruiter id </label>
                    <input 
                        type="text" 
                        name="first_name" 
                        // value={recruiter.first_name} 
                        // onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Profile Id</label>
                    <input 
                        type="text" 
                        name="last_name" 
                        // value={recruiter.last_name} 
                        // onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Company Name</label>
                    <input 
                        type="text" 
                        name="company_name" 
                        // value={recruiter.company_name} 
                        // onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Status</label>
                    <input 
                        type="text" 
                        name="address1" 
                        // value={recruiter.address1}
                        // onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Last Interviewed On</label>
                    <input 
                        type="text" 
                        name="address1" 
                        // value={recruiter.address1}
                        // onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button 
                        // onClick={updateRecruiter} 
                        className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">
                        Update
                    </button>
                    <button
                        onClick={() => navigate("/shortlistedProfile")} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Cancle</button>
                </div>
            </div>
        </div>
  )
}

export default EditShortlistedProfiles