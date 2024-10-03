import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import LoginPage from './components/LoginPage';
import Home from './components/home';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Display loading while checking authentication
  }

  return (
    <Router>
      <div>
        {!isAuthenticated ? (
          <LoginPage /> // If not authenticated, show login page
        ) : (
          <>
           <div className="fullscreen">
           <Home /> {/* Show the home content */}
    </div> 
          
            
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
