import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import InterviewScheduleService from '../../services/InterviewScheduleService';

function FilterInterviewById() {

  const navigate = useNavigate();
  const{search} = useParams();

  const [interviewSchedule, setInterviewSchedule] = useState({
    id: search,
    shortlist_id:"",
    schedule_datetime:"",
    interview_level:"",
    status:"",
    interviewer_details:""
  })

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await InterviewScheduleService.getInterviewSchedulesById(interviewSchedule.id);
        setInterviewSchedule(response.data);
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  },[interviewSchedule.id])

  const handleChange =() => {
    navigate("/interviewschedule");
  }

  return (
    <div>
      <div className='flex shadow border-b mt-2 mr-4'>
        <table className='min-w-full'>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Shortlist Id</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Schedule DateTime</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>Interview Level</th>
                    <th className='text-left font-medium text-gray-600 uppercase py-3 px-6'>status</th>
                    <th className='text-center font-medium text-gray-600 uppercase py-3 px-6'>Interviewer Details</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{interviewSchedule.id}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{interviewSchedule.shortlist_id}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{interviewSchedule.schedule_datetime}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{interviewSchedule.interview_level}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{interviewSchedule.status}</div>
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-600'>{interviewSchedule.interviewer_details}</div>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
      <div className='rounded bg-green-300 hover:bg-green-200 flex justify-center'>
        <button className='w-10' onClick={handleChange}>Back</button>
      </div>  
    </div>
  )
}

export default FilterInterviewById