// import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { useState, useRef, useEffect } from 'react';

// import file
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/request'; //export all [] to object request

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const useDebounceValue = useDebounce(searchValue, 800);

    //HandleChange Input
    function handleChangeInput(e) {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    }

    useEffect(() => {
        //if don't have searchValue
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        //if have searchValue
        //Use Promise
        // request
        //     .get('users/search', {
        //         params: {
        //             q: useDebounceValue,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        //Use Async
        const fetchApi = async () => {
            try {
                const res = await request.get('users/search', {
                    params: {
                        q: useDebounceValue,
                        type: 'less',
                    },
                });
                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [useDebounceValue]);

    return (
        <div>
            <Tippy
                interactive
                visible={searchResult.length > 0 && showResult}
                render={(attrs) => (
                    //Components
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <label>
                                <h4 className={cx('search-title')}>Accounts</h4>
                            </label>
                            {searchResult.length > 0 &&
                                Array.from(searchResult).map((data) => {
                                    return <AccountItem key={data.id} data={data} />;
                                })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    setShowResult(false);
                }}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChangeInput}
                        onFocus={() => setShowResult(true)}
                        placeholder="Search accounts and videos"
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                                setSearchResult([]);
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
