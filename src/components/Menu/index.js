// import library
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional

import { useState } from 'react';

// import file
import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

//TEST

function Menu({ children, items }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    for (let item of current.data) {
        if (item.hasOwnProperty('children')) {
            item.onClick = function () {
                setHistory((current) => [...current, { data: item.children.data, title: item.children.title }]);
            };
        } else {
            item.onClick = function () {
                console.log(`Cấp ${history.length - 1}`, item.title);
            };
        }
    }

    //Function render items
    const renderItems = (items) => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    //Function onBack
    const onBack = () => {
        setHistory((current) => current.slice(0, current.length - 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[10, 10]}
            hideOnClick={false}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && <Header title={current.title} onBack={onBack} />}
                        <div className={cx('menu-body')}>{renderItems(current.data)}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory([history[0]])}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
