import React from 'react'
import BlockchainSDK from '../../common/blockchain'
// import EmbarkJS from '../../embarkArtifacts/embarkjs';

class Example extends React.Component {
  async logDiscoverMethod() {
    console.log('here')
    debugger
    console.log(await BlockchainSDK.DiscoverService.safeMax())
  }

  render() {
    return <h1 onLoad={this.logDiscoverMethod()} />
  }
}

export default Example
