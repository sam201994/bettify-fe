import { ethers, BigNumber, utils } from 'ethers'

export const cleanNumberInput = (value, maxDecimals = 6) => {
  const numArr = String(value)
    .replace(/[^0-9.]/g, '')
    .split('.')
  const wholePart = numArr[0] || ''
  const decimalPart = numArr[1] || ''
  const dot = String(value).includes('.') ? '.' : ''
  return wholePart + dot + decimalPart.slice(0, maxDecimals)
}

export const commifyNumber = (value) => {
  const numArr = String(value).split('.')
  const wholePart = numArr[0] || ''
  const commifiedWholePart =
    wholePart.length > 0 ? utils.commify(wholePart) : ''
  const decimalPart = numArr[1] || ''
  const dot = String(value).includes('.') ? '.' : ''
  return commifiedWholePart + dot + decimalPart
}

export const minifyAddress = (address, middleChars = 6, endChars = 4) => {
  if (!address) return ''
  if (address.substr(-4) == '.eth' && address.length < 20) return address
  return `${address.substring(0, middleChars + 2)}...${address.substring(
    address.length - endChars,
  )}`
}

export const formatWeiToDecimal = (weiString, decimal) => {
  return ethers.utils.formatUnits(BigNumber.from(weiString), decimal)
}

export const formatDecimalToWei = (decimalString, decimal) => {
  return ethers.utils.parseUnits(decimalString, decimal).toString()
}

export const isValidAddress = (address) => {
  return ethers.utils.isAddress(address)
}
