// import library
import classNames from 'classnames/bind';
// import file
import style from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    const { icon, title, ...props } = { ...data };

    const classes = cx('menu-item', {
        separate: props.separate,
    });

    return (
        <Button className={classes} leftIcon={icon} to={props.to} onClick={props.onClick}>
            {title}
        </Button>
    );
}

export default MenuItem;
