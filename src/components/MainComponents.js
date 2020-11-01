import styled from 'styled-components';

export const Header = styled.h1`
  color: ${(props) => props.theme.bodyColor};
  font-size: 0.8em;
  margin-bottom: 1.4em;
`;

export const Word = styled.h1`
  color: ${(props) => props.theme.headerColor};
  font-size: 2em;
  font-family: 'Noto Serif', serif;
`;
