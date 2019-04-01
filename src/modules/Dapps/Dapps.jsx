import React from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'debounce'
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
    this.boundScroll = debounce(this.handleScroll.bind(this), 50)
    window.addEventListener('scroll', this.boundScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.boundScroll)
  }

  scanHeaderPositions() {
    const headerPositions = headerElements().map(element => ({
      id: element.id,
      position: getYPosition(element),
    }))

    this.setState({ headerPositions })
  }

  handleScroll() {
    const currentHeader = document.getElementById(this.currentCategory())
    const { headerPositions, categories } = this.state

    const newHeader = [...headerPositions]
      .reverse()
      .find(header => header.position < window.scrollY)

    if (!newHeader) {
      return this.setState({ currentCategoryIndex: 0 })
    }

    if (newHeader.id === currentHeader.id) {
      return false
    }

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
