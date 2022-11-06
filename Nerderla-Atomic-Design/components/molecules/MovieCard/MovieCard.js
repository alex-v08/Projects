import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { SubTitle, Tag, Icon } from '../../atoms';
import styles from './MovieCard.module.scss';

const cx = classNames.bind(styles);

const MovieCard = ({ title, tag, rate, image }) => (
    <div
        className={cx('container')}
        style={{
            backgroundImage: `url(${image?.fields?.file.url})`,
        }}
    >
        {tag && (
            <Tag label={tag.map((tag) => tag.sys.id.toUpperCase()).join(' ')} />
        )}
        <div className={cx('rate')}>
            {[...Array(Number(rate)).keys()].map((number) => (
                <Icon key={number} type={'star-fill'} />
            ))}
        </div>
        <SubTitle>{title}</SubTitle>
    </div>
);

MovieCard.defaultProps = {
    title: '',
    tag: '',
    rate: '',
    image: '',
};

MovieCard.propTypes = {
    title: PropTypes.string,
};
export default MovieCard;
