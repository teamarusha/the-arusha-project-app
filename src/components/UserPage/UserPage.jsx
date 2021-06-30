import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import TimestampButton from '../TimestampButton/TimestampButton';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <React.Fragment>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      <TimestampButton />

      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
    </React.Fragment>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
