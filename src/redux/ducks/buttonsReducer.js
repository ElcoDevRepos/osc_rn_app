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
    pageContainer: {
        style: "pageContainerLive"
    },
    showName: {
        label: "PLEASE CONNECT TO EOS",
        style: "showNameText_Alert"
    },
    oscLog: {
        label: "OSC LOG"
    },
    commandLine: {
        label: buttonsAll['commandLine']['label'],
        style: buttonsAll['commandLine']['style']
    },
    info_chan : {
        label: buttonsAll['info_chan']['label'],
        style: buttonsAll['info_chan']['style']
    },
    info_level: {
        label: buttonsAll['info_level']['label'],
        style: buttonsAll['info_level']['style']
    },
    info_patch: {
        label: buttonsAll['info_patch']['label'],
        style: buttonsAll['info_patch']['style']
    },
    info_notes: {
        label: buttonsAll['info_notes']['label'],
        style: buttonsAll['info_notes']['style']
    },
    softkey_1: {
        label: buttonsAll['softkey_1']['label']
    },
    softkey_2: {
        label: buttonsAll['softkey_2']['label']
    },
    softkey_3: {
        label: buttonsAll['softkey_3']['label']
    },
    softkey_4: {
        label: buttonsAll['softkey_4']['label']
    },
    softkey_5: {
        label: buttonsAll['softkey_5']['label']
    },
    softkey_6: {
        label: buttonsAll['softkey_6']['label']
    }
    };



// REDUCERS

// This is the reducer.  It provides the functions that will be called by the actions.
export default (state = initialState, action) => {

    // props will come in form {label: 'LIVE :', style: 'commandLine'}

    //console.log("THIS IS LABEL REDUCER");
    //console.log(state);

    //return  state;

    switch (action.type) {

        case 'pageContainer':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                pageContainer: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.pageContainer,
                    style: action.payload.style
                }
            }

            break;
        case 'oscLog':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                oscLog: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.oscLog,
                    label: action.payload.label
                }
            }

            break;

        case 'showName':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                showName: {
                    ...state.showName,
                    label: action.payload.label,
                    style: action.payload.style
                }
            }

            break;

        case 'commandLine':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                commandLine: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.commandLine,
                    label: action.payload.label
                }
            }

            break;
                    case 'COMMANDLINE_STYLE':
            // spread the state into it's parts and add the proper actions.'
            return {
                // COPY ALL THE STATES
                ...state,
                COMMANDLINE_STYLE: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.COMMANDLINE_STYLE,
                    style: action.payload.style
                }
            }

            break;
        case 'info_chan':
            return {
                // COPY ALL THE STATES
                ...state,
                info_chan: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_chan,
                    label: action.payload.label
                }
            }

            break;
        case 'info_chan_style':
            return {
                // COPY ALL THE STATES
                ...state,
                info_chan: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_chan,
                    style: action.payload.style
                }
            }

            break;
        case 'info_level':
            return {
                // COPY ALL THE STATES
                ...state,
                info_level: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_level,
                    label: action.payload.label
                }
            }

            break;
        case 'info_level_style':
            return {
                // COPY ALL THE STATES
                ...state,
                info_level: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_level,
                    style: action.payload.style
                }
            }

            break;
        case 'info_patch':
            return {
                // COPY ALL THE STATES
                ...state,
                info_patch: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_patch,
                    label: action.payload.label
                }
            }

            break;
        case 'info_patch_style':
            return {
                // COPY ALL THE STATES
                ...state,
                info_patch: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_patch,
                    style: action.payload.style
                }
            }

            break;
        case 'info_notes':
            return {
                // COPY ALL THE STATES
                ...state,
                info_notes: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_notes,
                    label: action.payload.label
                }
            }

            break;
        case 'info_notes_style':
            return {
                // COPY ALL THE STATES
                ...state,
                info_notes: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.info_notes,
                    style: action.payload.style
                }
            }

            break;
        case 'softkey_1':
            return {
                // COPY ALL THE STATES
                ...state,
                softkey_1: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.softkey_1,
                    label: action.payload.label
                }
            }

            break;
        case 'softkey_2':
            return {
                // COPY ALL THE STATES
                ...state,
                softkey_2: {
                    // COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.softkey_2,
                    label: action.payload.label
                }
            }

            break;
        case 'softkey_3':
            return {
// COPY ALL THE STATES
                ...state,
                softkey_3: {
// COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.softkey_3,
                    label: action.payload.label
                }
            }

            break;
        case 'softkey_4':
            return {
        // COPY ALL THE STATES
                ...state,
                softkey_4: {
// COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.softkey_4,
                    label: action.payload.label
                }
            }

            break;
        case 'softkey_5':
            return {
// COPY ALL THE STATES
                ...state,
                softkey_5: {
// COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.softkey_5,
                    label: action.payload.label
                }
            }

            break;
        case 'softkey_6':
            return {
// COPY ALL THE STATES
                ...state,
                softkey_6: {
// COPY ALL THE FIELDS IN COMMANDLINE
                    ...state.softkey_6,
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
