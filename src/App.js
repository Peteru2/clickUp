
import './App.css';
import { Route, Routes } from 'react-router-dom';


// import Login from './Login'
// import SignUp from './SignUp';
// import SSO from './Sso';
import Load from './LoadLogin';
import Board from './Board';
function App() {
  return (
   <>
    <Routes>
     {/* <Route path ="/" element = {<Login />} />
       <Route path ="/SignUp" element = {<SignUp />} />
      <Route path ="/SignUp/Sso" element = {<SSO />} /> */}


      <Route path ="/" element = {<Load />} />
      <Route path ="/Board" element = {<Board />} />

      
      


      </Routes > 
    
   </>
  );
}

export default App;
