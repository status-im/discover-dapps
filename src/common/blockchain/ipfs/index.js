import * as helpers from './helpers'
import EmbarkJSService from '../services/embark-service/embark-service'

const checkIPFSAvailability = async () => {
  const isAvailable = await EmbarkJSService.Storage.isAvailable()
  if (!isAvailable) {
    throw new Error('IPFS Storage is unavailable')
  }
}

export const uploadMetadata = async metadata => {
  try {
    await checkIPFSAvailability()

    const hash = await EmbarkJSService.Storage.saveText(metadata)
    const metadataInBytes = helpers.getBytes32FromIpfsHash(hash)
    return metadataInBytes
  } catch (error) {
    throw new Error(
      `Uploading DApp metadata to IPFS failed. Details: ${error.message}`,
    )
  }
}

export const uploadImage = async base64Image => {
  try {
    await checkIPFSAvailability()

    const imageFile = [
      {
        files: [helpers.base64ToBlob(base64Image)],
      },
    ]

    const hash = await EmbarkJSService.Storage.uploadFile(imageFile)
    return hash
  } catch (error) {
    throw new Error(
      `Uploading DApp image to IPFS failed. Details: ${error.message}`,
    )
  }
}

export const retrieveMetadata = async metadataBytes32 => {
  try {
    await checkIPFSAvailability()

    const metadataHash = helpers.getIpfsHashFromBytes32(metadataBytes32)
    const metadata = await EmbarkJSService.Storage.get(metadataHash)

    return metadata
  } catch (error) {
    throw new Error(
      `Fetching metadata from IPFS failed. Details: ${error.message}`,
    )
  }
}

export const retrieveImageUrl = async imageHash => {
  await checkIPFSAvailability()
  return EmbarkJSService.Storage.getUrl(imageHash)
}
