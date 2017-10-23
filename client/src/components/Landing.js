import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return(
    <div style={{textAlign: 'center'}}>
      <h1>Emaily!</h1>
      Collect feedback from your users
      <br/>
      <Link to="/surveys" style={{marginTop: 20}} className="waves-effect waves-light btn">
        Let's get started
      </Link>
    </div>
  );
}

export default Landing;
