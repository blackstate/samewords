import React, { useState } from 'react';

import styled from 'styled-components';
import SynonymList from './SynonymList';

const DefinitionGroup = styled.div`
  display: flex;
  font-family: 'Noto Serif', sans-serif;
  margin-bottom: 1.4em;
`;

const Type = styled.h3`
  color: ${(props) => props.theme.specialColor};
`;

const Definition = styled.p`
  font-style: italic;
  margin-left: 0.5em;
`;

const Divider = styled.hr`
  margin-top: 2em;
  margin-bottom: 1.5em;
`;

const SynonymGroup = (props) => {
  let { def, type, synonyms } = props.group;
  let ogWord = props.word;

  const [definition, setDefinition] = useState(def);
  const [current, setCurrent] = useState(ogWord);

  const changeWord = (word) => {
    console.log('hi');
    setDefinition(definition.replace(current, word));
    setCurrent(word);
  };

  const resetWord = () => {
    setDefinition(definition.replace(current, ogWord));
    setCurrent(ogWord);
  };

  return (
    <>
      <Divider />
      <DefinitionGroup>
        <Type>{type}</Type>
        <Definition>{`'${definition}'`}</Definition>
      </DefinitionGroup>
      <SynonymList change={changeWord} reset={resetWord} words={synonyms} />
    </>
  );
};

const SynonymGroups = (props) => {
  const { data } = props;
  console.log(props);

  return (
    <div>
      {data.map((group, i) => {
        return <SynonymGroup key={i} group={group} word={props.word} />;
      })}
    </div>
  );
};

export default SynonymGroups;
