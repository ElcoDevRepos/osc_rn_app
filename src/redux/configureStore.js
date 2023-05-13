import { combineReducers, createStore } from 'redux';
import buttonsReducer from '../redux/ducks/buttonsReducer';
import appReducer from './ducks/appReducer';
import directSelectReducer from './ducks/directSelectReducer';
import layoutsReducer from './ducks/layoutsReducer';
import qListReducer from './ducks/qListReducer';
import fadersReducer from './ducks/fadersReducer';
import encodersReducer from './ducks/encodersReducer';  


// combine all the reducers 
const rootReducer = combineReducers({
    appReducer: appReducer,
    buttonsReducer: buttonsReducer,
    directSelectReducer: directSelectReducer,
    layoutsReducer: layoutsReducer,
    qListReducer: qListReducer,
    fadersReducer: fadersReducer,
    encodersReducer: encodersReducer,
});

//console.log(labelReducer);
const store = createStore(rootReducer);

console.log(store);

export default store;