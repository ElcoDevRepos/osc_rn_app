import buttonsAll from '../../helpers/buttonsAll';

// INITIAL STATE 

const initialState = {
    // basically put the relevant parts of buttonsAll in here.
    EDIT_ENABLED: {
        bool: false
    },
    EDIT_OPEN: {
        bool: false
    },
    MAIN_NAV: {
        bool: true
    },
    ENCODER_LAYOUT_NAV: {
        bool: false
    },
    FOCUS_LAYOUT_NAV: {
        bool: false
    },
    DS_LAYOUT_NAV: {
        bool: false
    },
    PLAYBACK_LAYOUT_NAV: {
        bool: false
    },
    };

// REDUCERS

export default (state = initialState, action) => {

    switch (action.type) {

        case 'EDIT_ENABLED':
            
            return {
                ...state,
                EDIT_ENABLED: {
                    ...state.EDIT_ENABLED,
                    bool: action.payload.bool
                }
            }

            break;
        case 'EDIT_OPEN':
            
            return {
                ...state,
                EDIT_OPEN: {
                    ...state.EDIT_OPEN,
                    bool: action.payload.bool
                }
            }

            break;

        case 'MAIN_NAV':
            
            return {
                ...state,
                MAIN_NAV: {
                    ...state.MAIN_NAV,
                    bool: action.payload.bool
                }
            }

            break;
        case 'ENCODER_LAYOUT_NAV':
            
            return {
                ...state,
                ENCODER_LAYOUT_NAV: {
                    ...state.ENCODER_LAYOUT_NAV,
                    bool: action.payload.bool
                }
            }

            break;

        case 'FOCUS_LAYOUT_NAV':
            
            return {
                ...state,
                FOCUS_LAYOUT_NAV: {
                    ...state.FOCUS_LAYOUT_NAV,
                    bool: action.payload.bool
                }
            }

            break;
        case 'DS_LAYOUT_NAV':
            
            return {
                ...state,
                DS_LAYOUT_NAV: {
                    ...state.DS_LAYOUT_NAV,
                    bool: action.payload.bool
                }
            }

            break;
        case 'PLAYBACK_LAYOUT_NAV':
            
            return {
                ...state,
                PLAYBACK_LAYOUT_NAV: {
                    ...state.PLAYBACK_LAYOUT_NAV,
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
