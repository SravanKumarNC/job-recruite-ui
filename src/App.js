import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddRecruiter from './components/AddRecruiter';
import Navbar from './components/Navbar';
import RecruiterList from './components/RecruiterList';
import FilterById from './components/FilterById';
import InterviewScheduleList from './components/interviewSchedule/InterviewScheduleList';
import AddInterrviewSchedule from './components/interviewSchedule/AddInterrviewSchedule';
import FilterInterviewById from './components/interviewSchedule/FilterInterviewById';
import ProfileList from './components/profile/ProfileList';
import FilterProfileById from './components/profile/FilterProfileById';
import AddProfile from './components/profile/AddProfile';
import ProfileDetailsList from './components/profileDetails/ProfileDetailsList';
import AddProfileDetails from './components/profileDetails/AddProfileDetails';
import FilterProfileDetailsById from './components/profileDetails/FilterProfileDetailsById';
import ShortlistedProfilesList from './components/shortListedProfiles/ShortlistedProfilesList';
import FilterShortlistedProfilesById from './components/shortListedProfiles/FilterShortlistedProfilesById';
import AddShortlistedProfiles from './components/shortListedProfiles/AddShortlistedProfiles';
import EditRecruiter from "./components/EditRecruiter";
import EditProfileDetails from './components/profileDetails/EditProfileDetails';
import EditInterviewSchedule from './components/interviewSchedule/EditInterviewSchedule';
import EditProfile from './components/profile/EditProfile';
import EditShortlistedProfiles from "./components/shortListedProfiles/EditShortlistedProfiles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<RecruiterList/>}/>
          <Route index element={<RecruiterList/>}/>
          {/* Get All */}
          <Route path="/recruiterList" element={<RecruiterList/>}/>
          <Route path="/interviewSchedule" element={<InterviewScheduleList/>}/>
          <Route path="/Profile" element={<ProfileList/>}/>
          <Route path='/profiledetails' element={<ProfileDetailsList/>}/>
          <Route path="/shortlistedProfile" element={<ShortlistedProfilesList/>}/>
          {/* Create  */}
          <Route path="/addRecruiter" element={<AddRecruiter/>}/>
          <Route path="/addinterviewSchedule" element={<AddInterrviewSchedule/>}/>
          <Route path='/addprofile' element={<AddProfile/>}/>
          <Route path='/addprofiledetails' element={<AddProfileDetails/>}/>
          <Route path='/addshortlistedprofile' element={<AddShortlistedProfiles/>}/>
          {/* Get By Id */}
          <Route path='/filter/:search' element={<FilterById/>}/>
          <Route path='/filterinterview/:search' element={<FilterInterviewById/>}/>
          <Route path='/filterprofile/:search' element={<FilterProfileById/>}/>
          <Route path='/filterprofiledetails/:search' element={<FilterProfileDetailsById/>}/>
          <Route path='/filtershortlistedprofile/:search' element={<FilterShortlistedProfilesById/>}/>
          {/* Update */}
          <Route path='/editRecruiter/:id' element={<EditRecruiter/>}/>
          <Route path='/editprofiledetails/:id' element={<EditProfileDetails/>}/>
          <Route path='/editinterviewschedule/:id' element={<EditInterviewSchedule/>}/>
          <Route path='/editprofile/:id' element={<EditProfile/>}/>
          <Route path='/editshortlistedprofiles/:id' element={<EditShortlistedProfiles/>}/>
          
         </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
