import React from 'react'
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
      <CollectionItemContainer>
        <BackgroundImage
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <CollectionFooterContainer className="collection-footer">
          <NameContainer>{name}</NameContainer>
          <PriceContainer>&#8364;{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          ADD TO CART
        </AddButton>
      </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
