import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import useMedia from 'use-media';
import styled from 'styled-components';

import { CharacterList, Filter } from '../../components';
import { getCharacterList, setCurrentPageNumber } from '../../store/actions/character.action';
import { IState } from '../../types/state';

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: row;

  .mainpage {
    &__sidebar {
      @media only screen and (max-width: 768px) {
        display: none;
        width: 100%;
      }
      width: 30%;
      border-right: 2px solid ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.black};
      padding: 2em;
    }

    &__content {
      flex-direction: column;
      background-color: ${({ theme }) => theme.color.black};
      width: 70%;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }

      &__character-list {
        display: flex;
        flex-wrap: wrap;
      }
      &__paginate {
        display: flex;
        flex-direction: row;
      }
    }
  }

  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }
  .pagination > li > a {
    border: 1px solid ${({ theme }) => theme.color.primary};
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #47ccde;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;

interface IMainPageProps {
  isMenu: boolean;
}

const MainPage: React.FC<IMainPageProps> = ({ isMenu }) => {
  const dispatch = useDispatch();
  const isMobile = useMedia({ maxWidth: 768 });
  const characterList = useSelector((state: IState) => state.character.characterList);
  const pageInfo = useSelector((state: IState) => state.character.pageInfo);
  const currentPage = useSelector((state: IState) => state.character.currentPage);

  const [nameFilter, setNameFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [genderFilter, setGenderFilter] = useState<string>('all');

  useEffect(() => {
    console.log('->MainPage.IsMenu', isMenu);
    dispatch(getCharacterList(currentPage));
  }, []);

  const handleFilter = (filterData: any) => {
    if (filterData.key === 'searchBox') setNameFilter(filterData.value);
    else if (filterData.key === 'status') setStatusFilter(filterData.value);
    else if (filterData.key === 'gender') setGenderFilter(filterData.value);
  };

  const filteredChars = characterList
    .filter((char) => {
      return char.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((char) => {
      if (statusFilter === 'all') return char;
      else return char.status === statusFilter;
    })
    .filter((char) => {
      if (genderFilter === 'all') return char;
      else return char.gender === genderFilter;
    });

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected + 1;
    dispatch(setCurrentPageNumber(selectedPage));
    dispatch(getCharacterList(selectedPage));
  };

  return (
    <StyledMainPage>
      <div className="mainpage__sidebar">
        <Filter handleFilter={handleFilter} />
      </div>
      <div className="mainpage__content">
        <div className="mainpage__content__character-list">
          <CharacterList filteredChars={filteredChars} />
        </div>
        <div className="mainpage__content__paginate">
          {pageInfo !== null && (
            <ReactPaginate
              initialPage={currentPage - 1}
              previousLabel={'prev'}
              nextLabel={'next'}
              breakLabel={isMobile ? '' : '...'}
              breakClassName={'break-me'}
              pageCount={Number(pageInfo.pages)}
              marginPagesDisplayed={isMobile ? 0 : 2}
              pageRangeDisplayed={isMobile ? 2 : 5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          )}
        </div>
      </div>
    </StyledMainPage>
  );
};

export default MainPage;
