import React, { useEffect } from 'react';
import { Button, Icon, Dropdown, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  useEffect(() => {
    let loggedStatus = false;
    const tokenChecker = localStorage.getItem('token');
    if (tokenChecker && tokenChecker !== 'undefined') {
      loggedStatus = true;
    }
    if (loggedStatus) {
      document.getElementById('signup-btn').style.display = 'none';
      document.getElementById('profile-btn').style.display = 'block';
    }
  }, []);
  return (
    <>
      <nav>
        <div className="navbar-logo">
          <div className="logo">
            <Link to="/home">
              <h2>AS Forums</h2>
            </Link>
          </div>
        </div>

        {/* 
        hamburger
         */}
        <div className="burger" onClick={props.slide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {/*
         */}

        <ul className="nav-links">
          <li>
            <Input
              type="text"
              placeholder="Search..."
              id="searchBar"
              icon={<Icon name="search" color="blue" />}
              onChange={props.handleSearchChange}
              onKeyPress={props.submitHandler}
              value={props.search}
            />
          </li>
          <li>
            <Link to="/signup" id="link">
              <Button circular size="small" id="signup-btn">
                <Icon name="user" />
                Sign Up
              </Button>
            </Link>
            <Dropdown
              trigger={props.trigger}
              options={props.options}
              onChange={props.handleChange}
              pointing="top left"
              icon={null}
              id="profile-btn"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
