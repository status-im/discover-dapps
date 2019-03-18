import React from 'react'
import PropTypes from 'prop-types'
import { DappListModel } from '../../common/utils/models'
import DappList from '../../common/components/DappList'
import CategoryHeader from '../CategoryHeader'

const Dapps = props => {
  const { categories } = props

  return (
    <>
      {categories.map(category => (
        <div key={category.category}>
          <CategoryHeader text={category.category} />
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
