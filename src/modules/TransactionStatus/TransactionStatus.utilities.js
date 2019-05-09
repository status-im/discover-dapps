export const COOKIE_NAME = 'TRANSACTION_STATUS_COOKIE'

export const setTransactionData = value => {
  localStorage.setItem(COOKIE_NAME, value)
}

export const getTransactionData = () => {
  const value = localStorage.getItem(COOKIE_NAME)
  return value === null ? '' : value
}
