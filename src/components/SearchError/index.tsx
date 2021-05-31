import React from 'react';
import styled from 'styled-components';
import noResultImg from '../../assets/images/no_results_img.png';

const NoResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
  }
  p {
    color: ${({ theme }) => theme.color.white};
  }
`;

const SearchError = () => {
  return (
    <NoResultWrapper>
      <img src={noResultImg} alt="Rick and Morthy looking anxious" />
      <p>Sorry, your search did not match any character in our site</p>
    </NoResultWrapper>
  );
};

export default SearchError;
