import React from 'react'
import { DappModel } from '../../utils/models'

const DappListItem = props => {
  const { name } = props
  return <div>{name}</div>
}

DappListItem.propTypes = DappModel

export default DappListItem
