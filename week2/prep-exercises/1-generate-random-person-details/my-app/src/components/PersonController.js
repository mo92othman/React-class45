import React, { useState } from 'react';
import Person from './Person';
import FetchButton from './FetchButton';

const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPerson = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewPerson = () => {
    setLoading(true);
    getPerson();
  };

  // Extract necessary details before passing to Person component
  const formattedPerson = {
    firstName: person?.name.first || '',
    lastName: person?.name.last || '',
    email: person?.email || '',
  };

  return (
    <>
      {person ? (
        <>
          <FetchButton onClick={fetchNewPerson} />
          <Person {...formattedPerson} />
        </>
      ) : (
        <>
          <FetchButton onClick={fetchNewPerson} />
          <p>Click the button to get data</p>
        </>
      )}
    </>
  );
};

export default PersonController;
