import styled from 'styled-components';
import { FireworkSpinner } from 'react-spinners-kit';

export const Header = styled.h1`
  color: ${(props) => props.theme.bodyColor};
  font-size: 0.8em;
  margin-bottom: 1.4em;
`;

export const Word = styled.h1`
  color: ${(props) => props.theme.headerColor};
  font-size: 2em;
  font-family: 'Noto Serif', serif;
  margin-right: 0.5em;
`;

export const Speech = styled.button`
  color: ${(props) =>
    props.current === '' || props.current === props.self
      ? props.theme.specialColor
      : props.theme.bodyColor};
  font-family: 'Noto Serif', serif;
  font-size: inherit;
  margin: 0;
  margin-right: 0.5em;

  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const WordGroup = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
