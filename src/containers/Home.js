import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import {
  Greeting,
  HelpText,
  Special,
  Footer,
  FooterIcons,
  GithubIcon,
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

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Same Words</title>
      </Helmet>
      <Container>
        <Greeting>
          Find <Special>{word}</Special> words with Same Words!
        </Greeting>
        <SynonymList words={words} change={changeWord} reset={resetWord} />
        <Footer>
          <div>
            <HelpText>
              <Special>Click </Special>on words to view it's synonyms.
            </HelpText>
            <HelpText>
              Data from Merriam-Webster's Collegiate Thesaurus.
            </HelpText>
          </div>
          <FooterIcons>
            <GithubIcon
              onClick={() => openLink('https://github.com/nejomi/samewords')}
            />
          </FooterIcons>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
