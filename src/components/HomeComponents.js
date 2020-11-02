import styled from 'styled-components';
import { SiGithub } from 'react-icons/si';

export const Greeting = styled.h1`
  color: ${(props) => props.theme.headerColor}};
  font-size: 1.2em;
  margin-bottom: 1.5em;
`;

export const HelpText = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.4em;
`;

export const Special = styled.span`
  color: ${(props) => props.theme.specialColor};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FooterIcons = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.4em;
`;

export const GithubIcon = styled(SiGithub)`
  cursor: pointer;
`;
