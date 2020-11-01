import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vh;
  padding: 0 15px;

  @media (min-width: 769px) {
    flex-direction: row;
    margin-bottom: 5vh;
  }
`;

const Logo = styled.div`
  font-family: 'Noto Serif', serif;
  color: ${(props) => props.theme.headerColor};
  font-size: 1.4em;
  margin: 0 0 0.8em 0;
  cursor: pointer;

  @media (min-width: 769px) {
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
  cursor: pointer;
  color: ${(props) => props.theme.bodyColor};
`;

const Searchbox = (props) => {
  const [word, setWord] = useState('');

  const checkEnterKey = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
      e.target.blur();
    }
  };

  const searchHandler = () => {
    if (word !== '') {
      setWord('');
      props.history.push('/' + word);
    }
  };

  const wordHandler = useCallback((event) => {
    setWord(event.target.value);
  }, []);

  const logoClickHandler = () => {
    props.history.push('/');
  };

  return (
    <Container>
      <Logo onClick={logoClickHandler}>Same Words</Logo>
      <SearchContainer>
        <InputField
          placeholder='Search word...'
          value={word}
          onChange={wordHandler}
          onKeyDown={checkEnterKey}
        />
        <SearchIcon onClick={searchHandler} />
      </SearchContainer>
    </Container>
  );
};

export default withRouter(Searchbox);
