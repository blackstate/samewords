import React, { useEffect } from 'react';

import { fetchSynonyms } from '../fetchData';
import { Greeting } from '../components/HomeComponents';
import { Synonym } from '../components/WordComponents';
import Searchbox from '../components/Searchbox';

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
      <Searchbox />
      <Greeting>Find identical words with Same Words!</Greeting>
      <Synonym>Hi</Synonym>
    </div>
  );
};

export default Home;
