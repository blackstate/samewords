import styled from 'styled-components';

export const Synonym = styled.li`
  display: inline-block;
  font-family: 'Noto Serif', serif;
  background-color: ${(props) => props.theme.specialBg};
  margin: 10px 15px 10px 0;
  padding: 0.5em;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export const SynonymList = styled.ul`
  margin-bottom: 1.5em;
`;
