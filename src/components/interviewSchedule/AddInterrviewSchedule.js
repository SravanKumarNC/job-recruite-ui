import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InterviewScheduleService from '../../services/InterviewScheduleService';

function AddInterrviewSchedule() {

  const [interviewSchedule, setInterviewSchedule] = useState({
    id:"",
    shortlist_id:"",
    schedule_datetime:"",
    interview_level:"",
    status:"",
    interviewer_details:""
  })

  const[validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {value, name} = e.target;
    setInterviewSchedule((pevInterviewSchedule)=>({...pevInterviewSchedule,[name]:value}));
    setValidationErrors((prevErrors) => ({...prevErrors, [name]:""}));
  }

  const submitInterviewSchedule = (e) => {
    e.preventDefault();
    InterviewScheduleService.submitInterviewSchedule(interviewSchedule)
    .then((response) => {
      navigate("/interviewschedule");
    }).catch((error) => {
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

  const reset = (e) => {
    e.preventDefault();
    setInterviewSchedule({
      id:"",
      shortlist_id:"",
      schedule_datetime:"",
      interview_level:"",
      status:"",
      interviewer_details:""
    })
  }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
            <form className="px-5 py-5" >
                <div className="font-bold text-2xl tracking-wider ">
                    <h1 className="">Add Recruiter</h1>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                      <label className="inline-block mr-4">Id</label>
                      {validationErrors && <label className="block text-red-600">{validationErrors.id}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="id" 
                        value={interviewSchedule.id} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                      <label className="inline-block mr-4">Shortlist Id</label>
                      {validationErrors && <label className="block text-red-600">{validationErrors.shortlist_id}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="shortlist_id" 
                        value={interviewSchedule.shortlist_id} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                      <label className="inline-block mr-4">Schedule Datetime</label>
                      {validationErrors && <label className="block text-red-600">{validationErrors.schedule_datetime}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="schedule_datetime" 
                        value={interviewSchedule.schedule_datetime} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                      <label className="inline-block mr-4">Interview Level</label>
                      {validationErrors && <label className="block text-red-600">{validationErrors.interview_level}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="interview_level" 
                        value={interviewSchedule.interview_level} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                      <label className="inline-block mr-4">Status</label>
                      {validationErrors && <label className="block text-red-600">{validationErrors.status}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="status" 
                        value={interviewSchedule.status}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <div className='flex'>
                      <label className="inline-block mr-4">Interviewer Details</label>
                      {validationErrors && <label className="block text-red-600">{validationErrors.interviewer_details}</label>}
                    </div>
                    <input 
                        type="text" 
                        name="interviewer_details" 
                        value={interviewSchedule.interviewer_details}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                
                <div className="items-center justify-center h-12 w-full  my-4 space-x-4 pt-2">
                    <button onClick={submitInterviewSchedule} className="rounded text-white font-semibold bg-green-500 hover:bg-green-400 px-6 py-3">Submit</button>
                    <button
                        onClick={reset} 
                        className="rounded text-white font-semibold bg-red-500 hover:bg-red-400 px-8 py-3">Clear</button>
                </div>
            </form>
        </div>
  )
}

export default AddInterrviewSchedule