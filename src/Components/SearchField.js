import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListNames, setInputValue, setFilteredListOfNames } from '../redux/actions/userAction';

export const SearchField = () => {
    const dispatch = useDispatch();
    const { fullList, inputValue, filteredList } = useSelector((state) => state.users);

    const focusHandler = () => {
        if (fullList.length) return;
        dispatch(setListNames());
    };

    const inputHandler = (text) => {
        if (text) {
            const newList = fullList
                .map((item) => item.name)
                .filter((item) => text.toUpperCase() === item.slice(0, text.length).toUpperCase())
                .sort();
            dispatch(setFilteredListOfNames(newList));
        }
        dispatch(setInputValue(text));
    };

    return (
        <div className="container">
            <input
                placeholder="Search user name"
                type="text"
                onFocus={focusHandler}
                onChange={(event) => inputHandler(event.currentTarget.value)}
                onBlur={() => setTimeout(() => dispatch(setFilteredListOfNames([])), 100)}
                value={inputValue}
            ></input>

            {filteredList.length ? (
                <div className="AutoCompeteList">
                    {filteredList.map((item, ind) => (
                        <div key={ind} onClick={() => inputHandler(item)} className="item">
                            {item}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
