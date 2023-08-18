import React, { useState, useEffect } from 'react';
import LoadingComponent from './LoadingContent'; 
import List from './List';

const Load = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading delay for 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  
    return (
      <div className="App">
        {loading ? <LoadingComponent /> : <List />}
      </div>
    );
  }
  
  export default Load;
  
  