import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

const InfoLabel = styled.p`
  font-size: 1.2em;
  color: '${({ theme }) => theme.color.white}';
  font-weight: 600;
`;

const InfoValue = styled.p`
  font-size: 1.2em;
  color: '${({ theme }) => theme.color.white}';
  font-weight: 400;
  padding-left: 1em;
`;

interface IInfoText {
  label: string;
  text: string;
}

const InfoText: React.FC<IInfoText> = ({ label, text }) => {
  return (
    <InfoWrapper>
      <InfoLabel>{`${label}: `}</InfoLabel>
      <InfoValue>{text}</InfoValue>
    </InfoWrapper>
  );
};

export default InfoText;
