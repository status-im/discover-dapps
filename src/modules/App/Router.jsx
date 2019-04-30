import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Filtered from '../Filtered'
import RecentlyAdded from '../RecentlyAdded'
import Dapps from '../Dapps'
import Vote from '../Vote'
import Terms from '../Terms/Terms'

export default () => [
  <Switch key={1}>
    <Route exact path="/" component={Home} />
    <Route path="/categories/:id" component={Filtered} />
    <Route path="/all" component={Dapps} />
    <Route path="/recently-added" component={RecentlyAdded} />
    <Route path="/terms" component={Terms} />
  </Switch>,
  <Vote key={2} />,
]
