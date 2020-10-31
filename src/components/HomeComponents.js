import styled from 'styled-components';

export const Greeting = styled.h1`
  color: ${(props) => props.theme.headerColor}};
  font-size: 1.2em;
  margin-bottom: 1.5em;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 2em;
  margin: 0 1em;
  border-radius: 10px;

  @media (min-width: 481px) {
    max-width: 760px;
    margin: 0 auto;
  }

  @media (min-width: 1025px) {
    min-width: 45vw;
    max-width: 760px;
  }
`;

export const HelpText = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.4em;
`;

export const CurrentWord = styled.span`
  text-decoration: underline;
`;

export const Special = styled.span`
  color: ${(props) => props.theme.specialColor};
`;
