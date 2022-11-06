import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';
import Icon from '../../atoms/Icon';
import Image from 'next/image';

const cx = classNames.bind(styles);
export const ICON_TYPES = [
    'account',
    'calendar',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clock',
    'close',
    'expand',
    'gallery',
    'home',
    'menu',
    'minus',
    'movie',
    'pause',
    'play',
    'search',
    'settings',
    'star-fill',
    'star-stroke',
    'tv',
];

const NavItem = ({ href, icon, image, className }) => (
    <a className={cx('nav-item', className)} href={href}>
        {icon && <Icon type={icon} />}
        {image && <Image src={image} alt="" />}
    </a>
);

NavItem.defaultProps = {
    href: '',
    icon: '',
    image: '',
    className: '',
};

NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.oneOf(ICON_TYPES),
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
};
export default NavItem;
