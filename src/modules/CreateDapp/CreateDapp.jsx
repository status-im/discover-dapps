/* global web3 */
import React from 'react'
import EmbarkJS from '../../embarkArtifacts/embarkjs'

class CreateDapp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      url: '',
      icon: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

  async onSubmit() {
    // TODO: embarkjs must be a service
    // TODO: replace this for a redux action + saga

    const metadata = JSON.stringify({ ...this.state })

    const id = web3.utils.soliditySha3(JSON.stringify(this.state))
    const ipfsHash = await EmbarkJS.Storage.saveText(metadata)

    console.log('The id: ', id)
    console.log('The state: ')
    console.log(this.state)

    // TODO: call createDApp in the saga
    //       ipfs hash needs to be stored in the Data struct too
    // DappStore.methods.createDapp(id, amount)...
    // DappStore.methods.setMetadata(id, web3.utils.toHex(ipfsHash))...

    // If the developer wants to update the metadata again, they would dapp would upload everything again to ipfs
    // and then execute:
    // DappStore.methods.setMetadata(id, web3.utils.toHex(ipfsHash))...
  }

  uploadFile(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({ icon: reader.result })
    }
    reader.onerror = console.error
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    const { name, description, url } = this.state
    return (
      <div>
        <h2>Create Dapp</h2>
        Name:
        <input type="text" value={name} onChange={this.handleChange('name')} />
        <br />
        Description:
        <input
          type="text"
          value={description}
          onChange={this.handleChange('description')}
        />
        <br />
        Url:
        <input type="text" value={url} onChange={this.handleChange('url')} />
        <br />
        Icon
        <input type="file" onChange={this.uploadFile} />
        <br />
        <button type="button" onClick={this.onSubmit}>
          submit
        </button>
      </div>
    )
  }
}

export default CreateDapp
