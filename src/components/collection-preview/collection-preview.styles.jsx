import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px 0 20px 0;
`;

export const TitleContainer = styled.h1`
    border-bottom: 1px solid rgb(122, 187, 126);
    color: black;
    font-size: 32px;
    font-weight: bolder;
    margin-bottom: 25px;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
  &:hover {
    color: grey;
  }
  @media screen and (max-width: 660px){
    text-align: center;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (max-width: 1400px) {
    justify-content: center;
  }
`;