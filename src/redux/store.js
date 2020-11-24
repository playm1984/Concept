import { createStore } from 'redux'
import reducer from './reduser'

function saveToLocalStorage(state) {
    try{
        const serialzedState = JSON.stringify(state.items)
        localStorage.setItem('basket', serialzedState)
    } catch(e){
        console.log(e);
    }
}

// localStorage.clear()

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store