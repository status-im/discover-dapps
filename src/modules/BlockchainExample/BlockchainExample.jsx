import React from 'react'
import BlockchainSDK from '../../common/blockchain'

class Example extends React.Component {
  async logDiscoverMethod() {
    const services = await BlockchainSDK.init()
    console.log(
      await services.DiscoverService.createDApp(
        '0x123',
        '100000000000000000',
        '0x123',
      ),
    )
  }

  render() {
    return <h1 onLoad={this.logDiscoverMethod()} />
  }
}

export default Example
