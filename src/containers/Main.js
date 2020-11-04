import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { Container } from '../components/SharedComponents';
import {
  Header,
  Word,
  WordGroup,
  Speech,
  Notice,
} from '../components/MainComponents';
import SynonymGroups from '../components/SynonymGroups';
import SynonymList from '../components/SynonymList';
import Spinner from '../components/Spinner';

const Main = (props) => {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState();
  const [data, setData] = useState(null);
  const [partsOfSpeech, setPartsOfSpeech] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const currentWord = props.location.pathname.substr(1);
    if (currentWord === word) {
      return;
    }

    if (currentWord) {
      const getSynonyms = async () => {
        const response = await axios.post(
          '../../.netlify/functions/fetchSynonyms',
          {
            word: currentWord,
          }
        );

        const data = response.data;
        setData(data);
        setFilteredData(data);
      };

      setLoading(true);
      getSynonyms();
      setFilter('');
      setWord(currentWord);
    }
  }, [props, word]);

  useEffect(() => {
    // get data
  }, [word]);

  useEffect(() => {
    // get parts of speech
    const parts = [];
    if (data) {
      data.forEach((word) => {
        if (Array.isArray(word)) {
          parts.push(word[0].type);
        } else {
          parts.push(word.type);
        }
      });

      setPartsOfSpeech(parts);
    }
  }, [data]);

  useEffect(() => {
    // filter data
    if (data) {
      let fData = [...data];
      // reset filter
      if (filter === '') {
        setFilteredData(fData);
      } else {
        // filter data
        fData = fData.filter((g) => {
          if (Array.isArray(g)) {
            return g[0].type === filter;
          } else {
            return g.type === filter;
          }
        });
        setFilteredData(fData);
      }

      setLoading(false);
    }
  }, [filter, data]);

  const changeFilterHandler = (speech) => {
    if (filter === speech) {
      setFilter('');
    } else {
      setFilter(speech);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (data.length === 0 || (!Array.isArray(data[0]) && !data[0].type)) {
    let notFoundPage = null;
    if (data.length === 0) {
      notFoundPage = (
        <>
          <Word sm>{word}</Word>
          <Notice>Word not found or does not exist.</Notice>
        </>
      );
    } else {
      notFoundPage = (
        <>
          <Word sm>{word}</Word>
          <Notice>Word not found. Did you mean:</Notice>
          <SynonymList words={data} />
        </>
      );
    }
    return <Container>{notFoundPage}</Container>;
  }

  return (
    <>
      <Helmet>
        <title>{word} - Same Words</title>
      </Helmet>
      <Container>
        <Header>Synonyms for {word}</Header>
        <WordGroup>
          <Word>{!loading && word}</Word>
          {partsOfSpeech.map((part) => (
            <Speech
              key={part}
              onClick={() => changeFilterHandler(part)}
              current={filter}
              self={part}
            >
              {part.length > 4 ? part.slice(0, 3) + '.' : part + '.'}
            </Speech>
          ))}
        </WordGroup>
        <SynonymGroups data={filteredData} />
      </Container>
    </>
  );
};

export default Main;
