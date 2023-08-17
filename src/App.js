
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import List from './List';
import Login from './Login'
import SignUp from './SignUp';
function App() {
  return (
   <>
    <Routes>
      <Route path ="/Login" element = {<Login />} />
      <Route path ="/SignUp" element = {<SignUp />} />

      {/* <Route path ="/" element = {<List />} /> */}
      {/* <Route path ="/About" element = {<About />} /> */}
      


      </Routes > 
    
   </>
  );
}

export default App;
