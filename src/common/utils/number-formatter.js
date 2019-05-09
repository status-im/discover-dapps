const ONE = '1000000000000000000'

const formatBigNumberToNumber = function(bigNumber) {
  let stringifyedNumber = bigNumber.toString(10)

  if (stringifyedNumber == '0') {
    return stringifyedNumber
  }

  let numberWholePartLength = 0

  if (bigNumber.lt(ONE)) {
    stringifyedNumber = stringifyedNumber.padStart(19, 0)
    numberWholePartLength = 1
  } else {
    numberWholePartLength = bigNumber.div('1000000000000000000').toString(10)
      .length
  }

  return `${stringifyedNumber.substr(
    0,
    numberWholePartLength,
  )}.${stringifyedNumber.substr(
    numberWholePartLength,
    stringifyedNumber.length,
  )}`
}

export default formatBigNumberToNumber
