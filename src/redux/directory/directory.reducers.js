const INITIAL_STATE = {
    sections: [
            {
                title: 'succulents',
                imageUrl: "https://images.unsplash.com/photo-1484795945774-dcf93dc95861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1560&q=80",
                id: 1,
                linkUrl: 'shop/succulents'
            },
            {
                title: 'plant bundles',
                imageUrl: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                id: 2,
                linkUrl: 'shop/plant-bundles'
            },
            {
                title: 'herbs',
                imageUrl: "https://images.unsplash.com/photo-1417533366444-43834ad6b3bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1654&q=80",
                id: 3,
                linkUrl: 'shop/herbs'
            },
            {
                title: 'all plants',
                imageUrl: "https://images.pexels.com/photos/3153522/pexels-photo-3153522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                size: 'large',
                id: 4,
                linkUrl: 'shop/all-plants'
            },
            {
                title: 'accessories',
                imageUrl: "https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1468&q=80",
                size: 'large',
                id: 5,
                linkUrl: 'shop/accessories'
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