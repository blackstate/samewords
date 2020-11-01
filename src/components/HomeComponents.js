import styled from 'styled-components';

export const Greeting = styled.h1`
  color: ${(props) => props.theme.headerColor}};
  font-size: 1.2em;
  margin-bottom: 1.5em;
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
