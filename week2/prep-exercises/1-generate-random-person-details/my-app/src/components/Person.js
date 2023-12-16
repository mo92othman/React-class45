import React from 'react';

const Person = ({ firstName, lastName, email }) => {
  if (!firstName || !lastName || !email) {
    return null; // Handle the case when data is not available
  }

  return (
    <ul>
      <li>First name: {firstName}</li>
      <li>Last name: {lastName}</li>
      <li>Email: {email}</li>
    </ul>
  );
};

export default Person;
