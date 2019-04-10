import React from 'react'
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
    showActionButtons,
  } = props

  return (
    <div className={isRanked ? styles.rankedListItem : styles.listItem}>
      {isRanked && <div className={styles.position}>{position}</div>}
      <div>
        <ReactImageFallback
          className={styles.image}
          src={image}
          fallbackImage={icon}
          alt="App icon"
        />
      </div>
      <div>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.description}>{description}</p>
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
            <a className={styles.vote} href="#abc">
              <img src={upvoteArrowIcon} alt="" />
              Upvote
            </a>
            <a className={styles.vote} href="#abc">
              <img src={downvoteArrowIcon} alt="" />
              Downvote
            </a>
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

DappListItem.propTypes = DappModel

export default DappListItem
