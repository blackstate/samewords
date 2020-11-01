import React, { useState } from 'react';

import {
  Greeting,
  HelpText,
  Special,
  CurrentWord,
} from '../components/HomeComponents';
import { Container } from '../components/SharedComponents';
import SynonymList from '../components/SynonymList';

const Home = () => {
  const ogWord = 'identical';
  const [word, setWord] = useState('identical');

  let words = ['coequal', 'duplicate', 'equal', 'even', 'indistinguishable'];

  const changeWord = (word) => {
    setWord(word);
  };

  const resetWord = () => {
    setWord(ogWord);
  };

  return (
    <Container>
      <Greeting>
        Find <CurrentWord>{word}</CurrentWord> words with Same Words!
      </Greeting>
      <SynonymList words={words} change={changeWord} reset={resetWord} />
      <HelpText>
        <Special>Click </Special>on words to view it's synonyms.
      </HelpText>
      <HelpText>Data from Merriam-Webster's Collegiate Thesaurus.</HelpText>
    </Container>
  );
};

export default Home;
