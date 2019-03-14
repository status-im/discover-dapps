import { connect } from 'react-redux'
import Dapps from './Dapps'
import selector from './Dapps.selector'

const mapStateToProps = state => ({
  categories: selector(state),
})

export default connect(mapStateToProps)(Dapps)
