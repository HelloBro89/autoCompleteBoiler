import { SET_ALL_NAMES, SET_FILTERED_LIST_OF_NAMES, SET_INPUT_VALUE, SET_CURRENT_FOCUS } from '../actions/userAction';

const initialState = {
    fullList: [],
    filteredList: [],
    inputValue: '',
    currentFocus: -1,
};

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_NAMES:
            return { ...state, fullList: [...action.payload] };

        case SET_FILTERED_LIST_OF_NAMES:
            return { ...state, filteredList: [...action.payload] };

        case SET_INPUT_VALUE:
            return { ...state, inputValue: action.payload };

        case SET_CURRENT_FOCUS:
            return { ...state, currentFocus: action.payload };

        default:
            return state;
    }
}
export default articlesReducer;
