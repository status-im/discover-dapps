import { base64ToBlob } from './helpers'

// Todo: EmbarkJS -> setup it in init
// Todo: Should check for isAvailable
import EmbarkJS from '../../../embarkArtifacts/embarkjs'

EmbarkJS.Storage.setProvider('ipfs')

export const uploadMetadata = async metadata => {
  try {
    const hash = await EmbarkJS.Storage.saveText(metadata)
    return hash
  } catch (error) {
    throw new Error(
      `Uploading DApp metadata to IPFS failed. Details: ${error.message}`,
    )
  }
}

// Todo: should convert base64 image into binary data in order to upload it on IPFS
export const uploadImage = async base64Image => {
  try {
    const imageFile = [
      {
        files: [base64ToBlob(base64Image)],
      },
    ]
    const hash = await EmbarkJS.Storage.uploadFile(imageFile)
    return hash
  } catch (error) {
    throw new Error(
      `Uploading DApp image to IPFS failed. Details: ${error.message}`,
    )
  }
}

export const retrieveMetadata = async metadataHash => {
  try {
    const metadata = await EmbarkJS.Storage.get(metadataHash)
    return metadata
  } catch (error) {
    throw new Error(
      `Fetching metadata from IPFS failed. Details: ${error.message}`,
    )
  }
}

export const retrieveImageUrl = async imageHash => {
  return EmbarkJS.Storage.getUrl(imageHash)
}
