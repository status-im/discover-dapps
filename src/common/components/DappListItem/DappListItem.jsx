import React from 'react'
import { DappModel } from '../../utils/models'
import styles from './DappListItem.module.scss'

const DappListItem = props => {
  const { name } = props
  return <div className={styles.test}>{name}</div>
}

DappListItem.propTypes = DappModel

export default DappListItem
