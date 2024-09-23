import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css'; // Import Navbar CSS

const Navbar = () => {
  const { logout } = useAuth0();

  return (
    <nav>
      <ul>
        <li>My Application</li>
        <li style={{ marginLeft: 'auto' }}> {/* This pushes the logout button to the right */}
          <button className="logout-btn" onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
