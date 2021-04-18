import React from 'react';
import ProfileIcon from '../profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal}) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange('signin')}>
          Sign In
        </p>
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange('register')}>
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
