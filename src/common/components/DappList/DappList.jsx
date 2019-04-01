import React from 'react'
import { DappListModel } from '../../utils/models'
import DappListItem from '../DappListItem'
import styles from './DappList.module.scss'

const DappList = props => {
  const { dapps } = props
  return (
    <div className={styles.list}>
      {dapps && dapps.map(dapp => <DappListItem {...dapp} key={dapp.name} />)}
    </div>
  )
}

DappList.propTypes = {
  dapps: DappListModel.isRequired,
}

export default DappList
