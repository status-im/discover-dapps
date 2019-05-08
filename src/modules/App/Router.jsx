import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Filtered from '../Filtered'
import RecentlyAdded from '../RecentlyAdded'
import Dapps from '../Dapps'
import Vote from '../Vote'
import Submit from '../Submit'
import Terms from '../Terms/Terms'

import Example from '../BlockchainExample'

class Router extends React.Component {
  componentDidMount() {
    const { fetchHighestRanked, fetchRecentlyAdded } = this.props
    fetchHighestRanked()
    fetchRecentlyAdded()
  }

  render() {
    return [
      <Switch key={1}>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:id" component={Filtered} />
        <Route path="/all" component={Dapps} />
        <Route path="/recently-added" component={RecentlyAdded} />
        <Route path="/terms" component={Terms} />
        <Route path="/example" component={Example} />
      </Switch>,
      <Vote key={2} />,
      <Submit key={3} />,
    ]
  }
}

Router.propTypes = {
  fetchHighestRanked: PropTypes.func.isRequired,
  fetchRecentlyAdded: PropTypes.func.isRequired,
}

export default Router
