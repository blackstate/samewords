import React, { useState } from 'react';

import styled from 'styled-components';
import SynonymList from './SynonymList';

const DefinitionGroup = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Serif', sans-serif;
  margin-bottom: 1.4em;
`;

const Type = styled.h3`
  color: ${(props) => props.theme.specialColor};
  margin-right: 1em;

  @media (min-width: 481px) {
    margin-right: 0.5em;
  }
`;

const Definition = styled.p`
  margin-left: 0.5em;
  line-height: 150%;
`;

const Divider = styled.hr`
  margin-top: 2em;
  margin-bottom: 1.5em;
  border: none;
  height: 1px;
  background-color: ${(props) => props.theme.bodyColor};
`;

const SynonymGroup = (props) => {
  let { def, type, synonyms } = props.group;

  return (
    <>
      <DefinitionGroup>
        <Type>{type}</Type>
        <Definition>{`'${def}'`}</Definition>
      </DefinitionGroup>
      <SynonymList words={synonyms} />
    </>
  );
};

const SynonymGroups = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((group, i) => {
        if (Array.isArray(group)) {
          const groups = group.map((g, i) => (
            <SynonymGroup key={(g.def, i)} group={g} word={props.word} />
          ));

          return (
            <div key={i}>
              <Divider />
              {groups}
            </div>
          );
        }

        return (
          <div key={i}>
            <Divider />
            <SynonymGroup group={group} word={props.word} />
          </div>
        );
      })}
    </div>
  );
};

export default SynonymGroups;
