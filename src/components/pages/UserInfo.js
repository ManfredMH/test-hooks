import React from 'react';
import { getuserInformation } from '../../context/actions/SessionStore';

export default () => {
  const {name, lastName, company} = getuserInformation();
  return (
    <div>
      <h1>User info</h1>
      <h2> User name: {name}</h2>
      <h2> User last name: {lastName}</h2>
      <h2> User company: {company}</h2>
    </div>
  );
}
