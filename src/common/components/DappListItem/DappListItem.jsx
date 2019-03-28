import React from 'react'
import { DappModel } from '../../utils/models'
import styles from './DappListItem.module.scss'
import icon from '../../assets/images/icon.svg'

const DappListItem = props => {
  const { name, description, url } = props
  return (
    <div className={styles.listItem}>
      <div>
        <img className={styles.image} src={icon} alt="App icon" />
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
