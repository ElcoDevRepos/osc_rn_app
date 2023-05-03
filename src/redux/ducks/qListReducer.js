import buttonsAll from '../../helpers/buttonsAll';


// ACTIONS
// Actions are functions that return an object with a type property and a payload
// I've skipped all the Actions - so calling hooks needs use specifiy the type and payload'

/*
const FOCUS_LAY_1 = () => ({
    type: 'FOCUS_LAY_1',
    payload: { label}
});
*/

// INITIAL STATE 

const initialState = {
    // Q LIST
    CURRENT_Q_LABEL: {
        label: ""
    },
    CURRENT_Q_TIME: {
        label: ""
    },
    PENDING_Q_LABEL: {
        label: ""
    },
    PENDING_Q_TIME: {
        label: ""
    },
    
    };



// REDUCERS

// This is the reducer.  It provides the functions that will be called by the actions.
export default (state = initialState, action) => {

    // props will come in form {label: 'LIVE :', style: 'commandLine'}

    //console.log("THIS IS LABEL REDUCER");
    //console.log(state);

    //return  state;

    switch (action.type) {

        case 'CURRENT_Q_LABEL':
            return {
                ...state,
                CURRENT_Q_LABEL: {
                    ...state.CURRENT_Q_LABEL,
                    label: action.payload.label
                }
            }

            break;

        case 'PENDING_Q_LABEL':
            return {
                ...state,
                PENDING_Q_LABEL: {
                    ...state.PENDING_Q_LABEL,
                    label: action.payload.label
                }
            }

            break;

        case 'CURRENT_Q_TIME':
            return {
                ...state,
                CURRENT_Q_TIME: {
                    ...state.CURRENT_Q_TIME,
                    label: action.payload.label
                }
            }

            break;

        case 'PENDING_Q_TIME':
            return {
                ...state,
                PENDING_Q_TIME: {
                    ...state.PENDING_Q_TIME,
                    label: action.payload.label
                }
            }

            break;

        default: {
            return {
                ...state
            };
        }

    }
}
