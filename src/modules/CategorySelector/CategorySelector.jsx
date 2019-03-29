import React from 'react'
import PropTypes from 'prop-types'
import categories from '../../common/utils/categories'
import humanise from '../../common/utils/humanise'
import dropdownArrows from '../../common/assets/images/dropdown-arrows.svg'

// const CategorySelector = props => {
//   const { category, select } = props
//   const handleChange = event => select(event.target.value)

//   return (
//     <select value={category || ''} onChange={handleChange}>
//       <option style={{ display: 'none' }} />
//       {categories.map(c => (
//         <option key={c.key} value={c.key}>
//           {c.value}
//         </option>
//       ))}
//     </select>
//   )
// }

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
          <div>
            {categories.map(c => (
              <button
                key={c.key}
                type="button"
                value={c.key}
                onClick={this.updateCategory}
              >
                {c.value}
              </button>
            ))}
          </div>
        )}

        {!open && (
          <button type="button" onClick={this.toggle}>
            {/* TODO: category icon here */}
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
