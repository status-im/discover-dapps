import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import CategorySelector from './CategorySelector'
// import { selectCategory } from './CategorySelector.reducer'

// const mapStateToProps = state => ({ category: state.selectedCategory })
const mapDispatchToProps = dispatch => ({
  select: category => {
    dispatch(push(`/categories/${category}`))
    //dispatch(selectCategory(category))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(CategorySelector)
