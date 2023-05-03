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
    ds_page: {
        style: buttonsAll['ds1_page']['style']
    },
    ds1_page: {
        style: buttonsAll['ds1_page']['style'],
        label: buttonsAll['ds1_page']['label']
    },
    ds1_up: {
        label: buttonsAll['ds1_up']['label']
    },
    ds1_down: {
        label: buttonsAll['ds1_down']['label']
    },
    ds1_select: {
        label: buttonsAll['ds1_select']['label']
    },
    ds1_request: {
        label: "REQUEST"
    },
    ds1_style: {
        style: buttonsAll['ds1_select']['style']
    },
    ds1_1: {
        label: buttonsAll['ds1_1']['label']
    },
    ds1_2: {
        label: buttonsAll['ds1_2']['label']
    },
    ds1_3: {
        label: buttonsAll['ds1_3']['label']
    },
    ds1_4: {
        label: buttonsAll['ds1_4']['label']
    },
    ds1_5: {
        label: buttonsAll['ds1_5']['label']
    },
    ds1_6: {
        label: buttonsAll['ds1_6']['label']
    },
    ds1_7: {
        label: buttonsAll['ds1_7']['label']
    },
    ds1_8: {
        label: buttonsAll['ds1_8']['label']
    },
    ds1_9: {
        label: buttonsAll['ds1_9']['label']
    },
    ds1_10: {
        label: buttonsAll['ds1_10']['label']
    },
    ds1_11: {
        label: buttonsAll['ds1_11']['label']
    },
    ds1_12: {
        label: buttonsAll['ds1_12']['label']
    },
    ds1_13: {
        label: buttonsAll['ds1_13']['label']
    },
    ds1_14: {
        label: buttonsAll['ds1_14']['label']
    },
    ds1_15: {
        label: buttonsAll['ds1_15']['label']
    },
    ds1_16: {
        label: buttonsAll['ds1_16']['label']
    },
    ds1_17: {
        label: buttonsAll['ds1_17']['label']
    },
    ds1_18: {
        label: buttonsAll['ds1_18']['label']
    },
    ds1_19: {
        label: buttonsAll['ds1_19']['label']
    },
    ds1_20: {
        label: buttonsAll['ds1_20']['label']
    },



    ds2_page: {
        style: buttonsAll['ds2_page']['style'],
        label: buttonsAll['ds2_page']['label']
    },
    ds2_up: {
        label: buttonsAll['ds2_up']['label']
    },
    ds2_down: {
        label: buttonsAll['ds2_down']['label']
    },
    ds2_select: {
        label: buttonsAll['ds2_select']['label']
    },
    ds2_request: {
        label: "REQUEST"
    },
    ds2_style: {
        style: buttonsAll['ds2_select']['style']
    },
    ds2_1: {
        label: buttonsAll['ds2_1']['label']
    },
    ds2_2: {
        label: buttonsAll['ds2_2']['label']
    },
    ds2_3: {
        label: buttonsAll['ds2_3']['label']
    },
    ds2_4: {
        label: buttonsAll['ds2_4']['label']
    },
    ds2_5: {
        label: buttonsAll['ds2_5']['label']
    },
    ds2_6: {
        label: buttonsAll['ds2_6']['label']
    },
    ds2_7: {
        label: buttonsAll['ds2_7']['label']
    },
    ds2_8: {
        label: buttonsAll['ds2_8']['label']
    },
    ds2_9: {
        label: buttonsAll['ds2_9']['label']
    },
    ds2_10: {
        label: buttonsAll['ds2_10']['label']
    },
    ds2_11: {
        label: buttonsAll['ds2_11']['label']
    },
    ds2_12: {
        label: buttonsAll['ds2_12']['label']
    },
    ds2_13: {
        label: buttonsAll['ds2_13']['label']
    },
    ds2_14: {
        label: buttonsAll['ds2_14']['label']
    },
    ds2_15: {
        label: buttonsAll['ds2_15']['label']
    },
    ds2_16: {
        label: buttonsAll['ds2_16']['label']
    },
    ds2_17: {
        label: buttonsAll['ds2_17']['label']
    },
    ds2_18: {
        label: buttonsAll['ds2_18']['label']
    },
    ds2_19: {
        label: buttonsAll['ds2_19']['label']
    },
    ds2_20: {
        label: buttonsAll['ds2_20']['label']
    },



    ds3_page: {
        style: buttonsAll['ds3_page']['style'],
        label: buttonsAll['ds3_page']['label']
    },
    ds3_up: {
        label: buttonsAll['ds3_up']['label']
    },
    ds3_down: {
        label: buttonsAll['ds3_down']['label']
    },
    ds3_select: {
        label: buttonsAll['ds3_select']['label']
    },
    ds3_request: {
        label: "REQUEST"
    },
    ds3_style: {
        style: buttonsAll['ds3_select']['style']
    },
    ds3_1: {
        label: buttonsAll['ds3_1']['label']
    },
    ds3_2: {
        label: buttonsAll['ds3_2']['label']
    },
    ds3_3: {
        label: buttonsAll['ds3_3']['label']
    },
    ds3_4: {
        label: buttonsAll['ds3_4']['label']
    },
    ds3_5: {
        label: buttonsAll['ds3_5']['label']
    },
    ds3_6: {
        label: buttonsAll['ds3_6']['label']
    },
    ds3_7: {
        label: buttonsAll['ds3_7']['label']
    },
    ds3_8: {
        label: buttonsAll['ds3_8']['label']
    },
    ds3_9: {
        label: buttonsAll['ds3_9']['label']
    },
    ds3_10: {
        label: buttonsAll['ds3_10']['label']
    },
    ds3_11: {
        label: buttonsAll['ds3_11']['label']
    },
    ds3_12: {
        label: buttonsAll['ds3_12']['label']
    },
    ds3_13: {
        label: buttonsAll['ds3_13']['label']
    },
    ds3_14: {
        label: buttonsAll['ds3_14']['label']
    },
    ds3_15: {
        label: buttonsAll['ds3_15']['label']
    },
    ds3_16: {
        label: buttonsAll['ds3_16']['label']
    },
    ds3_17: {
        label: buttonsAll['ds3_17']['label']
    },
    ds3_18: {
        label: buttonsAll['ds3_18']['label']
    },
    ds3_19: {
        label: buttonsAll['ds3_19']['label']
    },
    ds3_20: {
        label: buttonsAll['ds3_20']['label']
    },


    ds4_page: {
        style: buttonsAll['ds4_page']['style'],
        label: buttonsAll['ds4_page']['label']
    },
    ds4_up: {
        label: buttonsAll['ds4_up']['label']
    },
    ds4_down: {
        label: buttonsAll['ds4_down']['label']
    },
    ds4_select: {
        label: buttonsAll['ds4_select']['label']
    },
    ds4_request: {
        label: "REQUEST"
    },
    ds4_style: {
        style: buttonsAll['ds4_select']['style']
    },
    ds4_1: {
        label: buttonsAll['ds4_1']['label']
    },
    ds4_2: {
        label: buttonsAll['ds4_2']['label']
    },
    ds4_3: {
        label: buttonsAll['ds4_3']['label']
    },
    ds4_4: {
        label: buttonsAll['ds4_4']['label']
    },
    ds4_5: {
        label: buttonsAll['ds4_5']['label']
    },
    ds4_6: {
        label: buttonsAll['ds4_6']['label']
    },
    ds4_7: {
        label: buttonsAll['ds4_7']['label']
    },
    ds4_8: {
        label: buttonsAll['ds4_8']['label']
    },
    ds4_9: {
        label: buttonsAll['ds4_9']['label']
    },
    ds4_10: {
        label: buttonsAll['ds4_10']['label']
    },
    ds4_11: {
        label: buttonsAll['ds4_11']['label']
    },
    ds4_12: {
        label: buttonsAll['ds4_12']['label']
    },
    ds4_13: {
        label: buttonsAll['ds4_13']['label']
    },
    ds4_14: {
        label: buttonsAll['ds4_14']['label']
    },
    ds4_15: {
        label: buttonsAll['ds4_15']['label']
    },
    ds4_16: {
        label: buttonsAll['ds4_16']['label']
    },
    ds4_17: {
        label: buttonsAll['ds4_17']['label']
    },
    ds4_18: {
        label: buttonsAll['ds4_18']['label']
    },
    ds4_19: {
        label: buttonsAll['ds4_19']['label']
    },
    ds4_20: {
        label: buttonsAll['ds4_20']['label']
    },


    ds5_page: {
        style: buttonsAll['ds5_page']['style'],
        label: buttonsAll['ds5_page']['label']
    },
    ds5_up: {
        label: buttonsAll['ds5_up']['label']
    },
    ds5_down: {
        label: buttonsAll['ds5_down']['label']
    },
    ds5_select: {
        label: buttonsAll['ds5_select']['label']
    },
    ds5_request: {
        label: "REQUEST"
    },
    ds5_style: {
        style: buttonsAll['ds5_select']['style']
    },
    ds5_1: {
        label: buttonsAll['ds5_1']['label']
    },
    ds5_2: {
        label: buttonsAll['ds5_2']['label']
    },
    ds5_3: {
        label: buttonsAll['ds5_3']['label']
    },
    ds5_4: {
        label: buttonsAll['ds5_4']['label']
    },
    ds5_5: {
        label: buttonsAll['ds5_5']['label']
    },
    ds5_6: {
        label: buttonsAll['ds5_6']['label']
    },
    ds5_7: {
        label: buttonsAll['ds5_7']['label']
    },
    ds5_8: {
        label: buttonsAll['ds5_8']['label']
    },
    ds5_9: {
        label: buttonsAll['ds5_9']['label']
    },
    ds5_10: {
        label: buttonsAll['ds5_10']['label']
    },
    ds_Flexi: {
        label: buttonsAll['ds_Flexi']['label'],
        style: buttonsAll['ds_Flexi']['style']
    },

    };



// REDUCERS

// This is the reducer.  It provides the functions that will be called by the actions.
export default (state = initialState, action) => {

    switch (action.type) {

        case 'ds_Flexi':
            return {
                ...state,
                ds_Flexi: {
                    ...state.ds_Flexi,
                    style: action.payload.style,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_style':
            return {
                ...state,
                ds1_style: {
                    ...state.ds1_style,
                    style: action.payload.style
                }
            }

            break;

        case 'ds1_1':
            return {
                ...state,
                ds1_1: {
                    ...state.ds1_1,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_2':
            return {
                ...state,
                ds1_2: {
                    ...state.ds1_2,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_3':
            return {
                ...state,
                ds1_3: {
                    ...state.ds1_3,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_4':
            return {
                ...state,
                ds1_4: {
                    ...state.ds1_4,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_5':
            return {
                ...state,
                ds1_5: {
                    ...state.ds1_5,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_6':
            return {
                ...state,
                ds1_6: {
                    ...state.ds1_6,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_7':
            return {
                ...state,
                ds1_7: {
                    ...state.ds1_7,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_8':
            return {
                ...state,
                ds1_8: {
                    ...state.ds1_8,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_9':
            return {
                ...state,
                ds1_9: {
                    ...state.ds1_9,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_10':
            return {
                ...state,
                ds1_10: {
                    ...state.ds1_10,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_11':
            return {
                ...state,
                ds1_11: {
                    ...state.ds1_11,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_12':
            return {
                ...state,
                ds1_12: {
                    ...state.ds1_12,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_13':
            return {
                ...state,
                ds1_13: {
                    ...state.ds1_13,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_14':
            return {
                ...state,
                ds1_14: {
                    ...state.ds1_14,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_15':
            return {
                ...state,
                ds1_15: {
                    ...state.ds1_15,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_16':
            return {
                ...state,
                ds1_16: {
                    ...state.ds1_16,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_17':
            return {
                ...state,
                ds1_17: {
                    ...state.ds1_17,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_18':
            return {
                ...state,
                ds1_18: {
                    ...state.ds1_18,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_19':
            return {
                ...state,
                ds1_19: {
                    ...state.ds1_19,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_20':
            return {
                ...state,
                ds1_20: {
                    ...state.ds1_20,
                    label: action.payload.label
                }
            }

            break;
        case 'ds1_up':
            return {
                ...state,
                ds1_up: {
                    ...state.ds1_up,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_down':
            return {
                ...state,
                ds1_down: {
                    ...state.ds1_down,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_page':
            return {
                ...state,
                ds1_page: {
                    ...state.ds1_page,
                    label: action.payload.label
                }
            }

            break;

        case 'ds1_select':
            return {
                ...state,
                ds1_select: {
                    ...state.ds1_select,
                    label: action.payload.label
                }
            }

            break;
        case 'ds1_request':
            return {
                ...state,
                ds1_request: {
                    ...state.ds1_request,
                    label: action.payload.label
                }
            }

            break;



        case 'ds2_style':
            return {
                ...state,
                ds2_style: {
                    ...state.ds2_style,
                    style: action.payload.style
                }
            }

            break;
        case 'ds2_1':
            return {
                ...state,
                ds2_1: {
                    ...state.ds2_1,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_2':
            return {
                ...state,
                ds2_2: {
                    ...state.ds2_2,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_3':
            return {
                ...state,
                ds2_3: {
                    ...state.ds2_3,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_4':
            return {
                ...state,
                ds2_4: {
                    ...state.ds2_4,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_5':
            return {
                ...state,
                ds2_5: {
                    ...state.ds2_5,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_6':
            return {
                ...state,
                ds2_6: {
                    ...state.ds2_6,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_7':
            return {
                ...state,
                ds2_7: {
                    ...state.ds2_7,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_8':
            return {
                ...state,
                ds2_8: {
                    ...state.ds2_8,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_9':
            return {
                ...state,
                ds2_9: {
                    ...state.ds2_9,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_10':
            return {
                ...state,
                ds2_10: {
                    ...state.ds2_10,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_11':
            return {
                ...state,
                ds2_11: {
                    ...state.ds2_11,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_12':
            return {
                ...state,
                ds2_12: {
                    ...state.ds2_12,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_13':
            return {
                ...state,
                ds2_13: {
                    ...state.ds2_13,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_14':
            return {
                ...state,
                ds2_14: {
                    ...state.ds2_14,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_15':
            return {
                ...state,
                ds2_15: {
                    ...state.ds2_15,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_16':
            return {
                ...state,
                ds2_16: {
                    ...state.ds2_16,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_17':
            return {
                ...state,
                ds2_17: {
                    ...state.ds2_17,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_18':
            return {
                ...state,
                ds2_18: {
                    ...state.ds2_18,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_19':
            return {
                ...state,
                ds2_19: {
                    ...state.ds2_19,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_20':
            return {
                ...state,
                ds2_20: {
                    ...state.ds2_20,
                    label: action.payload.label
                }
            }

            break;
        case 'ds2_up':
            return {
                ...state,
                ds2_up: {
                    ...state.ds2_up,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_down':
            return {
                ...state,
                ds2_down: {
                    ...state.ds2_down,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_page':
            return {
                ...state,
                ds2_page: {
                    ...state.ds2_page,
                    label: action.payload.label
                }
            }

            break;

        case 'ds2_select':
            return {
                ...state,
                ds2_select: {
                    ...state.ds2_select,
                    label: action.payload.label
                }
            }

            break;
        case 'ds2_request':
            return {
                ...state,
                ds2_request: {
                    ...state.ds2_request,
                    label: action.payload.label
                }
            }

            break;



        case 'ds3_style':
            return {
                ...state,
                ds3_style: {
                    ...state.ds3_style,
                    style: action.payload.style
                }
            }

            break;
        case 'ds3_1':
            return {
                ...state,
                ds3_1: {
                    ...state.ds3_1,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_2':
            return {
                ...state,
                ds3_2: {
                    ...state.ds3_2,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_3':
            return {
                ...state,
                ds3_3: {
                    ...state.ds3_3,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_4':
            return {
                ...state,
                ds3_4: {
                    ...state.ds3_4,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_5':
            return {
                ...state,
                ds3_5: {
                    ...state.ds3_5,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_6':
            return {
                ...state,
                ds3_6: {
                    ...state.ds3_6,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_7':
            return {
                ...state,
                ds3_7: {
                    ...state.ds3_7,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_8':
            return {
                ...state,
                ds3_8: {
                    ...state.ds3_8,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_9':
            return {
                ...state,
                ds3_9: {
                    ...state.ds3_9,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_10':
            return {
                ...state,
                ds3_10: {
                    ...state.ds3_10,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_11':
            return {
                ...state,
                ds3_11: {
                    ...state.ds3_11,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_12':
            return {
                ...state,
                ds3_12: {
                    ...state.ds3_12,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_13':
            return {
                ...state,
                ds3_13: {
                    ...state.ds3_13,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_14':
            return {
                ...state,
                ds3_14: {
                    ...state.ds3_14,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_15':
            return {
                ...state,
                ds3_15: {
                    ...state.ds3_15,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_16':
            return {
                ...state,
                ds3_16: {
                    ...state.ds3_16,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_17':
            return {
                ...state,
                ds3_17: {
                    ...state.ds3_17,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_18':
            return {
                ...state,
                ds3_18: {
                    ...state.ds3_18,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_19':
            return {
                ...state,
                ds3_19: {
                    ...state.ds3_19,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_20':
            return {
                ...state,
                ds3_20: {
                    ...state.ds3_20,
                    label: action.payload.label
                }
            }

            break;
        case 'ds3_up':
            return {
                ...state,
                ds3_up: {
                    ...state.ds3_up,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_down':
            return {
                ...state,
                ds3_down: {
                    ...state.ds3_down,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_page':
            return {
                ...state,
                ds3_page: {
                    ...state.ds3_page,
                    label: action.payload.label
                }
            }

            break;

        case 'ds3_select':
            return {
                ...state,
                ds3_select: {
                    ...state.ds3_select,
                    label: action.payload.label
                }
            }

            break;
        case 'ds3_request':
            return {
                ...state,
                ds3_request: {
                    ...state.ds3_request,
                    label: action.payload.label
                }
            }

            break;



        case 'ds4_style':
            return {
                ...state,
                ds4_style: {
                    ...state.ds4_style,
                    style: action.payload.style
                }
            }

            break;
        case 'ds4_1':
            return {
                ...state,
                ds4_1: {
                    ...state.ds4_1,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_2':
            return {
                ...state,
                ds4_2: {
                    ...state.ds4_2,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_3':
            return {
                ...state,
                ds4_3: {
                    ...state.ds4_3,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_4':
            return {
                ...state,
                ds4_4: {
                    ...state.ds4_4,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_5':
            return {
                ...state,
                ds4_5: {
                    ...state.ds4_5,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_6':
            return {
                ...state,
                ds4_6: {
                    ...state.ds4_6,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_7':
            return {
                ...state,
                ds4_7: {
                    ...state.ds4_7,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_8':
            return {
                ...state,
                ds4_8: {
                    ...state.ds4_8,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_9':
            return {
                ...state,
                ds4_9: {
                    ...state.ds4_9,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_10':
            return {
                ...state,
                ds4_10: {
                    ...state.ds4_10,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_11':
            return {
                ...state,
                ds4_11: {
                    ...state.ds4_11,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_12':
            return {
                ...state,
                ds4_12: {
                    ...state.ds4_12,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_13':
            return {
                ...state,
                ds4_13: {
                    ...state.ds4_13,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_14':
            return {
                ...state,
                ds4_14: {
                    ...state.ds4_14,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_15':
            return {
                ...state,
                ds4_15: {
                    ...state.ds4_15,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_16':
            return {
                ...state,
                ds4_16: {
                    ...state.ds4_16,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_17':
            return {
                ...state,
                ds4_17: {
                    ...state.ds4_17,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_18':
            return {
                ...state,
                ds4_18: {
                    ...state.ds4_18,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_19':
            return {
                ...state,
                ds4_19: {
                    ...state.ds4_19,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_20':
            return {
                ...state,
                ds4_20: {
                    ...state.ds4_20,
                    label: action.payload.label
                }
            }

            break;
        case 'ds4_up':
            return {
                ...state,
                ds4_up: {
                    ...state.ds4_up,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_down':
            return {
                ...state,
                ds4_down: {
                    ...state.ds4_down,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_page':
            return {
                ...state,
                ds4_page: {
                    ...state.ds4_page,
                    label: action.payload.label
                }
            }

            break;

        case 'ds4_select':
            return {
                ...state,
                ds4_select: {
                    ...state.ds4_select,
                    label: action.payload.label
                }
            }

            break;
        case 'ds4_request':
            return {
                ...state,
                ds4_request: {
                    ...state.ds4_request,
                    label: action.payload.label
                }
            }

            break;


        case 'ds5_style':
            return {
                ...state,
                ds5_style: {
                    ...state.ds5_style,
                    style: action.payload.style
                }
            }

            break;
        case 'ds5_1':
            return {
                ...state,
                ds5_1: {
                    ...state.ds5_1,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_2':
            return {
                ...state,
                ds5_2: {
                    ...state.ds5_2,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_3':
            return {
                ...state,
                ds5_3: {
                    ...state.ds5_3,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_4':
            return {
                ...state,
                ds5_4: {
                    ...state.ds5_4,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_5':
            return {
                ...state,
                ds5_5: {
                    ...state.ds5_5,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_6':
            return {
                ...state,
                ds5_6: {
                    ...state.ds5_6,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_7':
            return {
                ...state,
                ds5_7: {
                    ...state.ds5_7,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_8':
            return {
                ...state,
                ds5_8: {
                    ...state.ds5_8,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_9':
            return {
                ...state,
                ds5_9: {
                    ...state.ds5_9,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_10':
            return {
                ...state,
                ds5_10: {
                    ...state.ds5_10,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_up':
            return {
                ...state,
                ds5_up: {
                    ...state.ds5_up,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_down':
            return {
                ...state,
                ds5_down: {
                    ...state.ds5_down,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_page':
            return {
                ...state,
                ds5_page: {
                    ...state.ds5_page,
                    label: action.payload.label
                }
            }

            break;

        case 'ds5_select':
            return {
                ...state,
                ds5_select: {
                    ...state.ds5_select,
                    label: action.payload.label
                }
            }

            break;
        case 'ds5_request':
            return {
                ...state,
                ds5_request: {
                    ...state.ds5_request,
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
