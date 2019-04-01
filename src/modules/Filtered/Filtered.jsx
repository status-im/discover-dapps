import React from 'react'
import { DappListModel } from '../../common/utils/models'
import CategorySelector from '../CategorySelector'
import DappList from '../../common/components/DappList'

const Filtered = props => {
  const { dapps } = props

  return (
    <>
      <CategorySelector />
      <DappList dapps={dapps} />
    </>
  )
}

Filtered.propTypes = {
  dapps: DappListModel.isRequired,
}

export default Filtered
