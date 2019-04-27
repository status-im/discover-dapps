import React from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import { DappModel } from '../../utils/models'
import styles from './DappListItem.module.scss'
import icon from '../../assets/images/icon.svg'
import sntIcon from '../../assets/images/SNT.svg'
import upvoteArrowIcon from '../../assets/images/upvote-arrow.svg'
import downvoteArrowIcon from '../../assets/images/downvote-arrow.svg'

const DappListItem = props => {
  const {
    name,
    description,
    url,
    image,
    isRanked,
    position,
    category,
    showActionButtons,
    onClickUpVote,
    onClickDownVote,
    onToggleProfileModal,
  } = props

  return (
    <div className={isRanked ? styles.rankedListItem : styles.listItem}>
      {isRanked && <div className={styles.position}>{position}</div>}
      <div onClick={() => onToggleProfileModal(name)}>
        <ReactImageFallback
          className={styles.image}
          src={image}
          fallbackImage={icon}
          alt="App icon"
        />
      </div>
      <div>
        <div onClick={() => onToggleProfileModal(name)}>
          <h2 className={styles.header}>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <a className={styles.url} href={url}>
          {url}
          &nbsp;&rarr;
        </a>
        {showActionButtons && (
          <p className={styles.actionArea}>
            <span className={styles.sntAmount}>
              <img src={sntIcon} alt="SNT" width="16" height="16" />
              12,345
            </span>
            <span className={styles.vote} onClick={onClickUpVote}>
              <img src={upvoteArrowIcon} alt="" />
              Upvote
            </span>
            <span className={styles.vote} onClick={onClickDownVote}>
              <img src={downvoteArrowIcon} alt="" />
              Downvote
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

DappListItem.defaultProps = {
  isRanked: false,
  showActionButtons: false,
}

DappListItem.propTypes = Object.assign({}, DappModel, {
  onClickUpVote: PropTypes.func.isRequired,
  onClickDownVote: PropTypes.func.isRequired,
})

export default DappListItem
