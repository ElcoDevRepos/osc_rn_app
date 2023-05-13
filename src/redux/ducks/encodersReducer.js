import buttonsAll from '../../helpers/buttonsAll';

// INITIAL STATE

/*
  "encoder1" :
    {
      "encoderID": 1,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    }
*/

const initialState = {
    // basically put the relevant parts of buttonsAll in here.
    ENCODER1_WHEEL: {
        label: ""
    },
    ENCODER1_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER1_MODE: {
        label: "C"
    },
    ENCODER1_VALUE: {
        label: "0"
    },
    ENCODER1_CENTERTEXT: {
        label: "-----"
    },
    ENCODER1_ENABLE: {
        bool: false
    },
    ENCODER2_WHEEL: {
        label: "none"
    },
    ENCODER2_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER2_MODE: {
        label: "C"
    },
    ENCODER2_VALUE: {
        label: "0"
    },
    ENCODER2_CENTERTEXT: {
        label: "-----"
    },
    ENCODER2_ENABLE: {
        bool: false
    },
    ENCODER3_WHEEL: {
        label: "none"
    },
    ENCODER3_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER3_MODE: {
        label: "C"
    },
    ENCODER3_VALUE: {
        label: "0"
    },
    ENCODER3_CENTERTEXT: {
        label: "-----"
    },
    ENCODER3_ENABLE: {
        bool: false

    },
    ENCODER4_WHEEL: {
        label: "none"
    },
    ENCODER4_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER4_MODE: {
        label: "C"
    },
    ENCODER4_VALUE: {
        label: "0"
    },
    ENCODER4_CENTERTEXT: {
        label: "-----"
    },
    ENCODER4_ENABLE: {
        bool: false
    },
    ENCODER5_WHEEL: {
        label: "none"
    },
    ENCODER5_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER5_MODE: {
        label: "C"
    },
    ENCODER5_VALUE: {
        label: "0"
    },
    ENCODER5_CENTERTEXT: {
        label: "-----"
    },
    ENCODER5_ENABLE: {
        bool: false
    },
    ENCODER6_WHEEL: {
        label: "none"
    },
    ENCODER6_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER6_MODE: {
        label: "C"
    },
    ENCODER6_VALUE: {
        label: "0"
    },
    ENCODER6_CENTERTEXT: {
        label: "-----"
    },
    ENCODER6_ENABLE: {
        bool: false
    },
    ENCODER7_WHEEL: {
        label: "none"
    },
    ENCODER7_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER7_MODE: {
        label: "C"
    },
    ENCODER7_VALUE: {
        label: "0"
    },
    ENCODER7_CENTERTEXT: {
        label: "-----"
    },
    ENCODER7_ENABLE: {
        bool: false
    },
    ENCODER8_WHEEL: {
        label: "none"
    },
    ENCODER8_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER8_MODE: {
        label: "C"
    },
    ENCODER8_VALUE: {
        label: "0"

    },
    ENCODER8_CENTERTEXT: {
        label: "-----"
    },
    ENCODER8_ENABLE: {
        bool: false

    },
    ENCODER9_WHEEL: {
        label: "none"
    },
    ENCODER9_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER9_MODE: {
        label: "C"
    },
    ENCODER9_VALUE: {
        label: "0"
    },
    ENCODER9_CENTERTEXT: {
        label: "Intens"
    },
    ENCODER9_ENABLE: {
        bool: false
    },
    ENCODER10_WHEEL: {
        label: "none"
    },
    ENCODER10_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER10_MODE: {
        label: "C"
    },
    ENCODER10_VALUE: {
        label: "0"
    },
    ENCODER10_CENTERTEXT: {
        label: "Zoom"
    },
    ENCODER10_ENABLE: {
        bool: false
    },
    ENCODER11_WHEEL: {
        label: "none"
    },
    ENCODER11_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER11_MODE: {
        label: "C"
    },
    ENCODER11_VALUE: {
        label: "0"
    },
    ENCODER11_CENTERTEXT: {
        label: "Pan"
    },
    ENCODER11_ENABLE: {
        bool: false
    },
    ENCODER12_WHEEL: {
        label: "none"
    },
    ENCODER12_ADDRESS: {
        label: "/eos/active/wheel/",
        incValue: 8,
        decValue: -8,
    },
    ENCODER12_MODE: {
        label: "C"
    },
    ENCODER12_VALUE: {
        label: "0"
    },
    ENCODER12_CENTERTEXT: {
        label: "Tilt"
    },
    ENCODER12_ENABLE: {
        bool: false
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

        case 'ENCODER1_WHEEL':
            return {
                ...state,
                ENCODER1_WHEEL: {
                    ...state.ENCODER1_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER1_ADDRESS':
            return {
                ...state,
                ENCODER1_ADDRESS: {
                    ...state.ENCODER1_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER1_MODE':
            return {
                ...state,
                ENCODER1_MODE: {
                    ...state.ENCODER1_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER1_VALUE':
            return {
                ...state,
                ENCODER1_VALUE: {
                    ...state.ENCODER1_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER1_CENTERTEXT':
            return {
                ...state,
                ENCODER1_CENTERTEXT: {
                    ...state.ENCODER1_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER1_ENABLE':
            return {  
                ...state,
                ENCODER1_ENABLE: {
                    ...state.ENCODER1_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER2_WHEEL':
            return {
                ...state,
                ENCODER2_WHEEL: {
                    ...state.ENCODER2_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER2_ADDRESS':
            return {
                ...state,
                ENCODER2_ADDRESS: {
                    ...state.ENCODER2_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER2_MODE':
            return {
                ...state,
                ENCODER2_MODE: {
                    ...state.ENCODER2_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER2_VALUE':
            return {
                ...state,
                ENCODER2_VALUE: {
                    ...state.ENCODER2_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER2_CENTERTEXT':
            return {
                ...state,
                ENCODER2_CENTERTEXT: {
                    ...state.ENCODER2_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER2_ENABLE':
            return {
                ...state,
                ENCODER2_ENABLE: {
                    ...state.ENCODER2_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////


        case 'ENCODER3_WHEEL':
            return {
                ...state,
                ENCODER3_WHEEL: {
                    ...state.ENCODER3_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER3_ADDRESS':
            return {
                ...state,
                ENCODER3_ADDRESS: {
                    ...state.ENCODER3_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER3_MODE':
            return {
                ...state,
                ENCODER3_MODE: {
                    ...state.ENCODER3_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER3_VALUE':
            return {
                ...state,
                ENCODER3_VALUE: {
                    ...state.ENCODER3_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER3_CENTERTEXT':
            return {
                ...state,
                ENCODER3_CENTERTEXT: {
                    ...state.ENCODER3_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER3_ENABLE':
            return {
                ...state,
                ENCODER3_ENABLE: {
                    ...state.ENCODER3_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////


        case 'ENCODER4_WHEEL':
            return {
                ...state,
                ENCODER4_WHEEL: {
                    ...state.ENCODER4_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER4_ADDRESS':
            return {
                ...state,
                ENCODER4_ADDRESS: {
                    ...state.ENCODER4_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;
        case 'ENCODER4_MODE':
            return {
                ...state,
                ENCODER4_MODE: {
                    ...state.ENCODER4_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER4_VALUE':
            return {
                ...state,
                ENCODER4_VALUE: {
                    ...state.ENCODER4_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER4_CENTERTEXT':
            return {
                ...state,
                ENCODER4_CENTERTEXT: {
                    ...state.ENCODER4_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER4_ENABLE':
            return {
                ...state,
                ENCODER4_ENABLE: {
                    ...state.ENCODER4_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////


        case 'ENCODER5_WHEEL':
            return {
                ...state,
                ENCODER5_WHEEL: {
                    ...state.ENCODER5_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER5_ADDRESS':
            return {
                ...state,
                ENCODER5_ADDRESS: {
                    ...state.ENCODER5_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER5_MODE':
            return {
                ...state,
                ENCODER5_MODE: {
                    ...state.ENCODER5_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER5_VALUE':
            return {
                ...state,
                ENCODER5_VALUE: {
                    ...state.ENCODER5_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER5_CENTERTEXT':
            return {
                ...state,
                ENCODER5_CENTERTEXT: {
                    ...state.ENCODER5_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER5_ENABLE':
            return {
                ...state,
                ENCODER5_ENABLE: {
                    ...state.ENCODER5_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER6_WHEEL':
            return {
                ...state,
                ENCODER6_WHEEL: {
                    ...state.ENCODER6_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER6_ADDRESS':
            return {
                ...state,
                ENCODER6_ADDRESS: {
                    ...state.ENCODER6_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER6_MODE':
            return {
                ...state,
                ENCODER6_MODE: {
                    ...state.ENCODER6_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER6_VALUE':
            return {
                ...state,
                ENCODER6_VALUE: {
                    ...state.ENCODER6_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER6_CENTERTEXT':
            return {
                ...state,
                ENCODER6_CENTERTEXT: {
                    ...state.ENCODER6_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER6_ENABLE':
            return {
                ...state,
                ENCODER6_ENABLE: {
                    ...state.ENCODER6_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER7_WHEEL':
            return {
                ...state,
                ENCODER7_WHEEL: {
                    ...state.ENCODER7_WHEEL,
                    label: action.payload.label
                }
            }

        case 'ENCODER7_ADDRESS':
            return {
                ...state,
                ENCODER7_ADDRESS: {
                    ...state.ENCODER7_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

            break;

        case 'ENCODER7_MODE':
            return {
                ...state,
                ENCODER7_MODE: {
                    ...state.ENCODER7_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER7_VALUE':
            return {
                ...state,
                ENCODER7_VALUE: {
                    ...state.ENCODER7_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER7_CENTERTEXT':
            return {
                ...state,
                ENCODER7_CENTERTEXT: {
                    ...state.ENCODER7_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER7_ENABLE':
            return {
                ...state,
                ENCODER7_ENABLE: {
                    ...state.ENCODER7_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER8_WHEEL':
            return {
                ...state,
                ENCODER8_WHEEL: {
                    ...state.ENCODER8_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER8_ADDRESS':
            return {
                ...state,
                ENCODER8_ADDRESS: {
                    ...state.ENCODER8_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER8_MODE':
            return {
                ...state,
                ENCODER8_MODE: {
                    ...state.ENCODER8_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER8_VALUE':
            return {
                ...state,
                ENCODER8_VALUE: {
                    ...state.ENCODER8_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER8_CENTERTEXT':
            return {
                ...state,
                ENCODER8_CENTERTEXT: {
                    ...state.ENCODER8_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER8_ENABLE':
            return {
                ...state,
                ENCODER8_ENABLE: {
                    ...state.ENCODER8_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER9_WHEEL':
            return {
                ...state,
                ENCODER9_WHEEL: {
                    ...state.ENCODER9_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER9_ADDRESS':
            return {
                ...state,
                ENCODER9_ADDRESS: {
                    //...state.ENCODER9_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER9_MODE':
            return {
                ...state,
                ENCODER9_MODE: {
                    ...state.ENCODER9_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER9_VALUE':
            return {
                ...state,
                ENCODER9_VALUE: {
                    ...state.ENCODER9_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER9_CENTERTEXT':
            return {
                ...state,
                ENCODER9_CENTERTEXT: {
                    ...state.ENCODER9_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER9_ENABLE':
            return {
                ...state,
                ENCODER9_ENABLE: {
                    ...state.ENCODER9_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER10_WHEEL':
            return {
                ...state,
                ENCODER10_WHEEL: {
                    ...state.ENCODER10_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER10_ADDRESS':
            return {
                ...state,
                ENCODER10_ADDRESS: {
                    ...state.ENCODER10_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER10_MODE':
            return {
                ...state,
                ENCODER10_MODE: {
                    ...state.ENCODER10_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER10_VALUE':
            return {
                ...state,
                ENCODER10_VALUE: {
                    ...state.ENCODER10_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER10_CENTERTEXT':
            return {
                ...state,
                ENCODER10_CENTERTEXT: {
                    ...state.ENCODER10_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER10_ENABLE':
            return {
                ...state,
                ENCODER10_ENABLE: {
                    ...state.ENCODER10_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER11_WHEEL':
            return {
                ...state,
                ENCODER11_WHEEL: {
                    ...state.ENCODER11_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER11_ADDRESS':
            return {
                ...state,
                ENCODER11_ADDRESS: {
                    ...state.ENCODER11_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER11_MODE':
            return {
                ...state,
                ENCODER11_MODE: {
                    ...state.ENCODER11_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER11_VALUE':
            return {
                ...state,
                ENCODER11_VALUE: {
                    ...state.ENCODER11_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER11_CENTERTEXT':
            return {
                ...state,
                ENCODER11_CENTERTEXT: {
                    ...state.ENCODER11_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER11_ENABLE':
            return {
                ...state,
                ENCODER11_ENABLE: {
                    ...state.ENCODER11_ENABLE,
                    bool: action.payload.bool
                }
            }

            break;

// //////////////// ENCODER //////////////////

        case 'ENCODER12_WHEEL':
            return {
                ...state,
                ENCODER12_WHEEL: {
                    ...state.ENCODER12_WHEEL,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER12_ADDRESS':
            return {
                ...state,
                ENCODER12_ADDRESS: {
                    ...state.ENCODER12_ADDRESS,
                    label: action.payload.label,
                    incValue: action.payload.incValue,
                    decValue: action.payload.decValue
                }
            }

            break;

        case 'ENCODER12_MODE':
            return {
                ...state,
                ENCODER12_MODE: {
                    ...state.ENCODER12_MODE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER12_VALUE':
            return {
                ...state,
                ENCODER12_VALUE: {
                    ...state.ENCODER12_VALUE,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER12_CENTERTEXT':
            return {
                ...state,
                ENCODER12_CENTERTEXT: {
                    ...state.ENCODER12_CENTERTEXT,
                    label: action.payload.label
                }
            }

            break;

        case 'ENCODER12_ENABLE':
            return {
                ...state,
                ENCODER12_ENABLE: {
                    ...state.ENCODER12_ENABLE,
                    bool: action.payload.bool
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
