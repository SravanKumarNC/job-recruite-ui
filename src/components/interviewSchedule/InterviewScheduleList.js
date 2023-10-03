import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InterviewScheduleData from './InterviewScheduleData';

function InterviewScheduleList() {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
    <div className='container mx-2 my-2'>
        
        <div className='flex justify-between'>
            <button 
                onClick={() => navigate("/addinterviewSchedule")}
                className='rounded bg-slate-300 hover:bg-slate-300 text-black px-4 py-3 font-semibold'>
                Add interviewSchedule
            </button>
            <div>
                <input type='text' placeholder='Search By Id' className='rounded px-4 py-2 w-90 mr-4 border-2' onChange={handleChange}></input>
                <button 
                    onClick={() => navigate(`/filterinterview/${search}`)}
                    className='rounded bg-green-300 hover:bg-green-300 text-black px-4 py-2 font-semibold mr-4'>
                    search
                </button>
            </div>
        </div>

        <div className='flex shadow border-b mt-2 mr-4'>
            <table className='min-w-full'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Shortlist Id</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Schedule DateTime</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Interview Level</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Status</th>
                        <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Interview Details</th>
                        <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <InterviewScheduleData/>
                </tbody>
            </table>

        </div>
        
    </div>
  )
}

export default InterviewScheduleList