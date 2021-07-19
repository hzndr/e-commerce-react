import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  /* width: 22vw; */
  display: flex;
  flex-direction: column;
  flex: 0 1 300px;
  height: 460px;
  align-items: center;
  margin: 10px;
  position: relative;
  box-shadow: 2px 1px 5px 0px #80808052;
  transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  
  &:hover {
    transform: scale(1.02);

    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width:800px){
    &:hover {
      transform: unset;
    .image {
      opacity: unset;
    }
    button {
      opacity: unset;
    }
  }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 70%;
  display: none;
  @media screen and (max-width:800px){
    display: block;
    opacity: 0.9;
    min-width: unset;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 85%;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  padding: .7rem;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 85%;
  font-weight: bolder;
`;

export const PriceContainer = styled.span`
  width: 15%;
  text-align: right;
`;