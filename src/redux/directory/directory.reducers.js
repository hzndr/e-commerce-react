const INITIAL_STATE = {
    sections: [
            {
                title: 'hats',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80" ,
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: "https://images.unsplash.com/photo-1622050644890-f4a3f807c2c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1639&q=80",
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            },

        ]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default: 
        return state;
    }
}

export default directoryReducer;