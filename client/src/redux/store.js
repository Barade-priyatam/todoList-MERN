import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// famous redux middleware (redux-thunk)
import thunk from 'redux-thunk';

import {todosReducers} from './reducers/todosReducers.js';

// there can be 1000's of reducers in a project so we
// can combine these reducres ans pass it to redux store
const reducer = combineReducers({
    todos: todosReducers
})


// need to initialise thunk
const middleware = [thunk];

// redux store (frontend database)
const store = createStore(
    reducer,
    // to sync redux devtools extention with this redux store
    // and now we can pass middleware to this function as arguments
    // use applyMiddleware function from redux to pass middleware that initialised above
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;