import React from 'react'
import { useNavigate } from 'react-router-dom';

function InterviewScheduleData({interviewSchedule, deleteInterviewSchedule}) {

    const navigate = useNavigate();

    const editInterviewSchedule = (e, id)=>{
        e.preventDefault();
        navigate(`/editinterviewschedule/${id}`);
    }

  return (
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
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-600'>{interviewSchedule.interviewer_details}</div>
        </td>
        
        <td className='text-center px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <a 
                href="/" 
                onClick={(e,id) => editInterviewSchedule(e,interviewSchedule.id)}
                className='text-blue-800 hover:text-blue-500 px-4'>
                Edit
            </a>
            <a 
                href="/"
                onClick={(e, id) => deleteInterviewSchedule(e, interviewSchedule.id)}
                className='text-red-600 hover:text-red-400 px-4'>
                Delete
            </a>
        </td>
    </tr>
  )
}

export default InterviewScheduleData