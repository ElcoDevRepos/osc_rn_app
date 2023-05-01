// MISC NOTES FOR ADDING REDUX

// NPM i redux
// npm i react-redux

//
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// in App.js wrap the application in the Provider component
// <provider>
//   <App />
// </provider>
//
// create redux/configureStore.js
// create redux/ducks/

app.js
import { Provider } from 'react-redux';
import store from './redux/configureStore.js';

return (
    <Provider store={store}>
        <App />
    </Provider>
)



./redux/configureStore.js
import { combineReducers, createStore } from 'redux';
import labelReducer from './ducks/labelReducer.js';

// combine all the reducers 
const reducer = combineReducers({
    labelReducer : labelReducer
});

const store = createStore(reducer);

export default store

====================




./redux/ducks/labelReducer.js

// ACTIONS
// Actions are functions that return an object with a type property

// This relabel idea probably doesn't need to be.  Need specific actions for targets.'
const RELABEL = 'relabel';

const relabel = () => ({
    type: RELABEL
});

// This is better
const commandLine = () => ({
    type: 'commandLine',
    payload : {label, style}
});

// INITIAL STATE 

const initialState = {
    // basically put the relevant parts of buttonsAll in here.
    commandLine : {
        label : 'LIVE ::::',
        style : 'commandLine'
        },
    info-chan : {
        label : 'CHAN :',
        style : 'info-live'
        }
    };


// REDUCERS

// This is the reducer.  It provides the functions that will be called by the actions.
export default (state = initialState, action) => {

    // props will come in form {label: 'LIVE :', style: 'commandLine'}

switch (action.type) {
        case commandLine:
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                commandLine : {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.commandLine,
                    label : action.payload.label,
                    style : action.payload.style
                }
        default:
            return state;
    }
}




====================

// HOW TO GET STATE FROM THE STORE

import useSelector from 'react-redux';

const variableName = useSelector(state => state.labelReducer.commandLine.label);
//const variableName = useSelector(state => state.reducerName.variable);



// HOW TO PERFORM AN ACTION
import useDispatch from 'react-redux';
import commandLine from './redux/ducks/labelReducer.js';

const dispatch = useDispatch();

// dispatch(action, payload)

store.dispatch({type : 'commandLine', payload : {label : 'newlabel', style : 'newstyle'});


