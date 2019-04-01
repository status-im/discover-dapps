import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import { DappModel } from '../../utils/models'
import styles from './DappListItem.module.scss'
import icon from '../../assets/images/icon.svg'

const DappListItem = props => {
  const { name, description, url, image } = props
  return (
    <div className={styles.listItem}>
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
      </div>
    </div>
  )
}

DappListItem.propTypes = DappModel

export default DappListItem
