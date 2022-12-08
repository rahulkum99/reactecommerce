import { createStore ,combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers,productDetailsReducers } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const rootReducer  = combineReducers({
    productLists:productListReducers,
    productDetails:productDetailsReducers,
    cart:cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItem')):[]

const initialState = {
    cart:{cartItems:cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(rootReducer ,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store