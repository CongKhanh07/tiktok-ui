// import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import TippyTooltip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// import file
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import pathName from '~/config/pathName';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    id: '1',
                    title: 'English',
                },
                {
                    id: '2',
                    title: 'Tiếng Việt',
                },
                {
                    id: '3',
                    title: 'France',
                },
                {
                    id: '4',
                    title: 'English',
                },
                {
                    id: '5',
                    title: 'Tiếng Việt',
                },
                {
                    id: '6',
                    title: 'France',
                },
                {
                    id: '7',
                    title: 'English',
                },
                {
                    id: '8',
                    title: 'Tiếng Việt',
                },
                {
                    id: '9',
                    title: 'France',
                },
                {
                    id: '10',
                    title: 'France',
                },
                {
                    id: '11',
                    title: 'English',
                },
                {
                    id: '12',
                    title: 'Tiếng Việt',
                },
                {
                    id: '13',
                    title: 'France',
                },
                {
                    id: '10',
                    title: 'France',
                },
                {
                    id: '11',
                    title: 'English',
                },
                {
                    id: '12',
                    title: 'Tiếng Việt',
                },
                {
                    id: '13',
                    title: 'France',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    const imageRef = useRef();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* LOGO */}
                <Link className={cx('logo')} to={pathName.home}>
                    <img src={images.logo} alt="TikTok"></img>
                </Link>

                {/* SEARCH */}
                <Search />

                {/* ACTIONS */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <TippyTooltip delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </TippyTooltip>

                            <TippyTooltip delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </TippyTooltip>

                            <TippyTooltip delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </TippyTooltip>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    {/* MENU BTN*/}
                    {currentUser ? (
                        <Menu items={USER_MENU}>
                            <Image
                                //customFallback={images.f8Logo}
                                ref={imageRef}
                                className={cx('avatar')}
                                src={images.avatar}
                                alt="Nguyen Cong Khanh"
                            />
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEMS}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
