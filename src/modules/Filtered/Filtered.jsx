import React from 'react'
import { Link } from 'react-router-dom'
import { DappListModel } from '../../common/utils/models'
import CategorySelector from '../CategorySelector'
import DappList from '../../common/components/DappList'

const Filtered = props => {
  const { dapps } = props

  return (
    <>
      <CategorySelector />
      <Link to="/all">View all</Link>
      <DappList dapps={dapps} />
    </>
  )
}

Filtered.propTypes = {
  dapps: DappListModel.isRequired,
}

export default Filtered
