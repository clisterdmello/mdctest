
import axios from 'axios';
import * as Actions from './actions';
const apiURL = 'https://jsonplaceholder.typicode.com/users';

export const fetchDefaultContacts = () => {
    return dispatch => {
        dispatch(loadContactStarted());
        axios
            .get(apiURL)
            .then((response) => {
                dispatch(loadUserSuccess(response.data));
            })
            .catch(() => {
                dispatch(loadUserFailure());
            })
    };
};


const loadUserSuccess = (defaultContacts) => {
    return {
        type: Actions.LOAD_INITIAL_CONTACTS,
        payload: defaultContacts
    }
}

const loadUserFailure = () => {
    return {
        type: Actions.NOTIFY_FAILURE,
        payload: {
            type: 'initialLoadContact',
            message: 'failed to load contacts'
        }
    }
}

export const addNewContact = (newContact) => {
    return {
        type: Actions.ADD_NEW_CONTACT,
        payload: newContact
    }
}

export const initiateSearch = (searchTerm) => {
    return {
        type: Actions.SEARCH_CONTACTS,
        payload: searchTerm
    }
}
export const deleteContact = (contact) => {
    return {
        type: Actions.DELETE_CONTACT,
        payload: contact
    }
}

const loadContactStarted = () => {
    return {
        type: Actions.START_LOADING,
        payload: {
            isLoading: true
        }
    }
}

