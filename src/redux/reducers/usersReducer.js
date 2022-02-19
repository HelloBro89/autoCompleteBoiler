import { SET_ALL_NAMES, SET_FILTERED_LIST_OF_NAMES, SET_INPUT_VALUE } from '../actions/userAction';

const initialState = {
    fullList: [
        // { id: 10, name: 'Pasha' },
        // { id: 10, name: 'Pasha' },
        // { id: 10, name: 'Pasha' },
        // { id: 10, name: 'Lucky' },
        // { id: 10, name: 'Lucky' },
    ],
    filteredList: [
        /* 'Pasha', 'Lucky', 'Vera', 'Pasha', 'Lucky', 'Vera' */
    ],
    inputValue: '',
};

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_NAMES:
            return { ...state, fullList: [...action.payload] };

        case SET_FILTERED_LIST_OF_NAMES:
            return { ...state, filteredList: [...action.payload] };

        case SET_INPUT_VALUE:
            return { ...state, inputValue: action.payload };

        default:
            return state;
    }
}
export default articlesReducer;
