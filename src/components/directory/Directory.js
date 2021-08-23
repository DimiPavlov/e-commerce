import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { DirectoryContainer } from "./Directory.styles";
import Menuitem from "../menu-item/Menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherProps }) => (
        <Menuitem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
