import React from 'react';
import { Input, Button, Icon, Search } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <div className="logo">
          <h2>AS Forums</h2>
        </div>
      </div>
      <div className="navbar-links">
        <Search size="small" placeholder="Search..." />
        <Button circular icon="user" size="small" id="profile-btn">
          <Icon color="white" name="user" />
          Profile
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
