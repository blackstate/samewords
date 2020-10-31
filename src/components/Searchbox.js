import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 481px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-family: 'Noto Serif', serif;
  color: ${(props) => props.theme.headerColor};
  font-size: 1.4em;
  margin: 0 0 0.5em 0;

  @media (min-width: 481px) {
    margin: 0 1em 0 0;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  min-width: 300px;
  height: 2.5em;
  background-color: #3a3b3c;
  outline: none;
  border: none;
  border-radius: 50px;
  padding: 0 10px 0 15px;

  @media (min-width: 481px) {
    width: 18%;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  color: ${(props) => props.theme.bodyColor};
  background-color: transparent;
  font-size: inherit;
`;

const SearchIcon = styled(MdSearch)`
  width: 20%;
  height: 60%;
  color: ${(props) => props.theme.bodyColor};
`;

const Searchbox = () => {
  const [word, setWord] = useState('');

  const wordHandler = (event) => {
    setWord(event.target.value);
  };

  return (
    <Container>
      <Logo>Same Words</Logo>
      <SearchContainer>
        <InputField
          placeholder='Search word...'
          value={word}
          onChange={wordHandler}
        />
        <SearchIcon />
      </SearchContainer>
    </Container>
  );
};

export default Searchbox;
