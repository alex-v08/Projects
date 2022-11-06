import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import LinesEllipsis from 'react-lines-ellipsis';
import styles from './SubTitle.module.scss';

const cx = classNames.bind(styles);

const SubTitle = ({ children, maxLine }) => (
    <div className={cx('container')}>
        <LinesEllipsis
            text={children}
            maxLine={maxLine}
            ellipsis="..."
            basedOn="letters"
        />
    </div>
);

SubTitle.defaultProps = {
    children: '',
};

SubTitle.propTypes = {
    children: PropTypes.string,
    maxLine: 1,
};
export default SubTitle;
