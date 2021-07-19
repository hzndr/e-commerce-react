const SHOP_DATA = {
  succulents: {
    id: 1,
    title: 'Succulents',
    routeName: 'succulents',
    items: [
      {
        id: 1,
        name: "'Purple Pearl' Echeveria",
        imageUrl: 'https://i.ibb.co/0Xwqx0v/succulent-1.png',
        price: 10
      },
      {
        id: 2,
        name: "'ET Fingers' Crassula ovata",
        imageUrl: 'https://i.ibb.co/cDBhsD0/succulent-2.png',
        price: 12
      },
      {
        id: 3,
        name: 'Aloe Vera',
        imageUrl: 'https://i.ibb.co/q0smDVK/succulent-3.png',
        price: 15
      },
      {
        id: 4,
        name: 'Cactus',
        imageUrl: 'https://i.ibb.co/HGNqL86/succulent-4.png',
        price: 9
      },
      {
        id: 5,
        name: 'Cactus',
        imageUrl: 'https://i.ibb.co/SJqxSpy/succulent-5.png',
        price: 8
      },
      {
        id: 6,
        name: 'Cactus',
        imageUrl: 'https://i.ibb.co/Ph7Qw4Y/succulent-6.png',
        price: 7
      },
      {
        id: 7,
        name: 'Aloe Vera',
        imageUrl: 'https://i.ibb.co/G0QF8zQ/succulent-7.png',
        price: 12
      },
      {
        id: 8,
        name: 'Pachyphytum oviferum',
        imageUrl: 'https://i.ibb.co/d5Zt9Rf/succulent-8.png',
        price: 12
      },
      {
        id: 9,
        name: 'Echeveria',
        imageUrl: 'https://i.ibb.co/my81d9R/succulent-9.png',
        price: 11
      }
    ]
  },
   "plant-bundles": {
    id: 2,
    title: 'Plant Bundles',
    routeName: 'plant-bundles',
    items: [
      {
        id: 10,
        name: '2 Piece Succulent Set',
        imageUrl: 'https://i.ibb.co/qB0VJmF/plant-bundle-1.png',
        price: 20
      },
      {
        id: 11,
        name: '2 Piece Bundle',
        imageUrl: 'https://i.ibb.co/YysG2J6/plant-bundle-2.png',
        price: 40
      },
      {
        id: 12,
        name: '3 Piece Set',
        imageUrl: 'https://i.ibb.co/CH743ST/plant-bundle-3.png',
        price: 65
      },
      {
        id: 13,
        name: '3 Piece Cacti Set',
        imageUrl: 'https://i.ibb.co/KD6Phby/plant-bundle-4.png',
        price: 89
      },
      {
        id: 14,
        name: '2 Piece Set',
        imageUrl: 'https://i.ibb.co/n81GZWT/plant-bundle-5.png',
        price: 45
      },
      {
        id: 15,
        name: '3 Piece Succulent Set',
        imageUrl: 'https://i.ibb.co/Mk8md68/plant-bundle-8.png',
        price: 27
      },
      {
        id: 16,
        name: '2 Piece Herbs Set',
        imageUrl: 'https://i.ibb.co/Qk83nLV/plant-bundle-7.png',
        price: 15
      },
      {
        id: 17,
        name: '4 Piece Succulent Set',
        imageUrl: 'https://i.ibb.co/W2rDZB9/plant-bundle-6.png',
        price: 35
      }
    ]
  },
  herbs: {
    id: 3,
    title: 'Herbs',
    routeName: 'herbs',
    items: [
      {
        id: 18,
        name: 'Rosemary',
        imageUrl: 'https://i.ibb.co/9ghz3pM/herbs-1.png',
        price: 5
      },
      {
        id: 19,
        name: 'Parsley',
        imageUrl: 'https://i.ibb.co/K295nrG/herbs-2.png',
        price: 5
      },
      {
        id: 20,
        name: 'Basil',
        imageUrl: 'https://i.ibb.co/mH1YBzs/herbs-3.png',
        price: 5
      },
      {
        id: 21,
        name: 'Thyme',
        imageUrl: 'https://i.ibb.co/gzzMt5F/herbs-4.png',
        price: 8
      },
      {
        id: 22,
        name: 'Mint',
        imageUrl: 'https://i.ibb.co/9NKHvMw/herbs-5.png',
        price: 5
      }
    ]
  },
  "all-plants": {
    id: 4,
    title: 'All Plants',
    routeName: 'all-plants',
    items: [
      {
        id: 23,
        name: 'Monstera',
        imageUrl: 'https://i.ibb.co/G3BxRmR/plants-1.png',
        price: 32
      },
      {
        id: 24,
        name: 'Zamioculcas zamiifolia',
        imageUrl: 'https://i.ibb.co/hscLKDW/plants-2.png',
        price: 28
      },
      {
        id: 25,
        name: 'Scindapsus pictus',
        imageUrl: 'https://i.ibb.co/QbMS6VB/plants-3.png',
        price: 18
      },
      {
        id: 26,
        name: 'Ficus benjamina',
        imageUrl: 'https://i.ibb.co/D54jHCQ/plants-4.png',
        price: 30
      },
      {
        id: 27,
        name: "Ficus robusta 'Variegata'",
        imageUrl: 'https://i.ibb.co/pLrCsVv/plants-5.png',
        price: 35
      },
      {
        id: 28,
        name: "Sansevieria trifasciata",
        imageUrl: 'https://i.ibb.co/nLX9WBt/plants-6.png',
        price: 22
      },
      {
        id: 29,
        name: 'Philodendron squamiferum',
        imageUrl: 'https://i.ibb.co/N1KtvY3/plants-7.png',
        price: 29
      }
    ]
  },
  accessories: {
    id: 5,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 30,
        name: 'Owl Pot',
        imageUrl: 'https://i.ibb.co/9ZPNgq1/accessories-2.png',
        price: 17
      },
      {
        id: 31,
        name: 'Pot with Floral Pattern',
        imageUrl: 'https://i.ibb.co/6DyBhTB/accessories-1.png',
        price: 13
      },
      {
        id: 32,
        name: 'Wooden Pot',
        imageUrl: 'https://i.ibb.co/xz5XSjT/accessories-3.png',
        price: 11
      },
      {
        id: 33,
        name: 'Large Terracotta Pot',
        imageUrl: 'https://i.ibb.co/j8sf7S1/accessories-5.png',
        price: 25
      },
      {
        id: 34,
        name: 'Modern White Watering Can',
        imageUrl: 'https://i.ibb.co/vkj3TcL/accessories-8.png',
        price: 22
      },
      {
        id: 35,
        name: 'Classic Copper Watering Can',
        imageUrl: 'https://i.ibb.co/6RzQRGN/accessories-9.png',
        price: 22
      }
    ]
  }
};


  export default SHOP_DATA;