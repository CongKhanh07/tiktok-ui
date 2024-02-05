// import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// import file
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const { first_name, last_name, full_name, nickname, avatar, tick } = { ...data };

    return (
        <Link className={cx('wrapper')} to={`/:${nickname}`}>
            <Image className={cx('avatar')} alt={full_name} src={avatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{full_name}</span>
                    {tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('user-name')}>{nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
