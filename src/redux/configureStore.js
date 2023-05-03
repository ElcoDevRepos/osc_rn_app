import { combineReducers, createStore } from 'redux';
import buttonsReducer from '../redux/ducks/buttonsReducer';
import directSelectReducer from './ducks/directSelectReducer';
import layoutsReducer from './ducks/layoutsReducer';
import qListReducer from './ducks/qListReducer';
import fadersReducer from './ducks/fadersReducer';


// combine all the reducers 
const rootReducer = combineReducers({
    buttonsReducer: buttonsReducer,
    directSelectReducer: directSelectReducer,
    layoutsReducer: layoutsReducer,
    qListReducer: qListReducer,
    fadersReducer: fadersReducer
});

//console.log(labelReducer);
const store = createStore(rootReducer);

console.log(store);

export default store;