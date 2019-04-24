import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Filtered from '../Filtered'
import RecentlyAdded from '../RecentlyAdded'
import Vote from '../Vote'
import Dapps from '../Dapps'
import Example from '../BlockchainExample'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/categories" component={Filtered} />
    <Route path="/all" component={Dapps} />
    <Route path="/recently-added" component={RecentlyAdded} />
    <Route path="/vote" component={Vote} />
    <Route path="/example" component={Example} />
  </Switch>
)
