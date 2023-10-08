import axios from "axios";

const INTERVIEW_SCHEDULE_BASE_URL = "http://localhost:8081/api/v1/interviewSchedule"

class InterviewScheduleService {
    
    submitInterviewSchedule(interviewSchedule){
        return axios.post(INTERVIEW_SCHEDULE_BASE_URL, interviewSchedule);
    }

    getInterviewSchedules(){
        return axios.get(INTERVIEW_SCHEDULE_BASE_URL);
    }

    deleteInterviewSchedule(id){
        return axios.delete(INTERVIEW_SCHEDULE_BASE_URL + "/" + id);
    }
    
    updateInterviewSchedule(interviewSchedule, id){
        return axios.put(INTERVIEW_SCHEDULE_BASE_URL + "/" + id, interviewSchedule);
    }

    getInterviewSchedulesById(id){
        return axios.get(INTERVIEW_SCHEDULE_BASE_URL + "/" + id);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new InterviewScheduleService()
