
import './App.css';
import { Route, Routes } from 'react-router-dom';


import Login from './Login'
import SignUp from './SignUp';
import SSO from './Sso';
import Load from './LoadLogin';
import Board from './Board';

import CalendarPage from './Calendar';
// import TandC from './TandC';
function App() {
  return (
   <>
    <Routes>
     <Route path ="/" element = {<Login />} />
       <Route path ="/SignUp" element = {<SignUp />} />
      <Route path ="/SignUp/Sso" element = {<SSO />} />
      <Route path ="/List" element = {<Load />} />
      <Route path ="/Board" element = {<Board />} />
      <Route path ="/Calendar" element = {<CalendarPage />} />
      
      
      {/* <Route path ="/" element = {<TandC />} /> */}

      </Routes > 
    
   </>
  );
}

export default App;
