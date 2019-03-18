import React from 'react'
import { DappModel } from '../../utils/models'
import styles from './DappListItem.module.scss'
import icon from '../../assets/images/icon.svg'

const DappListItem = props => {
  const { name, description, url } = props
  return (
    <div className={styles.listItem}>
      <div>
        <img src={icon} alt="App icon" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url}>{url}</a>
      </div>
    </div>
  )
}

DappListItem.propTypes = DappModel

export default DappListItem
