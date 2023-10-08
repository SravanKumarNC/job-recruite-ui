import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {

    

    return(
        <div className="bg-gray-400 w-full flex items-center justify-between">
            <div className="h-16  flex items-center ">
                <p className='text-black hover:text-gray-700 font-bold px-2'><Link to={"/"}>JOB RECRUITMENT</Link></p>
            </div>
            <div >
                <ul className="flex items-center justify-between">
                    <li className="px-8 py-8 font-semibold hover:text-gray-700"><Link to={"/"} >Recruiter</Link></li>
                    <li className="px-8 py-8 font-semibold hover:text-gray-700"><Link to={"/shortlistedProfile"}>Shortlisted Profiles</Link></li>
                    <li className="px-8 py-8 font-semibold hover:text-gray-700"><Link to={"/interviewSchedule"}>Interview Schedule</Link></li>
                    <li className="px-8 py-8 font-semibold hover:text-gray-700"><Link to={"/Profile"}>Profie</Link></li>
                    <li className="px-8 py-8 font-semibold hover:text-gray-700"><Link to={"/profiledetails"}>Profie Details</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;