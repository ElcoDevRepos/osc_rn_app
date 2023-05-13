import buttonsAll from '../../helpers/buttonsAll';

// ACTIONS
// Actions are functions that return an object with a type property and a payload
// I've skipped all the Actions - so calling hooks needs use specifiy the type and payload'

// INITIAL STATE

const initialState = {

    LAYOUT_SAVE_VIEW : {
        bool: false
    },
    LAYOUT_LABEL_VIEW : {
        bool: false
    },
    LAYOUT_DELETE_VIEW : {
        bool: false
    },
    // FOCUS PAGE
    FOCUS_LAY_1: {
        label: buttonsAll['focus_lay_1']['label'],
        style: buttonsAll['focus_lay_1']['style'],
        active: false
    },
    FOCUS_LAY_2: {
        label: buttonsAll['focus_lay_2']['label'],
        style: buttonsAll['focus_lay_2']['style'],
        active: false
    },
    FOCUS_LAY_3: {
        label: buttonsAll['focus_lay_3']['label'],
        style: buttonsAll['focus_lay_3']['style'],
        active: false
    },
    FOCUS_LAY_4: {
        label: buttonsAll['focus_lay_4']['label'],
        style: buttonsAll['focus_lay_4']['style'],
        active: false
    },
    FOCUS_LAY_5: {
        label: buttonsAll['focus_lay_5']['label'],
        style: buttonsAll['focus_lay_5']['style'],
        active: false
    },
    FOCUS_LAY_6: {
        label: buttonsAll['focus_lay_6']['label'],
        style: buttonsAll['focus_lay_6']['style'],
        active: false
    },
    FOCUS_LAY_7: {
        label: buttonsAll['focus_lay_7']['label'],
        style: buttonsAll['focus_lay_7']['style'],
        active: false
    },
    FOCUS_LAY_8: {
        label: buttonsAll['focus_lay_8']['label'],
        style: buttonsAll['focus_lay_8']['style'],
        active: false
    },
    FOCUS_LAY_9: {
        label: buttonsAll['focus_lay_9']['label'],
        style: buttonsAll['focus_lay_9']['style'],
        active: false
    },
    FOCUS_LAY_10: {
        label: buttonsAll['focus_lay_10']['label'],
        style: buttonsAll['focus_lay_10']['style'],
        active: false
    },


    // ENCODERS
    ENC_LAY_1: {
        label: buttonsAll['enc_lay_1']['label'],
        style: buttonsAll['enc_lay_1']['style'],
        active: false
    },
    ENC_LAY_2: {
        label: buttonsAll['enc_lay_2']['label'],
        style: buttonsAll['enc_lay_2']['style'],
        active: false
    },
    ENC_LAY_3: {
        label: buttonsAll['enc_lay_3']['label'],
        style: buttonsAll['enc_lay_3']['style'],
        active: false
    },
    ENC_LAY_4: {
        label: buttonsAll['enc_lay_4']['label'],
        style: buttonsAll['enc_lay_4']['style'],
        active: false
    },
    ENC_LAY_5: {
        label: buttonsAll['enc_lay_5']['label'],
        style: buttonsAll['enc_lay_5']['style'],
        active: false
    },
    ENC_LAY_6: {
        label: buttonsAll['enc_lay_6']['label'],
        style: buttonsAll['enc_lay_6']['style'],
        active: false
    },
    ENC_LAY_7: {
        label: buttonsAll['enc_lay_7']['label'],
        style: buttonsAll['enc_lay_7']['style'],
        active: false
    },
    ENC_LAY_8: {
        label: buttonsAll['enc_lay_8']['label'],
        style: buttonsAll['enc_lay_8']['style'],
        active: false
    },
    ENC_LAY_9: {
        label: buttonsAll['enc_lay_9']['label'],
        style: buttonsAll['enc_lay_9']['style'],
        active: false
    },
    ENC_LAY_10: {
        label: buttonsAll['enc_lay_10']['label'],
        style: buttonsAll['enc_lay_10']['style'],
        active: false
    },

    // DIRECT SELECTS
    DS_LAY_1: {
        label: buttonsAll['ds_lay_1']['label'],
        style: buttonsAll['ds_lay_1']['style'],
        active: false
    },
    DS_LAY_2: {
        label: buttonsAll['ds_lay_2']['label'],
        style: buttonsAll['ds_lay_2']['style'],
        active: false
    },
    DS_LAY_3: {
        label: buttonsAll['ds_lay_3']['label'],
        style: buttonsAll['ds_lay_3']['style'],
        active: false
    },
    DS_LAY_4: {
        label: buttonsAll['ds_lay_4']['label'],
        style: buttonsAll['ds_lay_4']['style'],
        active: false
    },
    DS_LAY_5: {
        label: buttonsAll['ds_lay_5']['label'],
        style: buttonsAll['ds_lay_5']['style'],
        active: false
    },
    DS_LAY_6: {
        label: buttonsAll['ds_lay_6']['label'],
        style: buttonsAll['ds_lay_6']['style'],
        active: false
    },
    DS_LAY_7: {
        label: buttonsAll['ds_lay_7']['label'],
        style: buttonsAll['ds_lay_7']['style'],
        active: false
    },
    DS_LAY_8: {
        label: buttonsAll['ds_lay_8']['label'],
        style: buttonsAll['ds_lay_8']['style'],
        active: false
    },
    DS_LAY_9: {
        label: buttonsAll['ds_lay_9']['label'],
        style: buttonsAll['ds_lay_9']['style'],
        active: false
    },
    DS_LAY_10: {
        label: buttonsAll['ds_lay_10']['label'],
        style: buttonsAll['ds_lay_10']['style'],
        active: false
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

        case 'LAYOUT_SAVE_VIEW':
            return {
                ...state,
                LAYOUT_SAVE_VIEW: {
                    bool: action.payload.bool
                }
            }

            break;

        case 'LAYOUT_LABEL_VIEW':
            return {
                ...state,
                LAYOUT_LABEL_VIEW: {
                    ...state.LAYOUT_LABEL_VIEW,
                    bool: action.payload.bool
                }
            }

            break;

        case 'LAYOUT_DELETE_VIEW':
            return {
                ...state,
                LAYOUT_DELETE_VIEW: {
                    ...state.LAYOUT_DELETE_VIEW,
                    bool: action.payload.bool
                }
            }

            break;

        case 'FOCUS_LAY_1':
            return {
                ...state,
                FOCUS_LAY_1: {
                    ...state.FOCUS_LAY_1,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_2':
            return {
                ...state,
                FOCUS_LAY_2: {
                    ...state.FOCUS_LAY_2,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_3':
            return {
                ...state,
                FOCUS_LAY_3: {
                    ...state.FOCUS_LAY_3,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_4':
            return {
                ...state,
                FOCUS_LAY_4: {
                    ...state.FOCUS_LAY_4,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_5':
            return {
                ...state,
                FOCUS_LAY_5: {
                    ...state.FOCUS_LAY_5,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_6':
            return {
                ...state,
                FOCUS_LAY_6: {
                    ...state.FOCUS_LAY_6,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_7':
            return {
                ...state,
                FOCUS_LAY_7: {
                    ...state.FOCUS_LAY_7,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_8':
            return {
                ...state,
                FOCUS_LAY_8: {
                    ...state.FOCUS_LAY_8,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_9':
            return {
                ...state,
                FOCUS_LAY_9: {
                    ...state.FOCUS_LAY_9,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'FOCUS_LAY_10':
            return {
                ...state,
                FOCUS_LAY_10: {
                    ...state.FOCUS_LAY_10,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_1':
            return {
                ...state,
                ENC_LAY_1: {
                    ...state.ENC_LAY_1,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_2':
            return {
                ...state,
                ENC_LAY_2: {
                    ...state.ENC_LAY_2,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_3':
            return {
                ...state,
                ENC_LAY_3: {
                    ...state.ENC_LAY_3,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_4':
            return {
                ...state,
                ENC_LAY_4: {
                    ...state.ENC_LAY_4,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_5':
            return {
                ...state,
                ENC_LAY_5: {
                    ...state.ENC_LAY_5,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_6':
            return {
                ...state,
                ENC_LAY_6: {
                    ...state.ENC_LAY_6,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_7':
            return {
                ...state,
                ENC_LAY_7: {
                    ...state.ENC_LAY_7,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_8':
            return {
                ...state,
                ENC_LAY_8: {
                    ...state.ENC_LAY_8,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_9':
            return {
                ...state,
                ENC_LAY_9: {
                    ...state.ENC_LAY_9,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'ENC_LAY_10':
            return {
                ...state,
                ENC_LAY_10: {
                    ...state.ENC_LAY_10,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_1':
            return {
                ...state,
                DS_LAY_1: {
                    ...state.DS_LAY_1,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_2':
            return {
                ...state,
                DS_LAY_2: {
                    ...state.DS_LAY_2,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_3':
            return {
                ...state,
                DS_LAY_3: {
                    ...state.DS_LAY_3,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_4':
            return {
                ...state,
                DS_LAY_4: {
                    ...state.DS_LAY_4,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_5':
            return {
                ...state,
                DS_LAY_5: {
                    ...state.DS_LAY_5,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_6':
            return {
                ...state,
                DS_LAY_6: {
                    ...state.DS_LAY_6,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_7':
            return {
                ...state,
                DS_LAY_7: {
                    ...state.DS_LAY_7,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_8':
            return {
                ...state,
                DS_LAY_8: {
                    ...state.DS_LAY_8,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_9':
            return {
                ...state,
                DS_LAY_9: {
                    ...state.DS_LAY_9,
                    label: action.payload.label,
                    
                }
            }

            break;

        case 'DS_LAY_10':
            return {
                ...state,
                DS_LAY_10: {
                    ...state.DS_LAY_10,
                    label: action.payload.label,
                    
                }
            }

            break;





        case 'FOCUS_LAY_1_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_1: {
                    ...state.FOCUS_LAY_1,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_2_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_2: {
                    ...state.FOCUS_LAY_2,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_3_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_3: {
                    ...state.FOCUS_LAY_3,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_4_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_4: {
                    ...state.FOCUS_LAY_4,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_5_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_5: {
                    ...state.FOCUS_LAY_5,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_6_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_6: {
                    ...state.FOCUS_LAY_6,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_7_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_7: {
                    ...state.FOCUS_LAY_7,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_8_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_8: {
                    ...state.FOCUS_LAY_8,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_9_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_9: {
                    ...state.FOCUS_LAY_9,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'FOCUS_LAY_10_ACTIVE':
            return {
                ...state,
                FOCUS_LAY_10: {
                    ...state.FOCUS_LAY_10,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_1_ACTIVE':
            return {
                ...state,
                ENC_LAY_1: {
                    ...state.ENC_LAY_1,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_2_ACTIVE':
            return {
                ...state,
                ENC_LAY_2: {
                    ...state.ENC_LAY_2,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_3_ACTIVE':
            return {
                ...state,
                ENC_LAY_3: {
                    ...state.ENC_LAY_3,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_4_ACTIVE':
            return {
                ...state,
                ENC_LAY_4: {
                    ...state.ENC_LAY_4,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_5_ACTIVE':
            return {
                ...state,
                ENC_LAY_5: {
                    ...state.ENC_LAY_5,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_6_ACTIVE':
            return {
                ...state,
                ENC_LAY_6: {
                    ...state.ENC_LAY_6,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_7_ACTIVE':
            return {
                ...state,
                ENC_LAY_7: {
                    ...state.ENC_LAY_7,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_8_ACTIVE':
            return {
                ...state,
                ENC_LAY_8: {
                    ...state.ENC_LAY_8,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_9_ACTIVE':
            return {
                ...state,
                ENC_LAY_9: {
                    ...state.ENC_LAY_9,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'ENC_LAY_10_ACTIVE':
            return {
                ...state,
                ENC_LAY_10: {
                    ...state.ENC_LAY_10,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_1_ACTIVE':
            return {
                ...state,
                DS_LAY_1: {
                    ...state.DS_LAY_1,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_2_ACTIVE':
            return {
                ...state,
                DS_LAY_2: {
                    ...state.DS_LAY_2,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_3_ACTIVE':
            return {
                ...state,
                DS_LAY_3: {
                    ...state.DS_LAY_3,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_4_ACTIVE':
            return {
                ...state,
                DS_LAY_4: {
                    ...state.DS_LAY_4,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_5_ACTIVE':
            return {
                ...state,
                DS_LAY_5: {
                    ...state.DS_LAY_5,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_6_ACTIVE':
            return {
                ...state,
                DS_LAY_6: {
                    ...state.DS_LAY_6,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_7_ACTIVE':
            return {
                ...state,
                DS_LAY_7: {
                    ...state.DS_LAY_7,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_8_ACTIVE':
            return {
                ...state,
                DS_LAY_8: {
                    ...state.DS_LAY_8,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_9_ACTIVE':
            return {
                ...state,
                DS_LAY_9: {
                    ...state.DS_LAY_9,
                    active: action.payload.active,
                    style: action.payload.style
                }
            }

            break;

        case 'DS_LAY_10_ACTIVE':
            return {
                ...state,
                DS_LAY_10: {
                    ...state.DS_LAY_10,                    
                    style: action.payload.style,
                    active: action.payload.active
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
