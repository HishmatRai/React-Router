import React from 'react';
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div >
      <h1>Home</h1>
      <Link to="/contact"> Go to Contact</Link>
    </div>
  );
}

export default Home;
