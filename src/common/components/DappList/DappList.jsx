import React from 'react'
import { DappListModel } from '../../utils/models'
import DappListItem from '../DappListItem'

const DappList = props => {
  const { dapps } = props
  return dapps && dapps.map(dapp => <DappListItem {...dapp} key={dapp.name} />)
}

DappList.propTypes = {
  dapps: DappListModel.isRequired,
}

export default DappList
