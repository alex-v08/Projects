import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FeaturedMovie.module.scss';
import { Button, Title, Lead, Tag, Icon } from '../../atoms';

const cx = classNames.bind(styles);

const FeaturedMovie = ({ title, lead, tag, image, rate }) => (
    <div
        className={cx('container')}
        style={{
            height: `${window.innerHeight}px`,
            backgroundImage: `url(${image.fields.file.url})`,
        }}
    >
        <Tag label={tag.map((tag) => tag.sys.id.toUpperCase()).join(' ')} />
        <div className={cx('rate')}>
            {[...Array(Number(rate)).keys()].map((number) => (
                <Icon key={number} type={'star-fill'} />
            ))}
        </div>
        <Title>{title}</Title>
        <Lead>{lead}</Lead>
        <Button label={'Watch Now'} type={'secondary-gradient'} />
    </div>
);

FeaturedMovie.defaultProps = {
    title: '',
};

FeaturedMovie.propTypes = {
    title: PropTypes.string,
};
export default FeaturedMovie;
