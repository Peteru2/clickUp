
import './App.css';
import { Route, Routes } from 'react-router-dom';

import List from './List';
function App() {
  return (
   <>
    <Routes>
      <Route path ="/" element = {<List />} />
      {/* <Route path ="/About" element = {<About />} /> */}
      


      </Routes > 
    
   </>
  );
}

export default App;
