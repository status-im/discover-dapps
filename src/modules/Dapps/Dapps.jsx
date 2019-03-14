import React from 'react'
import PropTypes from 'prop-types'
import { DappListModel } from '../../common/utils/models'
import DappList from '../../common/components/DappList'
import humanise from '../../common/utils/humanise'

const Dapps = props => {
  const { categories } = props

  return (
    <>
      <h1>All Dapps</h1>
      {categories.map(category => (
        <div key={category.category}>
          <h2>{humanise(category.category)}</h2>
          <DappList dapps={category.dapps} />
        </div>
      ))}
    </>
  )
}

Dapps.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ category: PropTypes.string, dapps: DappListModel }),
  ).isRequired,
}

export default Dapps
