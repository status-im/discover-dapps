export const base64ToBlob = base64Text => {
  const byteString = atob(base64Text.split(',')[1])

  const arrayBuffer = new ArrayBuffer(byteString.length)
  const uintArray = new Uint8Array(arrayBuffer)
  for (let i = 0; i < byteString.length; i++) {
    uintArray[i] = byteString.charCodeAt(i)
  }

  return new Blob([arrayBuffer])
}
