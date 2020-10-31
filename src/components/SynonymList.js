import React from 'react';
import styled from 'styled-components';
import { Synonym } from './WordComponents';

const List = styled.ul`
  margin-bottom: 2.5em;
`;

const SynonymList = (props) => {
  const synonyms = props.words.map((word) => (
    <Synonym
      key={word}
      onMouseEnter={() => props.change(word)}
      onMouseLeave={props.reset}
    >
      {word}
    </Synonym>
  ));
  return <List>{synonyms}</List>;
};

export default SynonymList;
