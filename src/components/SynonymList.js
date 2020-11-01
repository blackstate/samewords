import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Synonym } from './SharedComponents';

const List = styled.ul`
  margin-bottom: 2.5em;
`;

const SynonymList = (props) => {
  const synonyms = props.words.map((word, i) => {
    const clickHandler = () => {
      props.history.push('/' + word);
    };

    return (
      <Synonym key={word + i} onClick={clickHandler}>
        {word}
      </Synonym>
    );
  });
  return <List>{synonyms}</List>;
};

export default withRouter(SynonymList);
