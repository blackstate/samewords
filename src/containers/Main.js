import React from 'react';
import { Container } from '../components/SharedComponents';
import { Header, Word } from '../components/MainComponents';
import Searchbox from '../components/Searchbox';
import SynonymGroups from '../components/SynonymGroups';

const Main = (props) => {
  const data = [
    {
      type: 'Adjective',
      def: 'all the doors looked alike',
      synonyms: [
        'similar',
        'the same',
        'indistinguishable',
        'identical',
        'uniform',
      ],
    },
    {
      type: 'Adverb',
      def: 'great minds think alike',
      synonyms: [
        'similarly',
        'the same',
        'in the same fashion',
        'identically',
        'uniformly',
      ],
    },
  ];

  return (
    <>
      <Searchbox />
      <Container>
        <Header>Synonyms for alike</Header>
        <Word>alike</Word>
        <SynonymGroups word='alike' data={data} />
      </Container>
    </>
  );
};

export default Main;
