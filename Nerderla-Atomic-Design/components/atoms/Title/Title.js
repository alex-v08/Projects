import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

const Title = ({ children }) => (
    <div className={cx('container')}>{children}</div>
);

Title.defaultProps = {
    children: '',
};

Title.propTypes = {
    children: PropTypes.string,
};
export default Title;
