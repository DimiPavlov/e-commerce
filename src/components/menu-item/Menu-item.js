import React from "react";

import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
} from "./MenuItem.styles";

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentContainer className="content">
      <h1>{title.toUpperCase()}</h1>
      <span>Shop Now</span>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(Menuitem);
