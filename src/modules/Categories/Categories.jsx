import React from 'react'
import PropTypes from 'prop-types'
import categories from '../../common/utils/categories'

const Categories = props => {
  const { select } = props
  const handleClick = category => select(category)

  return (
    <>
      {categories.map(category => (
        <button
          key={category.key}
          type="button"
          onClick={handleClick.bind(this, category.key)}
        >
          {category.value}
        </button>
      ))}
    </>
  )
}

Categories.propTypes = {
  select: PropTypes.func.isRequired,
}

export default Categories
