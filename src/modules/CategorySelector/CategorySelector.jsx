import React from 'react'
import PropTypes from 'prop-types'
import CategoryIcon from '../../common/components/CategoryIcon'
import ViewAll from '../../common/components/ViewAll'
import categories from '../../common/utils/categories'
import humanise from '../../common/utils/humanise'
import dropdownArrows from '../../common/assets/images/dropdown-arrows.svg'
import styles from './CategorySelector.module.scss'

class CategorySelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
  }

  updateCategory(event) {
    const { select } = this.props
    select(event.target.value)
    this.setState({ open: false })
  }

  toggle() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state
    const { category } = this.props

    return (
      <>
        {open && (
          <div className={styles.open}>
            <div className={styles.openHeader}>
              <h2>Categories</h2>
              <ViewAll size="small" />
            </div>
            {categories.map(c => (
              <button
                className={styles.openButton}
                key={c.key}
                type="button"
                value={c.key}
                onClick={this.updateCategory}
              >
                <CategoryIcon category={c.key} />
                {c.value}
              </button>
            ))}
          </div>
        )}

        {!open && (
          <button type="button" onClick={this.toggle}>
            {category && <CategoryIcon category={category} />}
            <p>{humanise(category)}</p>
            <img src={dropdownArrows} alt="Toggle category selector" />
          </button>
        )}
      </>
    )
  }
}

CategorySelector.propTypes = {
  category: PropTypes.string,
  select: PropTypes.func.isRequired,
}

CategorySelector.defaultProps = {
  category: null,
}

export default CategorySelector
