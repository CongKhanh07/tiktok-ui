// import library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// import file
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
    //className for custom
    className,
    //Icon
    leftIcon,
    rightIcon,
    //remaining props
    ...passProps
}) {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    console.log(props);

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        text: text,
        disabled: disabled,
        rounded: rounded,
        small: small,
        large: large,
        [className]: className,
    });

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
