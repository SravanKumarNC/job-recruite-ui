import axios from "axios";

const PROFILE_DETAILS_BASE_URL = "http://localhost:8081/api/v1/profileDetails";

class ProfileDetailsService {

    submitProfileDetails(profile){
        return axios.post(PROFILE_DETAILS_BASE_URL, profile);
    }

    getProfileDetails(){
        return axios.get(PROFILE_DETAILS_BASE_URL);
    }

    deleteProfileDetails(id){
        return axios.delete(PROFILE_DETAILS_BASE_URL + "/" + id);
    }

    updateProfileDetails(profileDetails, id){
        return axios.put(PROFILE_DETAILS_BASE_URL + "/" + id, profileDetails);
    }

    getProfileDetailsById(id){
        return axios.get(PROFILE_DETAILS_BASE_URL + "/" + id);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfileDetailsService()