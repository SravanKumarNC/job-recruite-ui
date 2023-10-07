import axios from "axios";

const POFILE_BASE_URL = "http://localhost:8081/api/v1/profiles"

class ProfileService {

    
    submitProfile(profile){
        return axios.post(POFILE_BASE_URL, profile);
    }

    getProfiles(){
        return axios.get(POFILE_BASE_URL);
    }

    deleteProfile(id){
        return axios.delete(POFILE_BASE_URL + "/" + id);
    }

    getProfileById(id){
        return axios.get(POFILE_BASE_URL + "/" + id);
    }

    updateProfile(recruiter, id){
        return axios.put(POFILE_BASE_URL + "/" + id, recruiter);
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfileService();