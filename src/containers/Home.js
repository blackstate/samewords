import React, { useEffect, useState } from 'react';

import { fetchSynonyms } from '../fetchData';
import {
  Greeting,
  Container,
  HelpText,
  Special,
  CurrentWord,
} from '../components/HomeComponents';
import SynonymList from '../components/SynonymList';
import Searchbox from '../components/Searchbox';

const Home = () => {
  const ogWord = 'identical';
  const [word, setWord] = useState('identical');

  //useEffect(() => {
  //const getSynonyms = async (word) => {
  //const data = await fetchSynonyms(word);
  //console.log(data);
  //};

  //getSynonyms('alike');
  //}, []);

  let words = [
    'coequal',
    'duplicate',
    'equal',
    'even',
    'indistinguishible',
    'same',
  ];

  const changeWord = (word) => {
    setWord(word);
  };

  const resetWord = () => {
    setWord(ogWord);
  };

  return (
    <div>
      <Searchbox />
      <Container>
        <Greeting>
          Find <CurrentWord>{word}</CurrentWord> words with Same Words!
        </Greeting>
        <SynonymList words={words} change={changeWord} reset={resetWord} />
        <HelpText>
          <Special>Hover </Special>on words to change preview.
        </HelpText>
        <HelpText>
          <Special>Click </Special>on words to view it's synonyms.
        </HelpText>
        <HelpText>Data from Merriam-Webster's Collegiate Thesaurus.</HelpText>
      </Container>
    </div>
  );
};

export default Home;
