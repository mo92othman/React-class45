// PersonController.js

import React, { useEffect, useState } from 'react';
import Person from './Person';

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Extract necessary details before passing to Person component
  const formattedPerson = {
    firstName: person?.name.first || '',
    lastName: person?.name.last || '',
    email: person?.email || '',
  };

  return <Person {...formattedPerson} />;
};

export default PersonController;
