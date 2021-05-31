import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { EpisodeBtn, InfoText } from '../../components';
import { paths } from '../../constants/paths';
import { getEpisode } from '../../store/actions/episode.action';
import { IState } from '../../types/state';
import { ICharacter } from '../../types/character';

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 2em;
`;

const MainWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .detail {
    &__img {
    }

    &__info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding-left: 2em;
    }
  }

  img {
    width: 100%;
  }
`;

const EpisodeWrapper = styled.div`
  padding-top: 3em;
  .episode {
    padding-top: 1em;
  }
`;

const Back = styled(Link)`
  display: flex;
  width: 10%;
  padding-left: 1em;
`;

interface IDetailPage {
  location: {
    state: ICharacter;
  };
}

const DetailPage: React.FC<IDetailPage> = (props) => {
  const characterDetail = props.location.state;
  const episodeDetail = useSelector((state: IState) => state.episode.episodeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    initialDetail();
  }, []);

  const initialDetail = () => {};

  const handleFetchEpisode = (id: number) => {
    dispatch(getEpisode(id));
  };

  return (
    <StyledDetailPage>
      <Back to={paths.main}>
        <h2>{'<  Back'}</h2>
      </Back>
      <MainWrapper>
        <DetailWrapper>
          <div className="detail__img">
            <img src={characterDetail.image} alt={characterDetail.name} />
          </div>
          <div className="detail__info">
            <InfoText label={'Id'} text={characterDetail.id.toString()} />
            <InfoText label={'Name'} text={characterDetail.name} />
            <InfoText label={'Status'} text={characterDetail.status} />
            <InfoText label={'Species'} text={characterDetail.species} />
            <InfoText label={'Type'} text={characterDetail.type} />
            <InfoText label={'Gender'} text={characterDetail.gender} />
            <InfoText label={'Origin'} text={characterDetail.origin.name} />
            <InfoText label={'Created'} text={characterDetail.created} />
          </div>
        </DetailWrapper>
        <EpisodeWrapper>
          <h2>{'Episodes Info'}</h2>
          {characterDetail.episode.length !== 0 &&
            characterDetail.episode
              .slice(0, 5)
              .map((item, index) => (
                <EpisodeBtn key={index} url={item} handleFetchEpisode={handleFetchEpisode} />
              ))}
          {episodeDetail !== null && (
            <div className="episode">
              <InfoText label={'Episode ID'} text={episodeDetail.id.toString()} />
              <InfoText label={'Episode Name'} text={episodeDetail.name} />
              <InfoText label={'Episode Air Date'} text={episodeDetail.air_date} />
              <InfoText label={'Episode'} text={episodeDetail.episode} />
            </div>
          )}
        </EpisodeWrapper>
      </MainWrapper>
    </StyledDetailPage>
  );
};

export default DetailPage;
