import { ethers, BigNumber, utils } from 'ethers'
import moment from 'moment'

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

export const getTicketIdFromPlaceBetReceipt = (receipt) => {
  const { events } = receipt
  const betPlacedEvent = events[events.length - 1]
  return betPlacedEvent?.args?.tokenId?.toString()
}

export const getProxyAddressFromReceipt = (receipt) => {
  const { events } = receipt
  const ProxyCreated = events[events.length - 1]
  return ProxyCreated?.args?.proxy
}

export const parseProxyCreatedEvent = (event) => {
  const { args } = event
  const [
    proxy,
    ownerAddress,
    createdAt,
    bettingPeriodEndsAt,
    lockInPeriodEndsAt,
    stakeAmount,
  ] = args
  const result = {
    proxyAddress: proxy,
    ownerAddress: ownerAddress,
    createdAt: createdAt.toString(),
    lockInPeriodEndsAt: lockInPeriodEndsAt.toString(),
    bettingPeriodEndsAt: bettingPeriodEndsAt.toString(),
    stakeAmount: stakeAmount.toString(),
  }
  return result
}

export const getBetStatus = ({
  startTime,
  bettingPeriodEndsAt,
  lockInPeriodEndsAt,
}) => {
  const currentTime = Date.now() / 1000
  if (currentTime < bettingPeriodEndsAt) {
    return { status: 'BET_OPEN', color: 'green' }
  }
  if (currentTime < lockInPeriodEndsAt) {
    return { status: 'BET_LOCKED', color: 'orange' }
  }
  return { status: 'BET_CLOSED', color: 'red' }
}

export const getBetDateData = (data, status) => {
  const bettingPeriodEndsAt = moment(
    parseInt(data.bettingPeriodEndsAt) * 1000,
  ).format('MMM DD, YYYY')
  const lockInPeriodEndsAt = moment(
    parseInt(data.lockInPeriodEndsAt) * 1000,
  ).format('MMM DD, YYYY')

  if (status === 'BET_OPEN')
    return { label: 'Betting period ends on', date: bettingPeriodEndsAt }
  if (status === 'BET_LOCKED')
    return { label: 'Lockin period ends on', date: lockInPeriodEndsAt }
  return { label: 'bet ended on:', date: lockInPeriodEndsAt }
}
