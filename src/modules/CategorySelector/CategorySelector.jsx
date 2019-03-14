import React from 'react'
import PropTypes from 'prop-types'
import categories from '../../common/utils/categories'

const CategorySelector = props => {
  const { category, select } = props
  const handleChange = event => select(event.target.value)

  return (
    <select value={category || ''} onChange={handleChange}>
      <option style={{ display: 'none' }} />
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.value}
        </option>
      ))}
    </select>
  )
}

CategorySelector.propTypes = {
  category: PropTypes.string,
  select: PropTypes.func.isRequired,
}

CategorySelector.defaultProps = {
  category: null,
}

export default CategorySelector
