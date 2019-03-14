import { connect } from 'react-redux'
import CategorySelector from './CategorySelector'
import { selectCategory } from './CategorySelector.reducer'

const mapStateToProps = state => ({ category: state.selectedCategory })
const mapDispatchToProps = dispatch => ({
  select: category => dispatch(selectCategory(category)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategorySelector)
