import EmbarkJS from '../../../../embarkArtifacts/embarkjs'

class EmbarkService {
  constructor() {
    if (!EmbarkService.instance) {
      EmbarkJS.Storage.setProvider('ipfs')
      EmbarkService.instance = EmbarkJS
    }

    return EmbarkService.instance
  }
}

export default new EmbarkService()
