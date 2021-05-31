import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { MainLayout } from '../../layout';
import { EpisodeBtn, InfoText, Header } from '../../components';
import { getEpisode } from '../../store/actions/episode.action';
import { IState } from '../../types/state';
import { ICharacter } from '../../types/character';

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

  @media only screen and (max-width: 768px) {
    display: block;
  }

  .detail {
    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding-left: 2em;
      @media only screen and (max-width: 768px) {
        padding-top: 1em;
      }
    }
  }

  img {
    width: 100%;
    @media only screen and (max-width: 768px) {
      width: 70%;
    }
  }
`;

const EpisodeWrapper = styled.div`
  padding-top: 3em;
  .episode {
    padding-top: 1em;
  }
`;
interface IDetailPage {
  location: {
    state: ICharacter;
  };
}

const DetailPage: React.FC<IDetailPage> = ({ location }) => {
  const characterDetail = location.state;
  const episodeDetail = useSelector((state: IState) => state.episode.episodeDetail);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<number>(0);

  useEffect(() => {
    initialEpisodeDetail();
  }, []);

  const initialEpisodeDetail = () => {
    if (characterDetail.episode.length !== 0) {
      dispatch(getEpisode(parseInt(characterDetail.episode[0].slice(40))));
    }
  };

  const handleFetchEpisode = (episodeId: number, id: number) => {
    dispatch(getEpisode(episodeId));
    setSelectedId(id);
  };

  return (
    <MainLayout>
      <>
        <Header hasBack={true} hasMenu={false} handleMenu={() => {}} />
        <StyledDetailPage>
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
                <InfoText label={'Created'} text={characterDetail.created.slice(0, 10)} />
              </div>
            </DetailWrapper>
            <EpisodeWrapper>
              <h2>{'Episodes Info'}</h2>
              {characterDetail.episode.length !== 0 &&
                characterDetail.episode
                  .slice(0, 5)
                  .map((item, index) => (
                    <EpisodeBtn
                      key={index}
                      id={index}
                      url={item}
                      selectedId={selectedId}
                      handleFetchEpisode={handleFetchEpisode}
                    />
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
      </>
    </MainLayout>
  );
};

export default DetailPage;
