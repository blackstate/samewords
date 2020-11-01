import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 1.3em;
  margin: 0 1em;
  border-radius: 10px;

  @media (min-width: 481px) {
    max-width: 760px;
    margin: 0 auto;
    padding: 2em;
  }

  @media (min-width: 1025px) {
    min-width: 45vw;
    max-width: 760px;
  }
`;

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
