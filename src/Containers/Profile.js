import React from 'react';
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <div >
      <h1>Profile</h1>
      <Link to="/about"> Go to About</Link>

    </div>
  );
}

export default Profile;
