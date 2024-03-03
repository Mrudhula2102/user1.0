

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Myprofile from "./components/Myprofile";

import Employeedetails from "./components/Employeedetails";

import Training from "./components/Training";
import LoginCard from "./Login/LoginCard";
import Navbar from "./Login/Navbar";
import Login from "./Login/Login";
import Viewtraining from "./components/Viewtraining";

import Employeeview from "./components/Employeeview";

import Leavemanagement from "./Employeeside/Leave/Leavemanagement";
import Grievances from "./Employeeside/Grievance/Grievances";
import Rulesr from "./Employeeside/Rules/Rulesr";
import Homee from "./Employeeside/Homee";
import Logine from "./Employeeside/Logine";
import Grievancesview from "./components/Grievancesview";
import Profile from "./Employeeside/Profile/Profile";


function App() {
  return (
    <div>
      <BrowserRouter>
      
       <Routes>
       <Route path='/'element={<Navbar/>}></Route>
       <Route path='/login' element={<LoginCard/>} />
       <Route path='/adlogin'element={<Login method="get"/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/Myprofile' element={<Myprofile/>}></Route>
      
       <Route path='/Employeedetails' element={<Employeedetails/>}></Route>
       
       <Route path='/Training' element={<Training/>}></Route>
       <Route path="/TrainingView" element={<Viewtraining/>}></Route>
       
       <Route path="/Employeeview" element={<Employeeview/>}></Route>
       <Route path="/grievanceview" element={<Grievancesview/>}></Route>
       <Route path="/leave" element={<Leavemanagement/>} ></Route>
       <Route path="/Grievance" element={<Grievances/>} ></Route>
       <Route path="/rules" element={<Rulesr/>} ></Route>
       <Route path='/homee' element={<Homee/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path="/userlogin" element={<Logine/>}></Route>
    
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;