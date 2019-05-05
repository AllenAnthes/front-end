import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from 'components/Cards/Card/Card';
import ThumbsUp from 'static/images/icons/FontAwesome/thumbs-up-regular.svg';
import ThumbsUpSolid from 'static/images/icons/FontAwesome/thumbs-up-solid.svg';
import ThumbsDown from 'static/images/icons/FontAwesome/thumbs-down-regular.svg';
import ThumbsDownSolid from 'static/images/icons/FontAwesome/thumbs-down-solid.svg';
import styles from './ResourceCard.css';

ResourceCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  description: PropTypes.string,
  upvotes: PropTypes.number,
  upvoted: PropTypes.bool,
  downvotes: PropTypes.number,
  downvoted: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
};

ResourceCard.defaultProps = {
  className: undefined,
  description: '',
  upvotes: 0,
  upvoted: false,
  downvotes: 0,
  downvoted: false,
  href: '',
};

export default function ResourceCard({
  imageSource,
  name,
  description,
  upvotes,
  upvoted,
  downvotes,
  downvoted,
  className,
}) {
  return (
    <Card className={classNames(className, styles.ResourceCard)}>
      <div className={styles.titleSection}>
        <img src={imageSource} alt="logo" />
        <h5>{name}</h5>
      </div>

      <div>
        <p className={styles.descriptionText}>{description}</p>
      </div>

      <div className={styles.footerSection}>
        <span className={styles.footerText}>I found this useful </span>
        <button type="button" className={classNames(styles.voteBtn, { [styles.faded]: !upvotes })}>
          {upvoted ? <ThumbsUpSolid className={styles.active} /> : <ThumbsUp />}
          {upvotes}
        </button>

        <button
          type="button"
          className={classNames(styles.voteBtn, { [styles.faded]: !downvotes })}
        >
          {downvoted ? <ThumbsDownSolid className={styles.active} /> : <ThumbsDown />}
          {downvotes}
        </button>
      </div>
    </Card>
  );
}
