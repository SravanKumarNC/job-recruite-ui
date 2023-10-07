import axios from "axios";

const RECRUITER_BASE_URL = "http://localhost:8081/api/v1/recruiters"

class RecruiterService {

    submitRecruiter(recruiter){
        return axios.post(RECRUITER_BASE_URL, recruiter);
    }

    getRecruiters(){
        return axios.get(RECRUITER_BASE_URL);
    }

    deleteRecruiter(id){
        return axios.delete(RECRUITER_BASE_URL + "/" + id);
    }

    getRecruiterById(id){
        return axios.get(RECRUITER_BASE_URL + "/" + id);
    }

    updateRecruiter(recruiter, id){
        return axios.put(RECRUITER_BASE_URL + "/" + id, recruiter);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RecruiterService();