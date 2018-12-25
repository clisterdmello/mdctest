
import * as Actions from '../actions/actions';
const initialState = {
    isLoading: false,
    contacts: [
    ],
    searchTerm: '',
    error: {
        type: '',
        message: ''
    }
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOAD_INITIAL_CONTACTS: {
            return {
                ...state,
                isLoading: false,
                contacts: [...action.payload],
            };
        }

        case Actions.START_LOADING: {
            return {
                ...state,
                ...action.payload
            }
        }
        case Actions.NOTIFY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case Actions.ADD_NEW_CONTACT: {
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        }
        case Actions.SEARCH_CONTACTS: {
            return {
                ...state, searchTerm: action.payload
            };
        }
        case Actions.DELETE_CONTACT: {
            return {
                ...state,
                contacts: [...state.contacts.filter(item => item !== action.payload)]
            };
        }
        default: {
            return { ...state }
        }

    }
}

export default contactsReducer;