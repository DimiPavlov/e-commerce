import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  Preview,
} from "./CollectionPreview.styles";

const CollectionPreview = ({ items, title, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </CollectionPreviewTitle>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
