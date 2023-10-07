import axios from "axios";

const SHORTLISTED_PROFILES_BASE_URL = "http://localhost:8081/api/v1/shortlistedProfiles";

class ShortlistedProfilesService{
    submitShortlistedProfiles(shortlistedProfile){
        return axios.post(SHORTLISTED_PROFILES_BASE_URL, shortlistedProfile);
    }

    getShortlistedProfiles(){
        return axios.get(SHORTLISTED_PROFILES_BASE_URL);
    }

    deleteShortlistedProfiles(id){
        return axios.delete(SHORTLISTED_PROFILES_BASE_URL + "/" + id);
    }

    getShortlistedProfileById(id){
        return axios.get(SHORTLISTED_PROFILES_BASE_URL + "/" + id);
    }

    updateShortlistedProfiles(shortlistedProfile, id){
        return axios.put(SHORTLISTED_PROFILES_BASE_URL + "/" + id, shortlistedProfile);
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new ShortlistedProfilesService();