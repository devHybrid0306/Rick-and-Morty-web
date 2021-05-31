import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: auto;
  background-color: ${({ theme }) => theme.color.copper_coin};
  color: ${({ theme }) => theme.color.white};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.color.copper_coin};
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
    transition: ${({ theme }) => theme.transition.transitionFast};
  }
  &:active {
    opacity: 1;
    transition: ${({ theme }) => theme.transition.transitionFast};
  }
`;

interface IEpisodeBtnProps {
  url: string;
  handleFetchEpisode: any;
}

const EpisodeBtn: React.FC<IEpisodeBtnProps> = ({ url, handleFetchEpisode }) => {
  return (
    <Button onClick={() => handleFetchEpisode(parseInt(url.slice(40)))}>{`episode ${url.slice(
      40,
    )}`}</Button>
  );
};

export default EpisodeBtn;
