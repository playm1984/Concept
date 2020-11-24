const countItemMinus = (id) => {
    return{
        type: "COUNT_ITEM_MINUS",
        payload: id
    }  
}

const countItemPlus = (id) => {
    return{
        type: "COUNT_ITEM_PLUS",
        payload: id
    }  
}

const addWearToCart = (wearObj) => {
    return{
        type: 'ADD_WEAR_CART',
        payload: {...wearObj}
    }
}

const removeItemWear = (id) => {
    return{
        type: "REMOVE_ITEM_WEAR",
        payload: id
    }
}

const setCategory = (name) => {
    return {
    type: 'SET_CATEGORY',
    payload: name,
    }
}

const setSearchQuery = (value) => {
    return{
        type: 'SEARH_QUERY',
        payload: value
    }
}


export { countItemPlus, countItemMinus, addWearToCart, removeItemWear, setCategory, setSearchQuery }