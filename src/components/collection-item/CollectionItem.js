import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionFooterContainer,
  CollectionItemImage,
  CollectionItemContainer,
  CollectionFooterName,
  CollectionFooterPrice,
  NewCustomButton,
} from "./CollectionItem.styles";

import "./CollectionItem.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>{price}</CollectionFooterPrice>
      </CollectionFooterContainer>
      <NewCustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </NewCustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
