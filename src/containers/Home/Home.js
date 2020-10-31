import React, { useEffect } from 'react';

import { fetchSynonyms } from '../../fetchData';
const Home = (props) => {
  useEffect(() => {
    const getSynonyms = async (word) => {
      const data = await fetchSynonyms(word);
      console.log(data);
    };

    getSynonyms('alike');
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
