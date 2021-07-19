import React from 'react'
import {connect } from 'react-redux'
import {DirectoryContainer} from './directory.styles'
import MenuItem from '../menu-item/menu-item.component'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

const Directory = ({sections}) => {
    return (
        <DirectoryContainer>
        {
            sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>
                )
        }
        </DirectoryContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);