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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setInterviewSchedule({...interviewSchedule,[e.target.name]:value});
  }

  const submitInterviewSchedule = (e) => {
    e.preventDefault();
    InterviewScheduleService.submitInterviewSchedule(interviewSchedule)
    .then((response) => {
      navigate("/interviewschedule");
    }).catch((error) => {
      console.log(error);
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
                    <label className="block">Id</label>
                    <input 
                        type="text" 
                        name="id" 
                        value={interviewSchedule.id} 
                        onChange={(e) => handleChange(e)}
                        
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Shortlisted ID</label>
                    <input 
                        type="text" 
                        name="shortlist_id" 
                        value={interviewSchedule.shortlist_id} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Schedule Datetime</label>
                    <input 
                        type="text" 
                        name="schedule_datetime" 
                        value={interviewSchedule.schedule_datetime} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Interview Level</label>
                    <input 
                        type="text" 
                        name="interview_level" 
                        value={interviewSchedule.interview_level} 
                        onChange={(e) => handleChange(e)}
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Status</label>
                    <input 
                        type="text" 
                        name="status" 
                        value={interviewSchedule.status}
                        onChange={(e) => handleChange(e)} 
                        className="h-8 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-12 w-full my-4">
                    <label className="block">Interviewer Details</label>
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