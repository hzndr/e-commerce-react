import React from 'react'
import {CartIconContainer, ItemCountContainer, ShoppingIconSVG} from './cart-icon.styles'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconSVG />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
