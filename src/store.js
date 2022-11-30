import { createStore ,combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTools, composeWithTools } from 'redux-devtools-extension';
import { productListReducers } from './reducers/productReducers';


const rootReducer  = combineReducers({
    productLists:productListReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(rootReducer ,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store