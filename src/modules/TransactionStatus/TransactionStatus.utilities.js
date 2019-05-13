const COOKIE_NAME = 'TRANSACTION_STATUS_COOKIE'

class TransactionStatus {
  constructor() {
    this.dappId = ''
    this.dappTx = ''
    this.dappName = ''
    this.dappImg = ''
    this.progress = false
    this.published = false
    this.failed = false
  }

  persistTransactionData() {
    localStorage.setItem(COOKIE_NAME, JSON.stringify(this))
  }

  setDappName(name) {
    this.dappName = name
    this.persistTransactionData()
  }

  setTransactionInfo(id, tx) {
    this.dappId = id
    this.dappTx = tx
    this.persistTransactionData()
  }

  setProgress(progress) {
    this.progress = progress
    this.published = false
    this.failed = false
    this.persistTransactionData()
  }

  setPublished(published) {
    this.dappTx = ''
    this.progress = false
    this.published = published
    this.failed = false
    this.persistTransactionData()
  }

  setFailed(failed) {
    this.dappTx = ''
    this.progress = false
    this.published = false
    this.failed = failed
    this.persistTransactionData()
  }
}

const getTransactionData = () => {
  return localStorage.getItem(COOKIE_NAME)
}

export const transactionStatusInitInstance = (name, img) => {
  const model = new TransactionStatus()
  model.dappName = name
  model.dappImg = img
  model.progress = true
  return model
}

export const transactionStatusFetchedInstance = () => {
  const data = getTransactionData()
  let transactionStatus = new TransactionStatus()
  if (data !== null)
    transactionStatus = Object.assign(transactionStatus, JSON.parse(data))
  return transactionStatus
}
