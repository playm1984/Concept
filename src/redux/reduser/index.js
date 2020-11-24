const initialState = {
    wearMainPage: [
        {
            title: 'Офисная одежда',
            id: 'shoes_01',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            id: 'shoes_02',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            id: 'shoes_03',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            id: 'shoes_04',
            img: './img/shoes.png'
        },
        {
            title: 'Офисная одежда',
            id: 'shoes_05',
            img: './img/shoes.png'
        }
    ],

    dbWear:[
        {
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2400,
            count: 0,
            id: 'outerwear_01',
            img: './img/out.png'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2500,
            count: 0,
            id: 'outerwear_02'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2300,
            count: 0,
            id: 'outerwear_03'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2200,
            count: 0,
            id: 'outerwear_04'
        },
        {
            img: './img/out.png',
            title: 'Рубашка',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2000,
            count: 0,
            id: 'outerwear_05'
        },
        {
            img: './img/out.png',
            title: 'Брюки',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2000,
            count: 0,
            id: 'outerwear_05'
        },
        {
            img: './img/out.png',
            title: 'Платья',
            delivery: 'Сроки доставки /',
            deliveryDay: '2 дня',
            price: 2000,
            count: 0,
            id: 'outerwear_05'
        }
    ],

    mainItemCategory: ['Рубашка', 'Платья', 'Брюки', '...'],
    items: {},
    totalPrice: 0,
    totalCount: 0,
    category: null,
    searchQuery: ''
}

    const _get = (obj, path) => {
        const [firstKey, ...keys] = path.split('.');
            return keys.reduce((val, key) => {
            return val[key];
        }, obj[firstKey]);
    };

    const getTotalSum = (obj, path) => {
        return Object.values(obj).reduce((sum, obj) => {
            const value = _get(obj, path);
        return sum + value;
        }, 0);
    };

const reduser = ( state = initialState, action ) => {
    switch(action.type){
                case "COUNT_ITEM_PLUS":{
                    const newItemsPlus = [...state.items[action.payload].items,state.items[action.payload].items[0]];
                    const totalPricePlus = newItemsPlus.reduce((sum, obj) => obj.price + sum, 0)
                    const newItem = {
                        ...state.items,
                        [action.payload]: {
                            items: newItemsPlus,
                            totalPrice: totalPricePlus
                            }
                        }
                    
                        const totalCount = getTotalSum(newItem, 'items.length');
                        const totalPrice = getTotalSum(newItem, 'totalPrice');

                    return{
                        ...state,
                        items: newItem,
                        totalPrice,
                        totalCount
                    }
                }

                case "COUNT_ITEM_MINUS":{
                    const oldItem = state.items[action.payload].items;
                    const newItemsMunis = oldItem.length > 1 ? state.items[action.payload].items.slice(1) : oldItem;
                    const totalPriceMinus = newItemsMunis.reduce((sum, obj) => obj.price + sum, 0);
                    const newItem = {
                        ...state.items,
                        [action.payload]: {
                            items: newItemsMunis,
                            totalPrice: totalPriceMinus
                        }
                    }

                    const totalCount = getTotalSum(newItem, 'items.length');
                    const totalPrice = getTotalSum(newItem, 'totalPrice');

                    return{
                        ...state,
                        items: newItem,
                        totalPrice,
                        totalCount
                    }
                }

                case "ADD_WEAR_CART":{
                    const currentWearItems = !state.items[action.payload.id] 
                        ? [action.payload] 
                        : [...state.items[action.payload.id].items, action.payload];
                    const newItems = {
                        ...state.items,
                        [action.payload.id]: {
                            items: currentWearItems, 
                            totalPrice: currentWearItems.reduce((sum, obj) => obj.price + sum, 0)}
                    }
                    const totalCount = getTotalSum(newItems, 'items.length');
                    const totalPrice = getTotalSum(newItems, 'totalPrice');

                    return{
                        ...state,
                        items: newItems,
                        totalCount,
                        totalPrice
                    }
                }

                case "REMOVE_ITEM_WEAR":{
                    const newItemsWear = {
                        ...state.items,
                    };
                    const currentTotalPrice = newItemsWear[action.payload].totalPrice;
                    const currentTotalCount = newItemsWear[action.payload].items.length;
                    delete newItemsWear[action.payload];
                    return {
                        ...state,
                        items: newItemsWear,
                        totalPrice: state.totalPrice - currentTotalPrice,
                        totalCount: state.totalCount - currentTotalCount,
                    };
                }

                case 'SET_CATEGORY':{
                    const newSort = state.dbWear.filter(obj => obj.title === action.payload)
                    return {
                        ...state,
                        category: newSort
                    };
                }

                case 'SEARH_QUERY':{
                    return{
                        ...state,
                        searchQuery: action.payload
                    }
                }

            default:
                return state
    }
}

export default reduser