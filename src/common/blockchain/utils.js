const TRANSACTION_STATUSES = {
  Failed: 0,
  Successful: 1,
  Pending: 2,
}

export default {
  getTxStatus: async txHash => {
    const txReceipt = await global.web3.eth.getTransactionReceipt(txHash)
    if (txReceipt) {
      return txReceipt.status
        ? TRANSACTION_STATUSES.Successful
        : TRANSACTION_STATUSES.Failed
    }

    return TRANSACTION_STATUSES.Pending
  },
}
