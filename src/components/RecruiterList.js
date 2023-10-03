import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RecruiterService from '../services/RecruiterService';
import RecruiterData from './RecruiterData';

const RecruiterList = () => {

    const navigate = useNavigate();

    const [recruiters, setRecruiters] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try{
                const response = await RecruiterService.getRecruiters();
                setRecruiters(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    const deleteRecruiter = (e, id) => {
        e.preventDefault();
        RecruiterService.deleteRecruiter(id).then((res) => {
            if(recruiters){
                setRecruiters((prevRecruiters) => {
                    return prevRecruiters.filter((recruiter) => recruiter.id !== id);
                })
            }
        })
    }
    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    console.log(search);

  return (
    <div className='container mx-2 my-2 '>
        <div className='h-12 flex justify-between'>
            <button
                onClick={() => navigate("/addRecruiter")} 
                className='rounded bg-slate-300 hover:bg-slate-200 text-black py-3 px-4 font-semibold'>
                Add Recruiter
            </button>
            <div>
                <input type='text' placeholder='Search By Id' onChange={handleChange} className='py-2 px-4 w-90 rounded border-2 mr-4'></input>
                <button 
                    onClick={() => navigate(`/filter/${search}`)} 
                    className='rounded bg-green-400 hover:bg-green-300 py-2 px-3 mr-4'>
                    Search
                </button>
            </div>
        </div>
        <div className='flex shadow border-b mt-2 mr-4'>
            <table className='min-w-full'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Company Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Address</th>
                        {/* <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Address2</th> */}
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>City</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>State</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Zip</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Mobile</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Email</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Edit/Delete</th>
                    </tr>
                </thead>


                    {!loading && (
                        <tbody className='bg-white'>
                            {recruiters.map((recruiter) => (
                                <RecruiterData recruiter = {recruiter} deleteRecruiter = {deleteRecruiter} key={recruiter.id}/>
                            ))}
                        </tbody>
                    )}
            </table>
        </div>
    </div>
  )
}

export default RecruiterList