import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListNames, setInputValue, setFilteredListOfNames, setCurrentFocus } from '../redux/actions/userAction';

export const SearchField = () => {
    const dispatch = useDispatch();
    const { fullList, inputValue, filteredList, currentFocus } = useSelector((state) => state.appData);

    useEffect(() => {
        window.addEventListener('mousedown', () => setTimeout(clearData, 100));
        return () => {
            window.removeEventListener('mousedown', () => setTimeout(clearData, 100));
        };
    });

    const clearData = () => {
        dispatch(setFilteredListOfNames([]));
        dispatch(setCurrentFocus(-1));
    };

    const focusHandler = () => {
        if (fullList.length) return;
        dispatch(setListNames());
    };

    const filterHandler = (text) => {
        if (text) {
            const newList = fullList
                .map((item) => item.username)
                .filter((item) => item.toUpperCase().startsWith(text.toUpperCase()))
                .sort();
            dispatch(setFilteredListOfNames(newList));
        } else {
            clearData();
        }
        dispatch(setCurrentFocus(-1));
        dispatch(setInputValue(text));
    };

    const keyHandler = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentFocus < filteredList.length - 1) {
                dispatch(setCurrentFocus(currentFocus + 1));
            }
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentFocus > 0) {
                dispatch(setCurrentFocus(currentFocus - 1));
            }
        }

        if (e.key === 'Enter') {
            if (filteredList.length) {
                const elem = document.getElementById('true');
                dispatch(setInputValue(elem.textContent));
                clearData();
            }
        }
    };

    return (
        <div onKeyDown={(e) => keyHandler(e)} className="container">
            <input
                placeholder="Search user name"
                type="text"
                onFocus={focusHandler}
                onChange={(e) => filterHandler(e.currentTarget.value)}
                value={inputValue}
            ></input>

            {filteredList.length ? (
                <div className="AutoCompeteList">
                    {filteredList.map((item, ind) => {
                        const focusStyle = currentFocus === ind ? 'isActive' : 'item';
                        const currentBlock = currentFocus === ind ? 'true' : 'false';

                        return (
                            <div
                                id={currentBlock}
                                key={ind}
                                onClick={(e) => {
                                    dispatch(setInputValue(item));
                                }}
                                className={focusStyle}
                            >
                                <div>
                                    <span>{item.slice(0, inputValue.length)}</span>
                                    {item.slice(inputValue.length)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};
