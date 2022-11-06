import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ label, type = 'primary', children, onClick, ...props }) => (
    <button {...props} onClick={onClick} className={cx('button', type)}>
        {label || children}
    </button>
);

Button.defaultProps = {
    label: 'Button',
    type: 'primary',
};

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'secondary-white',
        'secondary-gradient',
    ]),
    onClick: PropTypes.func,
};
export default Button;
