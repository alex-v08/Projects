import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

const Tag = ({ label, children }) => (
    <div className={cx('tag')}>{label || children}</div>
);

Tag.defaultProps = {
    label: 'Tag Name',
};

Tag.propTypes = {
    label: PropTypes.string,
};
export default Tag;
