import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Component.module.scss';

const cx = classNames.bind(styles);

const Component = ({ title }) => <div className={cx('container')}>{title}</div>;

Component.defaultProps = {
    title: '',
};

Component.propTypes = {
    title: PropTypes.string,
};
export default Component;
