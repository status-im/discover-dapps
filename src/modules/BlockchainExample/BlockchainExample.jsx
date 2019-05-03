import React from 'react'
import BlockchainSDK from '../../common/blockchain'

class Example extends React.Component {
  async logDiscoverMethod() {
    // const services = await BlockchainSDK.init()
    // console.log(await services.SNTService.controller())
    // await services.SNTService.generateTokens()
    // await services.DiscoverService.createDApp('0x2', 10000, '0x2')
    // console.log(await services.DiscoverService.getDAppById('0x2'))
  }

  render() {
    return (
      <div>
        <h1 onLoad={this.logDiscoverMethod()} />
      </div>
    )
  }
}

export default Example
// QmZGzoAEEZoFP9jYXoVfhkDqXHxVrFCSMxSU8eGQpcDNHw
