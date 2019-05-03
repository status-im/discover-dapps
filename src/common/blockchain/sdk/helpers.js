export default {
  broadcastContractFn: (contractMethod, account) => {
    return new Promise(resolve => {
      contractMethod({ from: account }).on('transactionHash', hash => {
        resolve(hash)
      })
    })
  },
}
