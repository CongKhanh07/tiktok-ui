// import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import file
import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar} alt="Khanh" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Công Khanh</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('user-name')}>khanhgtvt</span>
            </div>
        </div>
    );
}

export default AccountItem;
