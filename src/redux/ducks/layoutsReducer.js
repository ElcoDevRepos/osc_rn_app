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
    // FOCUS PAGE
    FOCUS_LAY_1: {
        label: buttonsAll['focus_lay_1']['label']
    },
    FOCUS_LAY_2: {
        label: buttonsAll['focus_lay_2']['label']
    },
    FOCUS_LAY_3: {
        label: buttonsAll['focus_lay_3']['label']
    },
    FOCUS_LAY_4: {
        label: buttonsAll['focus_lay_4']['label']
    },
    FOCUS_LAY_5: {
        label: buttonsAll['focus_lay_5']['label']
    },
    FOCUS_LAY_6: {
        label: buttonsAll['focus_lay_6']['label']
    },
    FOCUS_LAY_7: {
        label: buttonsAll['focus_lay_7']['label']
    },
    FOCUS_LAY_8: {
        label: buttonsAll['focus_lay_8']['label']
    },
    FOCUS_LAY_9: {
        label: buttonsAll['focus_lay_9']['label']
    },
    FOCUS_LAY_10: {
        label: buttonsAll['focus_lay_10']['label']
    },


    // ENCODERS
    ENC_LAY_1: {
        label: buttonsAll['enc_lay_1']['label']
    },
    ENC_LAY_2: {
        label: buttonsAll['enc_lay_2']['label']
    },
    ENC_LAY_3: {
        label: buttonsAll['enc_lay_3']['label']
    },
    ENC_LAY_4: {
        label: buttonsAll['enc_lay_4']['label']
    },
    ENC_LAY_5: {
        label: buttonsAll['enc_lay_5']['label']
    },
    ENC_LAY_6: {
        label: buttonsAll['enc_lay_6']['label']
    },
    ENC_LAY_7: {
        label: buttonsAll['enc_lay_7']['label']
    },
    ENC_LAY_8: {
        label: buttonsAll['enc_lay_8']['label']
    },
    ENC_LAY_9: {
        label: buttonsAll['enc_lay_9']['label']
    },
    ENC_LAY_10: {
        label: buttonsAll['enc_lay_10']['label']
    },

    // DIRECT SELECTS
    DS_LAY_1: {
        label: buttonsAll['ds_lay_1']['label']
    },
    DS_LAY_2: {
        label: buttonsAll['ds_lay_2']['label']
    },
    DS_LAY_3: {
        label: buttonsAll['ds_lay_3']['label']
    },
    DS_LAY_4: {
        label: buttonsAll['ds_lay_4']['label']
    },
    DS_LAY_5: {
        label: buttonsAll['ds_lay_5']['label']
    },
    DS_LAY_6: {
        label: buttonsAll['ds_lay_6']['label']
    },
    DS_LAY_7: {
        label: buttonsAll['ds_lay_7']['label']
    },
    DS_LAY_8: {
        label: buttonsAll['ds_lay_8']['label']
    },
    DS_LAY_9: {
        label: buttonsAll['ds_lay_9']['label']
    },
    DS_LAY_10: {
        label: buttonsAll['ds_lay_10']['label']
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

        case 'FOCUS_LAY_1':
            return {
                ...state,
                FOCUS_LAY_1: {
                    ...state.FOCUS_LAY_1,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_2':
            return {
                ...state,
                FOCUS_LAY_2: {
                    ...state.FOCUS_LAY_2,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_3':
            return {
                ...state,
                FOCUS_LAY_3: {
                    ...state.FOCUS_LAY_3,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_4':
            return {
                ...state,
                FOCUS_LAY_4: {
                    ...state.FOCUS_LAY_4,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_5':
            return {
                ...state,
                FOCUS_LAY_5: {
                    ...state.FOCUS_LAY_5,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_6':
            return {
                ...state,
                FOCUS_LAY_6: {
                    ...state.FOCUS_LAY_6,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_7':
            return {
                ...state,
                FOCUS_LAY_7: {
                    ...state.FOCUS_LAY_7,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_8':
            return {
                ...state,
                FOCUS_LAY_8: {
                    ...state.FOCUS_LAY_8,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_9':
            return {
                ...state,
                FOCUS_LAY_9: {
                    ...state.FOCUS_LAY_9,
                    label: action.payload.label
                }
            }

            break;

        case 'FOCUS_LAY_10':
            return {
                ...state,
                FOCUS_LAY_10: {
                    ...state.FOCUS_LAY_10,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_1':
            return {
                ...state,
                ENC_LAY_1: {
                    ...state.ENC_LAY_1,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_2':
            return {
                ...state,
                ENC_LAY_2: {
                    ...state.ENC_LAY_2,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_3':
            return {
                ...state,
                ENC_LAY_3: {
                    ...state.ENC_LAY_3,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_4':
            return {
                ...state,
                ENC_LAY_4: {
                    ...state.ENC_LAY_4,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_5':
            return {
                ...state,
                ENC_LAY_5: {
                    ...state.ENC_LAY_5,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_6':
            return {
                ...state,
                ENC_LAY_6: {
                    ...state.ENC_LAY_6,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_7':
            return {
                ...state,
                ENC_LAY_7: {
                    ...state.ENC_LAY_7,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_8':
            return {
                ...state,
                ENC_LAY_8: {
                    ...state.ENC_LAY_8,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_9':
            return {
                ...state,
                ENC_LAY_9: {
                    ...state.ENC_LAY_9,
                    label: action.payload.label
                }
            }

            break;

        case 'ENC_LAY_10':
            return {
                ...state,
                ENC_LAY_10: {
                    ...state.ENC_LAY_10,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_1':
            return {
                ...state,
                DS_LAY_1: {
                    ...state.DS_LAY_1,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_2':
            return {
                ...state,
                DS_LAY_2: {
                    ...state.DS_LAY_2,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_3':
            return {
                ...state,
                DS_LAY_3: {
                    ...state.DS_LAY_3,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_4':
            return {
                ...state,
                DS_LAY_4: {
                    ...state.DS_LAY_4,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_5':
            return {
                ...state,
                DS_LAY_5: {
                    ...state.DS_LAY_5,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_6':
            return {
                ...state,
                DS_LAY_6: {
                    ...state.DS_LAY_6,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_7':
            return {
                ...state,
                DS_LAY_7: {
                    ...state.DS_LAY_7,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_8':
            return {
                ...state,
                DS_LAY_8: {
                    ...state.DS_LAY_8,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_9':
            return {
                ...state,
                DS_LAY_9: {
                    ...state.DS_LAY_9,
                    label: action.payload.label
                }
            }

            break;

        case 'DS_LAY_10':
            return {
                ...state,
                DS_LAY_10: {
                    ...state.DS_LAY_10,
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
