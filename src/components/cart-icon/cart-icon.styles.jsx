import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconSVG = styled(ShoppingIcon)`
  width: 35px;
  height: 35px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  color: rgb(7, 90, 28);
  font-size: 13px;
  font-weight: bold;
  top: 40%;
`;
