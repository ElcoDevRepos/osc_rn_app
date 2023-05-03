import buttonsAll from '../../helpers/buttonsAll';

// ACTIONS
// Actions are functions that return an object with a type property and a payload


// This is better
/*
const x_commandLine = () => ({
    type: 'commandLine',
    payload: { label, style }
});
*/

// INITIAL STATE 

const initialState = {
    // basically put the relevant parts of buttonsAll in here.
    FADER_PAGE: {
        label: "1"
    },
    FADER1_LABEL: {
        label: "LOAD"
    },
    FADER1_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER1_VALUE: {
        value: 0
    },
    FADER1_PERCENTAGE: {
        label: "0%"
    },

    FADER2_LABEL: {
        label: "LOAD"
    },
    FADER2_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER2_VALUE: {
        value: 0
    },
    FADER2_PERCENTAGE: {
        label: "0%"
    },

    FADER3_LABEL: {
        label: "LOAD"
    },
    FADER3_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER3_VALUE: {
        value: 0
    },
    FADER3_PERCENTAGE: {
        label: "0%"
    },

    FADER4_LABEL: {
        label: "LOAD"
    },
    FADER4_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER4_VALUE: {
        value: 0
    },
    FADER4_PERCENTAGE: {
        label: "0%"
    },

    FADER5_LABEL: {
        label: "LOAD"
    },
    FADER5_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER5_VALUE: {
        value: 0
    },
    FADER5_PERCENTAGE: {
        label: "0%"
    },

    FADER6_LABEL: {
        label: "LOAD"
    },
    FADER6_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER6_VALUE: {
        value: 0
    },
    FADER6_PERCENTAGE: {
        label: "0%"
    },

    FADER7_LABEL: {
        label: "LOAD"
    },
    FADER7_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER7_VALUE: {
        value: 0
    },
    FADER7_PERCENTAGE: {
        label: "0%"
    },

    FADER8_LABEL: {
        label: "LOAD"
    },
    FADER8_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER8_VALUE: {
        value: 0
    },
    FADER8_PERCENTAGE: {
        label: "0%"
    },

    FADER9_LABEL: {
        label: "LOAD"
    },
    FADER9_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER9_VALUE: {
        value: 0
    },
    FADER9_PERCENTAGE: {
        label: "0%"
    },

    FADER10_LABEL: {
        label: "LOAD"
    },
    FADER10_STYLE: {
        style: buttonsAll['fader1']['style']
    },
    FADER10_VALUE: {
        value: 0
    },
    FADER10_PERCENTAGE: {
        label: "0%"
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

        case 'FADER1_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER1_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER1_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER1_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER1_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER1_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER1_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER1_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER1_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER1_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER1_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER1_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER2_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER2_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER2_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER2_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER2_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER2_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER2_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER2_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER2_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER2_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER2_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER2_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER3_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER3_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER3_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER3_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER3_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER3_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER3_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER3_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER3_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER3_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER3_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER3_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER4_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER4_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER4_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER4_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER4_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER4_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER4_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER4_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER4_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER4_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER4_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER4_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER5_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER5_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER5_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER5_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER5_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER5_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER5_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER5_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER5_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER5_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER5_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER5_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER6_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER6_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER6_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER6_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER6_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER6_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER6_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER6_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER6_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER6_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER6_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER6_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER7_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER7_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER7_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER7_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER7_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER7_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER7_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER7_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER7_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER7_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER7_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER7_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER8_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER8_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER8_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER8_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER8_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER8_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER8_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER8_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER8_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER8_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER8_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER8_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER9_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER9_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER9_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER9_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER9_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER9_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER9_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER9_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER9_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER9_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER9_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER9_PERCENTAGE,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER10_LABEL':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER10_LABEL: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER10_LABEL,
                    label: action.payload.label
                }
            }

            break;
        case 'FADER10_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER10_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER10_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'FADER10_VALUE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER10_VALUE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER10_VALUE,
                    value: action.payload.value
                }
            }

            break;
        case 'FADER10_PERCENTAGE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                FADER10_PERCENTAGE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.FADER10_PERCENTAGE,
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
