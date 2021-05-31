import React from 'react';
import styled from 'styled-components';

import { ICharacter } from '../../types/character';
import { SearchError, Card } from './../../components';

const CardWrapper = styled.div`
  width: 33.333%;
  padding: 1em;
  display: flex;
  align-self: center;
  @media only screen and (max-width: 992px) {
    width: 50%;
    padding: 0.5em;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0.5em;
  }
`;

interface ICharacterListProps {
  filteredChars: ICharacter[];
}
const CharacterList: React.FC<ICharacterListProps> = ({ filteredChars }) => {
  return (
    <>
      {filteredChars.length === 0 ? (
        <SearchError />
      ) : (
        filteredChars.map((char, index) => {
          return (
            <CardWrapper key={index}>
              <Card {...char} />
            </CardWrapper>
          );
        })
      )}
    </>
  );
};

export default CharacterList;
