import React from 'react'
import { Link } from 'react-router-dom'
import { DappListModel } from '../../common/utils/models'
import DappList from '../../common/components/DappList'

const RecentlyAdded = props => {
  const { dapps } = props

  return (
    <>
      <h1>Recently Added</h1>
      <Link to="/all">View all</Link>
      <DappList dapps={dapps} />
    </>
  )
}

RecentlyAdded.propTypes = {
  dapps: DappListModel.isRequired,
}

export default RecentlyAdded
