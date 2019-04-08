import React from 'react'
import { DappListModel } from '../../common/utils/models'
import CategorySelector from '../CategorySelector'
import DappList from '../../common/components/DappList'
import styles from './Filtered.module.scss'

const Filtered = props => {
  const { dapps } = props

  return (
    <>
      <CategorySelector />
      <div className={styles.list}>
        <DappList dapps={dapps} />
      </div>
    </>
  )
}

Filtered.propTypes = {
  dapps: DappListModel.isRequired,
}

export default Filtered
