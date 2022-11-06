import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import { NavItem } from '../../molecules';
import logo from './assets/logo.svg';

const cx = classNames.bind(styles);

const Nav = ({ navItems }) => (
    <nav className={cx('nav')}>
        <NavItem href="/" image={logo} className={cx('main-logo')} />
        <div className={cx('nav-items')}>
            {navItems.map((navItem, i) => (
                <NavItem className={cx('nav-item')} key={i} {...navItem} />
            ))}
        </div>
    </nav>
);

Nav.defaultProps = {
    navItems: [],
};

Nav.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object),
};
export default Nav;
