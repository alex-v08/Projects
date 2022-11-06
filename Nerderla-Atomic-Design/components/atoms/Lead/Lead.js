import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Lead.module.scss';

const cx = classNames.bind(styles);

const Lead = ({ children }) => (
    <div className={cx('container')}>{children}</div>
);

Lead.defaultProps = {
    children: '',
};

Lead.propTypes = {
    children: PropTypes.string,
};
export default Lead;
