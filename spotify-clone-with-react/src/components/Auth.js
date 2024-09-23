import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth = ({ type }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <div>
          <h2>Welcome, you are logged in!</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
          <button onClick={() => loginWithRedirect()}>Login / Register</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
