import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  isClicked: boolean;
}

const Button = styled.button<IButtonProps>`
  width: auto;
  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.primary : theme.color.copper_coin};
  color: ${({ theme }) => theme.color.white};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.color.white};
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
  id: number;
  url: string;
  handleFetchEpisode: any;
  selectedId: number;
}

const EpisodeBtn: React.FC<IEpisodeBtnProps> = ({ id, url, handleFetchEpisode, selectedId }) => {
  return (
    <Button
      isClicked={selectedId === id}
      onClick={() => handleFetchEpisode(parseInt(url.slice(40)), id)}
    >{`episode ${url.slice(40)}`}</Button>
  );
};

export default EpisodeBtn;
