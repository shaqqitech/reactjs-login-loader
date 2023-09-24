import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import LoginForm from './components/LoginForm';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3700); // Adjust the duration as needed
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> : <LoginForm />}
    </div>
  );
}

export default App;
