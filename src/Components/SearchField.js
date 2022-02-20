import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListNames, setInputValue, setFilteredListOfNames } from '../redux/actions/userAction';

export const SearchField = () => {
    const dispatch = useDispatch();
    const { fullList, inputValue, filteredList } = useSelector((state) => state.appData);

    const focusHandler = () => {
        if (fullList.length) return;
        dispatch(setListNames());
    };

    const inputHandler = (text) => {
        if (text) {
            const newList = fullList
                .map((item) => item.name)
                .filter((item) => item.toUpperCase().startsWith(text.toUpperCase()))
                .sort();
            dispatch(setFilteredListOfNames(newList));
        } else {
            dispatch(setFilteredListOfNames([]));
        }
        dispatch(setInputValue(text));
    };

    return (
        <div className="container">
            <input
                placeholder="Search user name"
                type="text"
                onFocus={focusHandler}
                onChange={(e) => inputHandler(e.currentTarget.value)}
                onBlur={() => setTimeout(() => dispatch(setFilteredListOfNames([])), 100)}
                value={inputValue}
            ></input>

            {filteredList.length ? (
                <div className="AutoCompeteList">
                    {filteredList.map((item, ind) => (
                        <div key={ind} onClick={(e) => dispatch(setInputValue(item))} className="item">
                            <div>
                                <span>{item.slice(0, inputValue.length)}</span>
                                {item.slice(inputValue.length)}
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
