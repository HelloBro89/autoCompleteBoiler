import { getUserNames } from '../../requests/requests';

export const SET_ALL_NAMES = 'SET_ALL_NAMES';
export const SET_FILTERED_LIST_OF_NAMES = 'SET_FILTERED_LIST_OF_NAMES';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export function receiveReq(names) {
    return {
        type: SET_ALL_NAMES,
        payload: names,
    };
}

export function setListNames() {
    return async (dispatch) => {
        try {
            const res = await getUserNames();
            dispatch(receiveReq(res.data));
        } catch (error) {
            console.log(error);
        }
    };
}

export function setFilteredListOfNames(filterdNames) {
    return {
        type: SET_FILTERED_LIST_OF_NAMES,
        payload: filterdNames,
    };
}

export function setInputValue(text) {
    return {
        type: SET_INPUT_VALUE,
        payload: text,
    };
}
