import React from 'react';
import { signIn } from '../../context/actions/SessionStore';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <input placeholder='Email' />
      <input placeholder='Password' />
      <Button tag={Link} to="/user-info" > Go to </Button>
      <button onClick={signIn}> Sign In </button>
    </div>
  );
};