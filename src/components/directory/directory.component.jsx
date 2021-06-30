import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
constructor(){
    super();

    this.state = {
        sections: [
            {
                title: 'hats',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80" ,
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                size: 'large',
                id: 5,
                linkUrl: ''
            },

        ]
    }
}
render(){
    return (
        <div className="directory-menu">
        {
            this.state.sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>
                )
        }
        </div>
    )
}
}

export default Directory;