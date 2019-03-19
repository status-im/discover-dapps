import React from 'react'
import PropTypes from 'prop-types'
import { DappListModel } from '../../common/utils/models'
import DappList from '../../common/components/DappList'
import CategoryHeader from '../CategoryHeader'
import styles from './Dapps.module.scss'
import { headerElements, getYPosition } from './Dapps.utils'

class Dapps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: props.categories.map(category => category.category),
      currentCategoryIndex: 0,
    }
  }

  componentDidMount() {
    this.scanHeaderPositions()
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  scanHeaderPositions() {
    const headerPositions = headerElements().reduce(
      (accumulator, element) => ({
        ...accumulator,
        [element.id]: getYPosition(element),
      }),
      {},
    )

    this.setState({ headerPositions })
  }

  handleScroll() {
    const currentHeader = document.getElementById(this.currentCategory())
    const { headerPositions, currentCategoryIndex } = this.state
    const currentHeaderOriginalPosition = headerPositions[currentHeader.id]
    const isAboveOriginalPosition =
      currentHeaderOriginalPosition - window.scrollY > 10

    if (isAboveOriginalPosition) {
      return this.setState({
        currentCategoryIndex:
          currentCategoryIndex > 0 ? currentCategoryIndex - 1 : 0,
      })
    }

    const nonActiveHeaders = headerElements().filter(
      element => element.id !== currentHeader.id,
    )

    const bumpingHeaders = nonActiveHeaders.filter(header => {
      const yPosition = header.getBoundingClientRect().y
      return yPosition >= 0 && yPosition < 50
    })

    if (!bumpingHeaders.length) {
      return false
    }

    const [newHeader] = bumpingHeaders
    const { categories } = this.state
    const newIndex = categories.indexOf(newHeader.id)

    return this.setState({ currentCategoryIndex: newIndex })
  }

  currentCategory() {
    const { currentCategoryIndex, categories } = this.state
    return categories[currentCategoryIndex]
  }

  isCurrentCategory(category) {
    return category === this.currentCategory()
  }

  render() {
    const { categories } = this.props

    return (
      <div className={styles.list}>
        {categories.map(category => (
          <div key={category.category}>
            <div id={category.category} className="category-header">
              <CategoryHeader
                text={category.category}
                active={this.isCurrentCategory(category.category)}
              />
            </div>
            <DappList dapps={category.dapps} />
          </div>
        ))}
      </div>
    )
  }
}

Dapps.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ category: PropTypes.string, dapps: DappListModel }),
  ).isRequired,
}

export default Dapps
