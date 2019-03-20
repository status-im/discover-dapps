import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import categories from '../../common/utils/categories'
import styles from './Categories.module.scss'

const Categories = props => {
  const { select } = props
  const handleClick = category => select(category)

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.headline}>Discover DApps</h2>
        <Link className={styles.url} to="/all">
          View all&nbsp;&rarr;
        </Link>
      </div>
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
