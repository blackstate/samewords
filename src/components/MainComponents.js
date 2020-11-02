import styled from 'styled-components';

export const Header = styled.h1`
  color: ${(props) => props.theme.bodyColor};
  font-size: 0.8em;
  margin-bottom: 1.4em;
`;

export const Word = styled.h1`
  color: ${(props) => props.theme.headerColor};
  font-size: ${(props) => (props.sm ? '1.5em' : '2em')};
  font-family: 'Noto Serif', serif;
  margin-right: 0.5em;

  margin-bottom: ${(props) => props.sm && '1em'};
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

export const Notice = styled.h1`
  color: ${(props) => props.theme.bodyColor};
  font-size: 1em;
  margin-bottom: 1em;
`;
