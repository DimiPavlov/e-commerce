import React from "react"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import Menuitem from "../menu-item/Menu-item"
import { selectDirectorySections } from "../../redux/directory/directory.selectors"


import "./Directory.styles.scss"

const Directory = ({ sections }) => {

        return (
            <div className="directory-menu">
                {sections.map(({ id, ...otherProps }) =>
                    <Menuitem key={id} {...otherProps} />
                )}
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)